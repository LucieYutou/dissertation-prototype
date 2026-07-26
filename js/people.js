function initialisePeopleModule() {
const peopleState = {
  growthMeasure: "Headcount",

  studentYear: "All",
  studentMeasure: "Headcount",
  studentDegreeHighlight: "All",
  studentGenderHighlight: "All",
  selectedProgramme: "",
  currentProgrammeTopCategories: [],
  selectedStudentRegion: "",

  staffYear: "All",
  staffMeasure: "Headcount",
  staffRoleHighlight: "All",
  staffGenderHighlight: "All",
  selectedStaffCountry: "",
  staffNationalityTopN: 10
};

const PEOPLE_STANDARD_START_YEAR = 2012;
const PEOPLE_EARLY_END_YEAR = 2011;
const STAFF_NATIONALITY_START_YEAR = 2018;
const SVG_NS = "http://www.w3.org/2000/svg";

const WORLD_TOPO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

let worldFeaturesCache = null;

const PEOPLE_PALETTE = [
  "#8b2f3c",
  "#245d7a",
  "#5f7f3a",
  "#b06f25",
  "#6b4f8a",
  "#2f7f72",
  "#9a4f2f",
  "#3f3f3f",
  "#b35d74",
  "#4f7898",
  "#7b6a2f",
  "#8a4f6f",
  "#5e6d9a",
  "#a45c3d",
  "#3d7c5f"
];

const REGION_ALIASES = {
  "united states of america": "united states",
  "usa": "united states",
  "us": "united states",
  "u s": "united states",
  "u s a": "united states",

  "uk": "united kingdom",
  "u k": "united kingdom",
  "u.k.": "united kingdom",
  "u.k": "united kingdom",
  "great britain": "united kingdom",
  "britain": "united kingdom",
  "british": "united kingdom",
  "united kingdom of great britain and northern ireland": "united kingdom",

  "england": "england",
  "scotland": "scotland",
  "wales": "wales",
  "northern ireland": "northern ireland",

  "china": "china",
  "china mainland": "china",
  "mainland china": "china",
  "hong kong": "hong kong",
  "hong kong sar": "hong kong",
  "hong kong china": "hong kong",
  "macau": "macau",
  "macao": "macau",
  "macau china": "macau",
  "macao china": "macau",
  "taiwan": "taiwan",
  "taiwan china": "taiwan",

  "republic of ireland": "ireland",
  "korea republic of": "south korea",
  "south korea": "south korea",
  "russian federation": "russia"
};

const REGION_DISPLAY_NAMES = {
  "china": "China (Mainland)",
  "hong kong": "Hong Kong (China)",
  "macau": "Macau (China)",
  "taiwan": "Taiwan (China)",
  "united kingdom": "United Kingdom",
  "united states": "United States",
  "south korea": "South Korea",
  "north korea": "North Korea"
};

const UK_REGION_NAMES = ["Scotland", "England", "Wales", "Northern Ireland"];

const UK_BREAKDOWN_LABELS = [
  "Scotland",
  "England",
  "Wales",
  "Northern Ireland",
  "Other UK / Unknown"
];

/* ------------------------------
   Basic helpers
------------------------------ */

function peopleRows() {
  return typeof PEOPLE_ROWS !== "undefined" ? PEOPLE_ROWS : [];
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fmt(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";

  return Number(value).toLocaleString(undefined, {
    maximumFractionDigits: Number(value) % 1 === 0 ? 0 : 1
  });
}

function pct(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  return `${Number(value).toFixed(1)}%`;
}

function shortLabel(label, maxLength) {
  const text = String(label || "");
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
}

function clearElement(element) {
  if (!element) return;
  while (element.firstChild) element.removeChild(element.firstChild);
}

function svgEl(name, attrs = {}, text = "") {
  const element = document.createElementNS(SVG_NS, name);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  if (text !== "") element.textContent = text;
  return element;
}

function showTooltip(tooltip, event, html) {
  if (!tooltip) return;

  tooltip.innerHTML = html;
  tooltip.hidden = false;
  tooltip.style.left = `${event.clientX + 16}px`;
  tooltip.style.top = `${event.clientY + 16}px`;
}

function hideTooltip(tooltip) {
  if (!tooltip) return;
  tooltip.hidden = true;
}

function setActiveToggle(buttons, value, attr = "measure") {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset[attr] === value);
  });
}

function hashString(value) {
  return String(value).split("").reduce((hash, char) => {
    return ((hash << 5) - hash) + char.charCodeAt(0);
  }, 0);
}

function colorForCategory(category, categories = []) {
  const index = categories.indexOf(category);
  const safeIndex = index >= 0 ? index : Math.abs(hashString(category)) % PEOPLE_PALETTE.length;
  return PEOPLE_PALETTE[safeIndex % PEOPLE_PALETTE.length];
}

function normaliseRegionName(name) {
  const raw = String(name || "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z\s.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return REGION_ALIASES[raw] || raw;
}

function getRegionDisplayName(name) {
  const key = normaliseRegionName(name);
  return REGION_DISPLAY_NAMES[key] || name;
}

function isUnknownCategory(category) {
  const text = String(category || "").toLowerCase();
  return text.includes("unknown") || text.includes("not known") || text.includes("not recorded");
}

function isUKInternalCategory(category) {
  return UK_REGION_NAMES
    .map((name) => name.toLowerCase())
    .includes(normaliseRegionName(category));
}

function isUnitedKingdomName(name) {
  return normaliseRegionName(name) === "united kingdom";
}

function isOtherUKOrUnknownCategory(category) {
  const raw = String(category || "").toLowerCase();
  const key = normaliseRegionName(category);

  if (isUnknownCategory(category)) return true;

  if (
    raw.includes("other uk") ||
    raw.includes("other united kingdom") ||
    raw.includes("uk other") ||
    raw.includes("unknown uk")
  ) {
    return true;
  }

  if (key === "united kingdom") return true;

  return false;
}

function peopleStart() {
  const startButton = document.querySelector(".js-people-start");
  const growth = document.querySelector("#people-growth-module");

  startButton?.addEventListener("click", () => {
    growth?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

/* ------------------------------
   Data helpers
------------------------------ */

function getRows(filters = {}) {
  return peopleRows().filter((row) => {
    if (filters.population && row.population !== filters.population) return false;
    if (filters.measure && row.measure !== filters.measure) return false;
    if (filters.academicYear && row.academicYear !== filters.academicYear) return false;
    if (filters.categoryType && row.categoryType !== filters.categoryType) return false;
    if (filters.category && row.category !== filters.category) return false;
    if (filters.minStartYear && Number(row.startYear) < filters.minStartYear) return false;
    if (filters.maxStartYear && Number(row.startYear) > filters.maxStartYear) return false;

    return true;
  });
}

function getCategoryRows(population, categoryType, measure, academicYear, options = {}) {
  return getRows({
    population,
    categoryType,
    measure,
    academicYear,
    minStartYear: options.minStartYear,
    maxStartYear: options.maxStartYear
  }).filter((row) => row.category && row.category !== "Total");
}

function getYearsForPopulation(population, options = {}) {
  const map = new Map();

  getRows({
    population,
    minStartYear: options.minStartYear,
    maxStartYear: options.maxStartYear
  }).forEach((row) => {
    if (!row.academicYear || !row.startYear) return;
    map.set(row.academicYear, Number(row.startYear));
  });

  return [...map.entries()]
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map(([academicYear, startYear]) => ({ academicYear, startYear }));
}

function getYearsForCategoryType(population, categoryType, measure, options = {}) {
  const map = new Map();

  getRows({
    population,
    categoryType,
    measure,
    minStartYear: options.minStartYear,
    maxStartYear: options.maxStartYear
  }).forEach((row) => {
    if (!row.academicYear || !row.startYear) return;
    map.set(row.academicYear, Number(row.startYear));
  });

  return [...map.entries()]
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map(([academicYear, startYear]) => ({ academicYear, startYear }));
}

function getYearsWithActualCategoryData(population, categoryType, measure, options = {}) {
  const map = new Map();

  const effectiveMinStartYear =
    population === "Staff" && categoryType === "Nationality"
      ? Math.max(Number(options.minStartYear || PEOPLE_STANDARD_START_YEAR), STAFF_NATIONALITY_START_YEAR)
      : options.minStartYear;

  getRows({
    population,
    categoryType,
    measure,
    minStartYear: effectiveMinStartYear,
    maxStartYear: options.maxStartYear
  }).forEach((row) => {
    if (!row.academicYear || !row.startYear) return;
    if (!row.category || row.category === "Total") return;
    if (row.value === null || row.value === undefined || row.value === "") return;

    const numericValue = Number(row.value || 0);

    /*
      A year only counts as having actual category data when at least
      one non-Total category has a value greater than 0.
      For Staff Nationality, the visible trend should start from 2018/19.
    */
    if (numericValue <= 0) return;

    map.set(row.academicYear, Number(row.startYear));
  });

  return [...map.entries()]
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map(([academicYear, startYear]) => ({ academicYear, startYear }));
}

function uniqueCategories(population, categoryType, options = {}) {
  return [...new Set(
    getRows({
      population,
      categoryType,
      minStartYear: options.minStartYear,
      maxStartYear: options.maxStartYear
    })
      .map((row) => row.category)
      .filter((category) => category && category !== "Total")
  )].sort();
}

function categoryTypeExists(population, categoryType) {
  return getRows({ population, categoryType }).length > 0;
}

function getStaffRoleCategoryType() {
  if (categoryTypeExists("Staff", "Staff Roles")) return "Staff Roles";
  if (categoryTypeExists("Staff", "Post Group")) return "Post Group";
  if (categoryTypeExists("Staff", "Staff Post Group")) return "Staff Post Group";
  return "Post Group";
}

function populateYearSelect(select, years, selectedValue) {
  if (!select) return;

  select.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "All";
  allOption.textContent = "All";
  select.appendChild(allOption);

  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year.academicYear;
    option.textContent = year.academicYear;
    select.appendChild(option);
  });

  select.value = selectedValue;
}

function getRowsForYearOrAll(population, categoryType, measure, year, options = {}) {
  const rows = getRows({
    population,
    categoryType,
    measure,
    minStartYear: options.minStartYear ?? PEOPLE_STANDARD_START_YEAR,
    maxStartYear: options.maxStartYear
  }).filter((row) => row.category && row.category !== "Total");

  if (year === "All") {
    const aggregated = new Map();

    rows.forEach((row) => {
      aggregated.set(row.category, (aggregated.get(row.category) || 0) + Number(row.value || 0));
    });

    return [...aggregated.entries()].map(([category, value]) => ({
      population,
      categoryType,
      measure,
      academicYear: "All",
      category,
      value
    }));
  }

  return rows.filter((row) => row.academicYear === year);
}

function hasRecordedValue(population, categoryType, measure, academicYear, category) {
  return getRows({
    population,
    categoryType,
    measure,
    academicYear,
    category
  }).some((row) => row.value !== null && row.value !== undefined && row.value !== "");
}

function getCategoryValueOrNull(population, categoryType, measure, academicYear, category) {
  const row = getRows({
    population,
    categoryType,
    measure,
    academicYear,
    category
  })[0];

  if (!row || row.value === null || row.value === undefined || row.value === "") return null;
  return Number(row.value || 0);
}

function categoryTypeHasDataForYear(population, categoryType, measure, academicYear) {
  return getRows({
    population,
    categoryType,
    measure,
    academicYear
  }).some((row) => row.category && row.category !== "Total");
}

/* ------------------------------
   Drawing helpers
------------------------------ */

function drawEmpty(svg, message = "No data available.") {
  svg.appendChild(svgEl("text", { x: 40, y: 60, class: "people-no-data" }, message));
}

function drawBlankAxes(svg, options = {}) {
  clearElement(svg);

  const width = options.width || Number(svg.getAttribute("viewBox")?.split(" ")[2]) || 380;
  const height = options.height || Number(svg.getAttribute("viewBox")?.split(" ")[3]) || 230;
  const margin = options.margin || { top: 34, right: 28, bottom: 68, left: 54 };
  const innerHeight = height - margin.top - margin.bottom;

  [0, 0.5, 1].forEach((tick) => {
    const yPos = margin.top + innerHeight - tick * innerHeight;

    svg.appendChild(svgEl("line", {
      x1: margin.left,
      x2: width - margin.right,
      y1: yPos,
      y2: yPos,
      class: "people-grid-line"
    }));

    svg.appendChild(svgEl("text", {
      x: margin.left - 10,
      y: yPos + 4,
      "text-anchor": "end",
      class: "people-axis-text"
    }, "0"));
  });

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: width - margin.right,
    y1: margin.top + innerHeight,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: margin.left,
    y1: margin.top,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  svg.appendChild(svgEl("text", {
    x: 14,
    y: margin.top - 10,
    class: "people-axis-title"
  }, options.measure || "Headcount"));
}

function drawHorizontalAxis(svg, width, height, margin, maxValue, label) {
  const innerWidth = width - margin.left - margin.right;

  [0, 0.25, 0.5, 0.75, 1].forEach((tick) => {
    const xPos = margin.left + tick * innerWidth;

    svg.appendChild(svgEl("line", {
      x1: xPos,
      x2: xPos,
      y1: margin.top,
      y2: height - margin.bottom,
      class: "people-grid-line"
    }));

    svg.appendChild(svgEl("text", {
      x: xPos,
      y: height - margin.bottom + 24,
      "text-anchor": "middle",
      class: "people-axis-text"
    }, fmt(maxValue * tick)));
  });

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: width - margin.right,
    y1: height - margin.bottom,
    y2: height - margin.bottom,
    class: "people-axis"
  }));

  svg.appendChild(svgEl("text", {
    x: margin.left,
    y: height - 10,
    class: "people-axis-title"
  }, label));
}

function drawYearLabels(svg, years, x, height, labelY) {
  years.forEach((year) => {
    svg.appendChild(svgEl("text", {
      x: x(year.startYear),
      y: labelY,
      "text-anchor": "end",
      transform: `rotate(-45 ${x(year.startYear)} ${labelY})`,
      class: "people-axis-text"
    }, year.academicYear));
  });
}

function drawLegend(svg, categories, x, y, options = {}) {
  const rowHeight = options.rowHeight || 17;
  const maxLabel = options.maxLabel || 26;
  const colourCategories = options.colourCategories || categories;
  const tooltip = document.querySelector(".js-programme-trend-tooltip");

  categories.forEach((category, index) => {
    const rowY = y + index * rowHeight;
    const color = colorForCategory(category, colourCategories);

    const line = svgEl("line", {
      x1: x,
      x2: x + 16,
      y1: rowY,
      y2: rowY,
      stroke: color,
      "stroke-width": 3,
      class: "people-legend-hit"
    });

    const label = svgEl("text", {
      x: x + 22,
      y: rowY + 4,
      class: "people-axis-text people-legend-hit"
    }, shortLabel(category, maxLabel));

    [line, label].forEach((el) => {
      el.addEventListener("mouseenter", (event) => {
        if (!tooltip) return;
        showTooltip(tooltip, event, `<strong>${escapeHTML(category)}</strong>`);
      });

      el.addEventListener("mousemove", (event) => {
        if (!tooltip) return;
        showTooltip(tooltip, event, tooltip.innerHTML);
      });

      el.addEventListener("mouseleave", () => {
        if (!tooltip) return;
        hideTooltip(tooltip);
      });
    });

    svg.appendChild(line);
    svg.appendChild(label);
  });
}

/* ------------------------------
   People Growth
------------------------------ */

function renderGrowthChart() {
  const svg = document.querySelector(".js-people-growth-chart");
  const tooltip = document.querySelector(".js-people-growth-tooltip");
  if (!svg) return;

  clearElement(svg);

  const studentTotals = getRows({
    population: "Students",
    categoryType: "Total",
    category: "Total",
    measure: peopleState.growthMeasure
  });

  const staffTotals = getRows({
    population: "Staff",
    categoryType: "Total",
    category: "Total",
    measure: peopleState.growthMeasure
  });

  const yearsMap = new Map();

  studentTotals.forEach((row) => {
    yearsMap.set(row.academicYear, {
      academicYear: row.academicYear,
      startYear: Number(row.startYear),
      student: Number(row.value),
      staff: null
    });
  });

  staffTotals.forEach((row) => {
    const entry = yearsMap.get(row.academicYear) || {
      academicYear: row.academicYear,
      startYear: Number(row.startYear),
      student: null,
      staff: null
    };

    entry.staff = Number(row.value);
    yearsMap.set(row.academicYear, entry);
  });

  const data = [...yearsMap.values()]
    .filter((entry) => entry.startYear)
    .sort((a, b) => a.startYear - b.startYear);

  if (!data.length) {
    drawEmpty(svg, "No growth data available.");
    return;
  }

  const width = 900;
  const height = 280;
  const margin = { top: 34, right: 125, bottom: 82, left: 72 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const minYear = Math.min(...data.map((d) => d.startYear));
  const maxYear = Math.max(...data.map((d) => d.startYear));
  const maxValue = Math.max(...data.flatMap((d) => [d.student || 0, d.staff || 0]), 1);

  const x = (year) =>
    margin.left + ((Number(year) - minYear) / Math.max(1, maxYear - minYear)) * innerWidth;

  const y = (value) =>
    margin.top + innerHeight - (Number(value) / maxValue) * innerHeight;

  if (minYear <= PEOPLE_EARLY_END_YEAR) {
    const earlyStart = x(2007);
    const earlyEnd = x(2011.95);

    svg.appendChild(svgEl("rect", {
      x: earlyStart,
      y: margin.top,
      width: Math.max(0, earlyEnd - earlyStart),
      height: innerHeight,
      fill: "rgba(107,73,56,0.14)"
    }));

    svg.appendChild(svgEl("text", {
      x: earlyStart + 8,
      y: margin.top + 15,
      class: "people-axis-text"
    }, "early context"));
  }

  [0, 0.25, 0.5, 0.75, 1].forEach((tick) => {
    const yPos = margin.top + innerHeight - tick * innerHeight;

    svg.appendChild(svgEl("line", {
      x1: margin.left,
      x2: width - margin.right,
      y1: yPos,
      y2: yPos,
      class: "people-grid-line"
    }));

    svg.appendChild(svgEl("text", {
      x: margin.left - 14,
      y: yPos + 4,
      "text-anchor": "end",
      class: "people-axis-text"
    }, fmt(maxValue * tick)));
  });

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: width - margin.right,
    y1: margin.top + innerHeight,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: margin.left,
    y1: margin.top,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  data.forEach((d) => {
    svg.appendChild(svgEl("text", {
      x: x(d.startYear),
      y: height - 42,
      "text-anchor": "end",
      transform: `rotate(-45 ${x(d.startYear)} ${height - 42})`,
      class: "people-axis-text"
    }, d.academicYear));
  });

  function pathFor(key, mode) {
    return data
      .filter((d) => d[key] !== null && d[key] !== undefined)
      .filter((d) => {
        if (mode === "early-bridge") return d.startYear <= PEOPLE_STANDARD_START_YEAR;
        if (mode === "standard") return d.startYear >= PEOPLE_STANDARD_START_YEAR;
        return true;
      })
      .map((d, index) => `${index === 0 ? "M" : "L"} ${x(d.startYear)} ${y(d[key])}`)
      .join(" ");
  }

  svg.appendChild(svgEl("path", {
    d: pathFor("student", "early-bridge"),
    class: "people-series-student people-series-early"
  }));

  svg.appendChild(svgEl("path", {
    d: pathFor("student", "standard"),
    class: "people-series-student"
  }));

  svg.appendChild(svgEl("path", {
    d: pathFor("staff", "standard"),
    class: "people-series-staff"
  }));

  data.forEach((d) => {
    [
      ["student", "Students", "student"],
      ["staff", "Staff", "staff"]
    ].forEach(([key, label, target]) => {
      if (d[key] === null || d[key] === undefined) return;

      const circle = svgEl("circle", {
        cx: x(d.startYear),
        cy: y(d[key]),
        r: 3.8,
        fill: key === "student" ? "#8b2f3c" : "#245d7a",
        class: "people-dot"
      });

      circle.addEventListener("mouseenter", (event) => {
        const ratio = d.student && d.staff ? d.student / d.staff : null;
        const period = d.startYear <= PEOPLE_EARLY_END_YEAR ? "early context" : "standard";

        showTooltip(tooltip, event, `
          <strong>${escapeHTML(d.academicYear)}</strong>
          Student total: ${fmt(d.student)}<br>
          Staff total: ${fmt(d.staff)}<br>
          Student-staff ratio: ${ratio ? ratio.toFixed(1) : "—"}<br>
          Data period: ${period}
        `);
      });

      circle.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
      circle.addEventListener("mouseleave", () => hideTooltip(tooltip));

      circle.addEventListener("click", () => {
        if (target === "student") {
          if (d.startYear >= PEOPLE_STANDARD_START_YEAR) setStudentYear(d.academicYear);
          document.querySelector("#student-module")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          if (d.startYear >= PEOPLE_STANDARD_START_YEAR) setStaffYear(d.academicYear);
          document.querySelector("#staff-module")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });

      svg.appendChild(circle);
    });
  });

  const legendX = width - margin.right + 12;
  const legendY = margin.top + 8;

  svg.appendChild(svgEl("line", {
    x1: legendX,
    x2: legendX + 24,
    y1: legendY,
    y2: legendY,
    class: "people-series-student"
  }));

  svg.appendChild(svgEl("text", {
    x: legendX + 32,
    y: legendY + 4,
    class: "people-axis-text"
  }, "Students"));

  svg.appendChild(svgEl("line", {
    x1: legendX,
    x2: legendX + 24,
    y1: legendY + 22,
    y2: legendY + 22,
    class: "people-series-staff"
  }));

  svg.appendChild(svgEl("text", {
    x: legendX + 32,
    y: legendY + 26,
    class: "people-axis-text"
  }, "Staff"));

  svg.appendChild(svgEl("text", {
    x: 16,
    y: margin.top - 10,
    class: "people-axis-title"
  }, peopleState.growthMeasure));
}

/* ------------------------------
   Category trend chart
------------------------------ */

function renderCategoryTrendChart(options) {
  const {
    svgSelector,
    tooltipSelector,
    population,
    categoryType,
    measure,
    selectedYear,
    highlight,
    valueMode = "count",
    missingAsGap = false,
    onYearClick,
    onCategoryClick,
    onBlankClick
  } = options;

  const svg = document.querySelector(svgSelector);
  const tooltip = document.querySelector(tooltipSelector);
  if (!svg) return;

  clearElement(svg);

  svg.onclick = () => {
    if (typeof onBlankClick === "function") onBlankClick();
  };

  const years = getYearsForCategoryType(population, categoryType, measure, {
    minStartYear: PEOPLE_STANDARD_START_YEAR
  });

  const categories = uniqueCategories(population, categoryType, {
    minStartYear: PEOPLE_STANDARD_START_YEAR
  });

  if (!years.length || !categories.length) {
    drawEmpty(svg);
    return;
  }

  const width = 720;
  const height = 360;
  const margin = { top: 38, right: 165, bottom: 86, left: 72 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const valuesByCategory = categories.map((category) => {
    const points = years.map((year) => {
      const rows = getCategoryRows(population, categoryType, measure, year.academicYear);
      const total = rows.reduce((sum, entry) => sum + Number(entry.value || 0), 0);

      const hasRecorded = hasRecordedValue(
        population,
        categoryType,
        measure,
        year.academicYear,
        category
      );

      const rawValue = hasRecorded
        ? getCategoryValueOrNull(population, categoryType, measure, year.academicYear, category)
        : null;

      const value =
        rawValue === null
          ? null
          : valueMode === "percentage" && total
            ? (rawValue / total) * 100
            : rawValue;

      return {
        category,
        academicYear: year.academicYear,
        startYear: Number(year.startYear),
        rawValue,
        value,
        total,
        percentage: total && rawValue !== null ? (rawValue / total) * 100 : null,
        missing: rawValue === null
      };
    });

    return { category, points };
  });

  const allValues = valuesByCategory
    .flatMap((series) => series.points.map((point) => point.value))
    .filter((value) => value !== null && value !== undefined);

  const maxValue = Math.max(...allValues, 1);
  const minYear = Math.min(...years.map((year) => Number(year.startYear)));
  const maxYear = Math.max(...years.map((year) => Number(year.startYear)));

  const x = (year) =>
    margin.left + ((Number(year) - minYear) / Math.max(1, maxYear - minYear)) * innerWidth;

  const y = (value) =>
    margin.top + innerHeight - (Number(value) / maxValue) * innerHeight;

  [0, 0.25, 0.5, 0.75, 1].forEach((tick) => {
    const yPos = margin.top + innerHeight - tick * innerHeight;

    svg.appendChild(svgEl("line", {
      x1: margin.left,
      x2: width - margin.right,
      y1: yPos,
      y2: yPos,
      class: "people-grid-line"
    }));

    svg.appendChild(svgEl("text", {
      x: margin.left - 14,
      y: yPos + 4,
      "text-anchor": "end",
      class: "people-axis-text"
    }, valueMode === "percentage" ? pct(maxValue * tick) : fmt(maxValue * tick)));
  });

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: width - margin.right,
    y1: margin.top + innerHeight,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: margin.left,
    y1: margin.top,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  if (selectedYear && selectedYear !== "All") {
    const selected = years.find((year) => year.academicYear === selectedYear);
    if (selected) {
      svg.appendChild(svgEl("line", {
        x1: x(selected.startYear),
        x2: x(selected.startYear),
        y1: margin.top,
        y2: margin.top + innerHeight,
        class: "people-selected-year-line"
      }));
    }
  }

  drawYearLabels(svg, years, x, height, height - 46);

  valuesByCategory.forEach((series) => {
    const color = colorForCategory(series.category, categories);
    const isHighlighted = highlight && highlight !== "All" && highlight === series.category;
    const isDimmed = highlight && highlight !== "All" && highlight !== series.category;

    const drawablePoints = series.points.filter((point) => point.value !== null || !missingAsGap);

    let pathParts = [];
    let currentSegmentStarted = false;

    series.points.forEach((point) => {
      if (point.value === null && missingAsGap) {
        currentSegmentStarted = false;
        return;
      }

      const pointValue = point.value === null ? 0 : point.value;
      pathParts.push(`${currentSegmentStarted ? "L" : "M"} ${x(point.startYear)} ${y(pointValue)}`);
      currentSegmentStarted = true;
    });

    if (pathParts.length) {
      const line = svgEl("path", {
        d: pathParts.join(" "),
        fill: "none",
        stroke: color,
        "stroke-width": isHighlighted ? 3.6 : 2.4,
        opacity: isDimmed ? 0.16 : 1,
        class: "people-line-standard"
      });

      line.addEventListener("click", (event) => {
        event.stopPropagation();
        if (typeof onCategoryClick === "function") onCategoryClick(series.category);
      });

      svg.appendChild(line);
    }

    drawablePoints.forEach((point) => {
      if (point.value === null && missingAsGap) return;

      const pointValue = point.value === null ? 0 : point.value;

      const dot = svgEl("circle", {
        cx: x(point.startYear),
        cy: y(pointValue),
        r: selectedYear === point.academicYear || isHighlighted ? 4.8 : 3.2,
        fill: color,
        opacity: isDimmed ? 0.16 : 0.95,
        class: "people-dot"
      });

      dot.addEventListener("mouseenter", (event) => {
        const valueText = point.missing
          ? "No data recorded"
          : `${escapeHTML(measure)}: ${fmt(point.rawValue)}<br>Share: ${pct(point.percentage)}`;

        showTooltip(tooltip, event, `
          <strong>${escapeHTML(point.academicYear)}</strong>
          ${escapeHTML(point.category)}<br>
          ${valueText}
        `);
      });

      dot.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
      dot.addEventListener("mouseleave", () => hideTooltip(tooltip));

      dot.addEventListener("click", (event) => {
        event.stopPropagation();

        if (typeof onCategoryClick === "function") {
          onCategoryClick(point.category);
        }

        if (typeof onYearClick === "function") {
          onYearClick(point.academicYear);
        }
      });

      svg.appendChild(dot);
    });
  });

  drawLegend(svg, categories, width - margin.right + 14, margin.top + 8, {
    rowHeight: 16,
    maxLabel: 24
  });

  svg.appendChild(svgEl("text", {
    x: 16,
    y: margin.top - 10,
    class: "people-axis-title"
  }, valueMode === "percentage" ? "Percentage" : measure));
}

/* ------------------------------
   Distribution bar / pie
------------------------------ */

function renderDistributionBar(options) {
  const {
    svgSelector,
    tooltipSelector,
    population,
    categoryType,
    measure,
    year,
    highlight,
    titleSelector,
    missingMode = false,
    onCategoryClick,
    onBlankClick
  } = options;

  const svg = document.querySelector(svgSelector);
  const tooltip = document.querySelector(tooltipSelector);
  const title = document.querySelector(titleSelector);
  if (!svg) return;

  clearElement(svg);

  svg.onclick = () => {
    if (typeof onBlankClick === "function") onBlankClick();
  };

  if (title) title.textContent = year === "All" ? "Overall distribution" : `${year} distribution`;

  const categories = uniqueCategories(population, categoryType, {
    minStartYear: PEOPLE_STANDARD_START_YEAR
  });

  let rows;

  if (missingMode && year !== "All") {
    rows = categories.map((category) => {
      const hasRecorded = hasRecordedValue(population, categoryType, measure, year, category);
      const value = hasRecorded
        ? getCategoryValueOrNull(population, categoryType, measure, year, category)
        : null;

      return {
        population,
        categoryType,
        measure,
        academicYear: year,
        category,
        value,
        missing: value === null
      };
    });
  } else {
    rows = getRowsForYearOrAll(population, categoryType, measure, year)
      .map((row) => ({ ...row, missing: false }));
  }

  rows = rows
    .filter((row) => row.category && row.category !== "Total")
    .sort((a, b) => {
      if (a.missing && !b.missing) return 1;
      if (!a.missing && b.missing) return -1;
      return Number(b.value || 0) - Number(a.value || 0);
    });

  if (!rows.length) {
    drawEmpty(svg);
    return;
  }

  const width = 720;
  const height = 360;
  const margin = { top: 36, right: 62, bottom: 66, left: 225 };
  const innerWidth = width - margin.left - margin.right;
  const usableHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...rows.map((row) => Number(row.value || 0)), 1);
  const total = rows.reduce((sum, row) => sum + Number(row.value || 0), 0);

  const gap = rows.length <= 4 ? 18 : 10;
  const rowHeight = Math.min(54, Math.max(24, (usableHeight - gap * (rows.length - 1)) / rows.length));
  const blockHeight = rows.length * rowHeight + (rows.length - 1) * gap;
  const startY = margin.top + Math.max(0, (usableHeight - blockHeight) / 2);

  drawHorizontalAxis(svg, width, height, margin, maxValue, measure);

  rows.forEach((row, index) => {
    const yPos = startY + index * (rowHeight + gap);
    const barWidth = row.missing ? 0 : (Number(row.value) / maxValue) * innerWidth;
    const isDimmed = highlight && highlight !== "All" && highlight !== row.category;
    const color = colorForCategory(row.category, categories);

    svg.appendChild(svgEl("text", {
      x: margin.left - 12,
      y: yPos + rowHeight * 0.64,
      "text-anchor": "end",
      class: "people-ranked-label"
    }, shortLabel(row.category, 31)));

    if (row.missing) {
      const missingText = svgEl("text", {
        x: margin.left + 4,
        y: yPos + rowHeight * 0.64,
        class: "people-missing-value"
      }, "No data recorded");

      missingText.addEventListener("mouseenter", (event) => {
        showTooltip(tooltip, event, `
          <strong>${escapeHTML(year)}</strong>
          ${escapeHTML(row.category)}<br>
          No data recorded
        `);
      });

      missingText.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
      missingText.addEventListener("mouseleave", () => hideTooltip(tooltip));

      svg.appendChild(missingText);
      return;
    }

    const rect = svgEl("rect", {
      x: margin.left,
      y: yPos,
      width: Math.max(2, barWidth),
      height: rowHeight,
      rx: 3,
      fill: color,
      opacity: isDimmed ? 0.2 : 0.86,
      class: "people-bar"
    });

    rect.addEventListener("mouseenter", (event) => {
      showTooltip(tooltip, event, `
        <strong>${escapeHTML(year === "All" ? "All years" : year)}</strong>
        ${escapeHTML(row.category)}<br>
        ${escapeHTML(measure)}: ${fmt(row.value)}<br>
        Share: ${pct(total ? (Number(row.value) / total) * 100 : 0)}
      `);
    });

    rect.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
    rect.addEventListener("mouseleave", () => hideTooltip(tooltip));

    rect.addEventListener("click", (event) => {
      event.stopPropagation();
      if (typeof onCategoryClick === "function") onCategoryClick(row.category);
    });

    svg.appendChild(rect);

    svg.appendChild(svgEl("text", {
      x: margin.left + barWidth + 8,
      y: yPos + rowHeight * 0.64,
      class: "people-axis-text"
    }, fmt(row.value)));
  });
}

function renderPieChart(options) {
  const {
    svgSelector,
    tooltipSelector,
    population,
    categoryType,
    measure,
    year,
    highlight,
    titleSelector,
    onCategoryClick,
    onBlankClick
  } = options;

  const svg = document.querySelector(svgSelector);
  const tooltip = document.querySelector(tooltipSelector);
  const title = document.querySelector(titleSelector);
  if (!svg) return;

  clearElement(svg);

  svg.onclick = () => {
    if (typeof onBlankClick === "function") onBlankClick();
  };

  if (title) title.textContent = year === "All" ? "Overall composition" : `${year} composition`;

  const rawRows = getRowsForYearOrAll(population, categoryType, measure, year)
    .filter((row) => row.category && row.category !== "Total")
    .map((row) => ({
        ...row,
        value: Number(row.value || 0)
    }));

  const rawTotal = rawRows.reduce((sum, row) => sum + Number(row.value || 0), 0);

  const rows = rawRows.filter((row) => {
    if (!rawTotal) return false;

    const value = Number(row.value || 0);
    const share = (value / rawTotal) * 100;

    if (value <= 0) return false;

  /*
    For All, remove tiny categories that would visually display as 0.0%.
    This fixes cases like "Other 0.0%" after aggregation.
  */
    if (year === "All" && share < 0.05) return false;

    return true;
  });

  const colourCategories = uniqueCategories(population, categoryType, {
    minStartYear: PEOPLE_STANDARD_START_YEAR
  });

  const categories = rows.map((row) => row.category);

  const total = rows.reduce((sum, row) => sum + Number(row.value || 0), 0);

  if (!rows.length || !total) {
    drawEmpty(svg);
    return;
  }

  const width = 720;
  const height = 360;
  const cx = 210;
  const cy = 188;
  const r = 142;
  let currentAngle = -Math.PI / 2;

  const sliceData = rows.map((row) => {
    const value = Number(row.value || 0);
    const angle = (value / total) * Math.PI * 2;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    return {
      ...row,
      value,
      share: (value / total) * 100,
      startAngle,
      endAngle,
      midAngle: (startAngle + endAngle) / 2
    };
  });

  sliceData.forEach((row) => {
    const x1 = cx + Math.cos(row.startAngle) * r;
    const y1 = cy + Math.sin(row.startAngle) * r;
    const x2 = cx + Math.cos(row.endAngle) * r;
    const y2 = cy + Math.sin(row.endAngle) * r;
    const largeArc = row.endAngle - row.startAngle > Math.PI ? 1 : 0;
    const isDimmed = highlight && highlight !== "All" && highlight !== row.category;
    const color = colorForCategory(row.category, colourCategories);

    const path = [
      `M ${cx} ${cy}`,
      `L ${x1} ${y1}`,
      `A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`,
      "Z"
    ].join(" ");

    const slice = svgEl("path", {
      d: path,
      fill: color,
      opacity: isDimmed ? 0.2 : 0.9,
      class: "people-pie-slice"
    });

    slice.addEventListener("mouseenter", (event) => {
      showTooltip(tooltip, event, `
        <strong>${escapeHTML(year === "All" ? "All years" : year)}</strong>
        ${escapeHTML(row.category)}<br>
        ${escapeHTML(measure)}: ${fmt(row.value)}<br>
        Share: ${pct(row.share)}
      `);
    });

    slice.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
    slice.addEventListener("mouseleave", () => hideTooltip(tooltip));

    slice.addEventListener("click", (event) => {
      event.stopPropagation();
      if (typeof onCategoryClick === "function") onCategoryClick(row.category);
    });

    svg.appendChild(slice);
  });

  sliceData.forEach((row) => {
    const isSmall = row.share < 7;
    const isDimmed = highlight && highlight !== "All" && highlight !== row.category;

    const innerRadius = isSmall ? r + 22 : r * 0.58;
    const labelX = cx + Math.cos(row.midAngle) * innerRadius;
    const labelY = cy + Math.sin(row.midAngle) * innerRadius;

    if (isSmall) {
      const edgeX = cx + Math.cos(row.midAngle) * (r + 2);
      const edgeY = cy + Math.sin(row.midAngle) * (r + 2);
      const outerX = cx + Math.cos(row.midAngle) * (r + 18);
      const outerY = cy + Math.sin(row.midAngle) * (r + 18);

      svg.appendChild(svgEl("path", {
        d: `M ${edgeX} ${edgeY} L ${outerX} ${outerY} L ${labelX} ${labelY}`,
        class: "people-pie-leader",
        opacity: isDimmed ? 0.22 : 1
      }));
    }

    const label = svgEl("text", {
      x: labelX,
      y: labelY - 4,
      "text-anchor": isSmall
        ? (Math.cos(row.midAngle) >= 0 ? "start" : "end")
        : "middle",
      class: "people-pie-label",
      opacity: isDimmed ? 0.28 : 1
    });

    const labelText = String(row.category || "");

    const t1 = svgEl("tspan", { x: labelX, dy: 0 }, labelText);
    const t2 = svgEl("tspan", { x: labelX, dy: 14 }, pct(row.share));

    label.appendChild(t1);
    label.appendChild(t2);
    svg.appendChild(label);
  });

  rows.forEach((row, index) => {
    const color = colorForCategory(row.category, colourCategories);
    const legendX = 405;
    const legendY = 48 + index * 34;
    const isDimmed = highlight && highlight !== "All" && highlight !== row.category;

    svg.appendChild(svgEl("rect", {
      x: legendX,
      y: legendY - 14,
      width: 15,
      height: 15,
      fill: color,
      opacity: isDimmed ? 0.25 : 0.9
    }));

    const text = svgEl("text", {
      x: legendX + 24,
      y: legendY,
      class: "people-pie-legend",
      opacity: isDimmed ? 0.35 : 1
    }, shortLabel(row.category, 34));

    text.addEventListener("mouseenter", (event) => {
      const share = total ? (Number(row.value) / total) * 100 : 0;

      showTooltip(tooltip, event, `
        <strong>${escapeHTML(row.category)}</strong>
        ${escapeHTML(measure)}: ${fmt(row.value)}<br>
        Share: ${pct(share)}
      `);
    });

    text.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
    text.addEventListener("mouseleave", () => hideTooltip(tooltip));

    svg.appendChild(text);
  });
}

/* ------------------------------
   Degree Title
------------------------------ */

function getProgrammeTopRows() {
  const rows = getRowsForYearOrAll(
    "Students",
    "Degree Title",
    peopleState.studentMeasure,
    peopleState.studentYear
  );

  return [...rows]
    .filter((row) => row.category && row.category !== "Total")
    .sort((a, b) => Number(b.value) - Number(a.value))
    .slice(0, 10);
}

function renderRankedBarChart({ svgSelector, tooltipSelector, rows, selectedCategory, onClick, onBlankClick, topN = 10 }) {
  const svg = document.querySelector(svgSelector);
  const tooltip = document.querySelector(tooltipSelector);
  if (!svg) return;

  clearElement(svg);

  svg.onclick = () => {
    if (typeof onBlankClick === "function") onBlankClick();
  };

  const data = [...rows]
    .filter((row) => row.category && row.category !== "Total")
    .sort((a, b) => Number(b.value) - Number(a.value))
    .slice(0, topN);

  if (!data.length) {
    drawEmpty(svg);
    return;
  }

  const topCategories = data.map((row) => row.category);
  peopleState.currentProgrammeTopCategories = topCategories;

  const width = 720;
  const height = 430;
  const margin = { top: 32, right: 48, bottom: 66, left: 235 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...data.map((row) => Number(row.value)), 1);
  const rowGap = 8;
  const rowHeight = Math.max(15, Math.min(28, (innerHeight - rowGap * (data.length - 1)) / data.length));

  drawHorizontalAxis(svg, width, height, margin, maxValue, data[0]?.measure || "Value");

  data.forEach((row, index) => {
    const yPos = margin.top + index * (rowHeight + rowGap);
    const barWidth = (Number(row.value) / maxValue) * innerWidth;
    const isDimmed = selectedCategory && selectedCategory !== row.category;
    const color = colorForCategory(row.category, topCategories);

    svg.appendChild(svgEl("text", {
      x: margin.left - 12,
      y: yPos + rowHeight * 0.68,
      "text-anchor": "end",
      class: "people-ranked-label"
    }, shortLabel(row.category, 32)));

    const rect = svgEl("rect", {
      x: margin.left,
      y: yPos,
      width: Math.max(2, barWidth),
      height: rowHeight,
      rx: 3,
      fill: color,
      opacity: isDimmed ? 0.2 : 0.82,
      class: "people-ranked-bar"
    });

    rect.addEventListener("mouseenter", (event) => {
      showTooltip(tooltip, event, `
        <strong>${escapeHTML(row.academicYear)}</strong>
        ${escapeHTML(row.category)}<br>
        ${escapeHTML(row.measure)}: ${fmt(row.value)}<br>
        Rank: ${index + 1}
      `);
    });

    rect.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
    rect.addEventListener("mouseleave", () => hideTooltip(tooltip));

    rect.addEventListener("click", (event) => {
      event.stopPropagation();
      if (typeof onClick === "function") onClick(row.category);
    });

    svg.appendChild(rect);

    svg.appendChild(svgEl("text", {
      x: margin.left + barWidth + 8,
      y: yPos + rowHeight * 0.68,
      class: "people-axis-text"
    }, fmt(row.value)));
  });
}

function renderProgrammeMultiTrend() {
  const svg = document.querySelector(".js-programme-trend-chart");
  const tooltip = document.querySelector(".js-programme-trend-tooltip");
  const title = document.querySelector(".js-programme-trend-title");
  const note = document.querySelector(".js-programme-trend-note");

  if (!svg) return;

  clearElement(svg);

  svg.onclick = () => {
    peopleState.selectedProgramme = "";
    renderStandardProgrammeDashboard();
  };

  const years = getYearsForCategoryType("Students", "Degree Title", peopleState.studentMeasure, {
    minStartYear: PEOPLE_STANDARD_START_YEAR
  });

  const categories = peopleState.currentProgrammeTopCategories || [];

  if (!years.length || !categories.length) {
    drawEmpty(svg, "No programme trend data available.");
    return;
  }

  if (title) title.textContent = peopleState.selectedProgramme || "Top programmes";

  if (note) {
    note.textContent = peopleState.selectedProgramme
      ? "Selected programme is highlighted. Click empty space to restore all Top 10 programme lines."
      : "The trend chart shows the same Top 10 programmes as the ranking chart.";
  }

  const width = 720;
  const height = 430;
  const margin = { top: 38, right: 165, bottom: 82, left: 62 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const series = categories.map((category) => {
    const points = years.map((year) => {
      const hasYearData = categoryTypeHasDataForYear(
        "Students",
        "Degree Title",
        peopleState.studentMeasure,
        year.academicYear
      );

      const row = getCategoryRows("Students", "Degree Title", peopleState.studentMeasure, year.academicYear)
        .find((entry) => entry.category === category);

      return {
        category,
        academicYear: year.academicYear,
        startYear: Number(year.startYear),
        value: hasYearData ? Number(row?.value || 0) : null,
        measure: peopleState.studentMeasure
      };
    });

    return { category, points };
  });

  const allValues = series
    .flatMap((entry) => entry.points.map((point) => point.value))
    .filter((value) => value !== null);

  const maxValue = Math.max(...allValues, 1);
  const minYear = Math.min(...years.map((year) => Number(year.startYear)));
  const maxYear = Math.max(...years.map((year) => Number(year.startYear)));

  const x = (year) =>
    margin.left + ((Number(year) - minYear) / Math.max(1, maxYear - minYear)) * innerWidth;

  const y = (value) =>
    margin.top + innerHeight - (Number(value) / maxValue) * innerHeight;

  [0, 0.25, 0.5, 0.75, 1].forEach((tick) => {
    const yPos = margin.top + innerHeight - tick * innerHeight;

    svg.appendChild(svgEl("line", {
      x1: margin.left,
      x2: width - margin.right,
      y1: yPos,
      y2: yPos,
      class: "people-grid-line"
    }));

    svg.appendChild(svgEl("text", {
      x: margin.left - 12,
      y: yPos + 4,
      "text-anchor": "end",
      class: "people-axis-text"
    }, fmt(maxValue * tick)));
  });

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: width - margin.right,
    y1: margin.top + innerHeight,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: margin.left,
    y1: margin.top,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  if (peopleState.studentYear && peopleState.studentYear !== "All") {
    const selected = years.find((year) => year.academicYear === peopleState.studentYear);
    if (selected) {
      svg.appendChild(svgEl("line", {
        x1: x(selected.startYear),
        x2: x(selected.startYear),
        y1: margin.top,
        y2: margin.top + innerHeight,
        class: "people-selected-year-line"
      }));
    }
  }

  drawYearLabels(svg, years, x, height, height - 44);

  series.forEach((entry) => {
    const color = colorForCategory(entry.category, categories);
    const isSelected = peopleState.selectedProgramme === entry.category;
    const isDimmed = peopleState.selectedProgramme && !isSelected;

    let pathParts = [];
    let segmentStarted = false;

    entry.points.forEach((point) => {
      if (point.value === null) {
        segmentStarted = false;
        return;
      }

      pathParts.push(`${segmentStarted ? "L" : "M"} ${x(point.startYear)} ${y(point.value)}`);
      segmentStarted = true;
    });

    if (pathParts.length) {
      const line = svgEl("path", {
        d: pathParts.join(" "),
        fill: "none",
        stroke: color,
        "stroke-width": isSelected ? 3.6 : 2.2,
        opacity: isDimmed ? 0.14 : 0.92,
        class: "people-line-standard"
      });

      line.addEventListener("click", (event) => {
        event.stopPropagation();
        peopleState.selectedProgramme = entry.category;
        renderStandardProgrammeDashboard();
      });

      svg.appendChild(line);
    }

    entry.points.forEach((point) => {
      if (point.value === null) return;

      const dot = svgEl("circle", {
        cx: x(point.startYear),
        cy: y(point.value),
        r: peopleState.studentYear === point.academicYear || isSelected ? 4.4 : 2.8,
        fill: color,
        opacity: isDimmed ? 0.14 : 0.86,
        class: "people-dot"
      });

      dot.addEventListener("mouseenter", (event) => {
        showTooltip(tooltip, event, `
          <strong>${escapeHTML(point.academicYear)}</strong>
          ${escapeHTML(point.category)}<br>
          ${escapeHTML(point.measure)}: ${fmt(point.value)}
        `);
      });

      dot.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
      dot.addEventListener("mouseleave", () => hideTooltip(tooltip));

      dot.addEventListener("click", (event) => {
        event.stopPropagation();
        peopleState.selectedProgramme = point.category;
        setStudentYear(point.academicYear);
      });

      svg.appendChild(dot);
    });
  });

  drawLegend(svg, categories, width - margin.right + 14, margin.top + 8, {
    rowHeight: 15,
    maxLabel: 23,
    colourCategories: categories
  });

  svg.appendChild(svgEl("text", {
    x: 14,
    y: margin.top - 10,
    class: "people-axis-title"
  }, peopleState.studentMeasure));
}

/* ------------------------------
   Maps and UK breakdown bars
------------------------------ */

async function loadWorldFeatures() {
  if (worldFeaturesCache) return worldFeaturesCache;

  const data = await d3.json(WORLD_TOPO_URL);
  worldFeaturesCache = topojson.feature(data, data.objects.countries).features;

  return worldFeaturesCache;
}

function getMapRows(population, categoryType, measure, year) {
  return getRowsForYearOrAll(population, categoryType, measure, year);
}

function buildRegionValueMap(rows, options = {}) {
  const map = new Map();
  let ukInternalTotal = 0;

  rows.forEach((row) => {
    if (!row.category || isUnknownCategory(row.category)) return;

    const normalised = normaliseRegionName(row.category);
    const value = Number(row.value || 0);

    if (isUKInternalCategory(row.category)) {
      ukInternalTotal += value;

      if (options.excludeUKInternal) return;
    }

    map.set(normalised, (map.get(normalised) || 0) + value);
  });

  if (options.foldUKInternalToUnitedKingdom && ukInternalTotal > 0) {
    const existingUK = map.get("united kingdom") || 0;
    map.set("united kingdom", existingUK + ukInternalTotal);
  }

  return map;
}

function getHistoricalRegionSet(population, categoryType) {
  const set = new Set();
  let hasUKInternal = false;

  getRows({
    population,
    categoryType,
    minStartYear: PEOPLE_STANDARD_START_YEAR
  }).forEach((row) => {
    if (!row.category || isUnknownCategory(row.category)) return;

    if (isUKInternalCategory(row.category)) hasUKInternal = true;
    set.add(normaliseRegionName(row.category));
  });

  if (hasUKInternal) set.add("united kingdom");

  return set;
}

async function renderWorldChoropleth(options) {
  const {
    svgSelector,
    tooltipSelector,
    population,
    categoryType,
    measure,
    year,
    selectedRegion,
    onRegionClick,
    onBlankClick,
    titleSelector
  } = options;

  const svg = document.querySelector(svgSelector);
  const tooltip = document.querySelector(tooltipSelector);
  const title = document.querySelector(titleSelector);

  if (!svg) return;

  clearElement(svg);

  svg.onclick = () => {
    if (typeof onBlankClick === "function") onBlankClick();
  };

  if (title) {
    title.textContent =
      year === "All"
        ? "World map · cumulative standard period"
        : `World map · ${year}`;
  }

  if (typeof d3 === "undefined" || typeof topojson === "undefined") {
    drawEmpty(svg, "D3 or TopoJSON is not loaded.");
    return;
  }

  const features = await loadWorldFeatures();
  const rows = getMapRows(population, categoryType, measure, year);

  const valueMap = buildRegionValueMap(rows, {
    excludeUKInternal: true,
    foldUKInternalToUnitedKingdom: true
  });

  const historicalSet = getHistoricalRegionSet(population, categoryType);
  const maxValue = Math.max(...valueMap.values(), 1);
  const total = [...valueMap.values()].reduce((sum, value) => sum + Number(value || 0), 0);

  const width = 900;
  const height = 460;

  const projection = d3.geoNaturalEarth1().fitSize([width, height], {
    type: "FeatureCollection",
    features
  });

  const path = d3.geoPath(projection);

  const color = d3.scaleSequential()
    .domain([0, maxValue])
    .interpolator((t) => d3.interpolateRgb("#f2e4d3", "#5f1f2a")(Math.pow(t, 0.72)));

  features.forEach((feature) => {
    const name = feature.properties?.name || feature.properties?.NAME || "";
    const key = normaliseRegionName(name);
    const displayName = getRegionDisplayName(name);
    const value = valueMap.get(key) || 0;
    const everAppeared = historicalSet.has(key);
    const isSelected = selectedRegion && normaliseRegionName(selectedRegion) === key;

    const fill = value
      ? color(value)
      : everAppeared
        ? "rgba(178,137,118,0.36)"
        : "rgba(229,219,204,0.48)";

    const region = svgEl("path", {
      d: path(feature),
      fill,
      class: `people-map-region ${isSelected ? "is-selected" : ""}`,
      "data-region": displayName
    });

    region.addEventListener("mouseenter", (event) => {
      const share = total ? (value / total) * 100 : 0;

      showTooltip(tooltip, event, `
        <strong>${escapeHTML(displayName)}</strong>
        ${escapeHTML(year === "All" ? "All years" : year)}<br>
        ${escapeHTML(measure)}: ${fmt(value)}<br>
        Share: ${pct(share)}
      `);
    });

    region.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
    region.addEventListener("mouseleave", () => hideTooltip(tooltip));

    region.addEventListener("click", (event) => {
      event.stopPropagation();

      if (everAppeared && typeof onRegionClick === "function") {
        onRegionClick(displayName);
      }
    });

    svg.appendChild(region);
  });

  svg.appendChild(svgEl("text", {
    x: 24,
    y: height - 14,
    class: "people-axis-text"
  }, "Darker shading indicates larger values."));
}

function getUKBreakdownRows(population, categoryType, measure, year) {
  const rows = getMapRows(population, categoryType, measure, year);
  const totals = new Map();

  UK_BREAKDOWN_LABELS.forEach((label) => totals.set(label, 0));

  rows.forEach((row) => {
    if (!row.category || row.category === "Total") return;

    const value = Number(row.value || 0);
    const matchedInternalRegion = UK_REGION_NAMES.find(
      (name) => normaliseRegionName(name) === normaliseRegionName(row.category)
    );

    if (matchedInternalRegion) {
      totals.set(matchedInternalRegion, (totals.get(matchedInternalRegion) || 0) + value);
      return;
    }

    if (isOtherUKOrUnknownCategory(row.category)) {
      totals.set("Other UK / Unknown", (totals.get("Other UK / Unknown") || 0) + value);
    }
  });

  return UK_BREAKDOWN_LABELS.map((label) => ({
    category: label,
    value: totals.get(label) || 0
  }));
}

function hasAnyUKBreakdownValue(rows) {
  return rows.some((row) => Number(row.value || 0) > 0);
}

function hasInternalUKBreakdownForSelection(population, categoryType, measure, year) {
  const data = getUKBreakdownRows(population, categoryType, measure, year);

  return UK_REGION_NAMES.some((name) => {
    const row = data.find((entry) => entry.category === name);
    return row && Number(row.value || 0) > 0;
  });
}

function renderUKBreakdownBars(options) {
  const {
    svgSelector,
    tooltipSelector,
    population,
    categoryType,
    measure,
    year,
    selectedRegion,
    onRegionClick,
    onBlankClick
  } = options;

  const svg = document.querySelector(svgSelector);
  const tooltip = document.querySelector(tooltipSelector);

  if (!svg) return;

  clearElement(svg);

  svg.onclick = () => {
    if (typeof onBlankClick === "function") onBlankClick();
  };

  const data = getUKBreakdownRows(population, categoryType, measure, year);
  const hasAny = hasAnyUKBreakdownValue(data);

  const width = 420;
  const height = 250;
  const margin = { top: 18, right: 52, bottom: 22, left: 142 };

  if (!hasAny) {
    svg.appendChild(svgEl("text", {
      x: 22,
      y: 60,
      class: "uk-breakdown-empty"
    }, "No UK breakdown available."));
    return;
  }

  const maxValue = Math.max(...data.map((row) => Number(row.value || 0)), 1);
  const barAreaWidth = width - margin.left - margin.right;
  const rowGap = 14;
  const barHeight = 16;
  const rowHeight = barHeight + rowGap;

  data.forEach((row, index) => {
    const y = margin.top + index * rowHeight;
    const value = Number(row.value || 0);
    const barWidth = value > 0 ? Math.max(2, (value / maxValue) * barAreaWidth) : 0;

    const isSelected =
      selectedRegion &&
      (
        normaliseRegionName(selectedRegion) === normaliseRegionName(row.category) ||
        (row.category === "Other UK / Unknown" && selectedRegion === "__uk_other__")
      );

    const hasSelection = Boolean(selectedRegion);
    const isMuted =
      hasSelection &&
      !isSelected &&
      selectedRegion !== "__uk_internal__" &&
      !isUnitedKingdomName(selectedRegion);

    const rowGroup = svgEl("g", {
      class: `uk-breakdown-row-hit ${isMuted ? "uk-breakdown-muted" : ""}`
    });

    rowGroup.appendChild(svgEl("text", {
      x: margin.left - 12,
      y: y + 13,
      "text-anchor": "end",
      class: "uk-breakdown-label"
    }, row.category));

    rowGroup.appendChild(svgEl("rect", {
      x: margin.left,
      y,
      width: barAreaWidth,
      height: barHeight,
      rx: 8,
      class: "uk-breakdown-bar-bg"
    }));

    rowGroup.appendChild(svgEl("rect", {
      x: margin.left,
      y,
      width: barWidth,
      height: barHeight,
      rx: 8,
      class: "uk-breakdown-bar",
      fill: isSelected ? "#4d2526" : "#6f4643"
    }));

    rowGroup.appendChild(svgEl("text", {
      x: margin.left + barAreaWidth + 10,
      y: y + 13,
      class: "uk-breakdown-value"
    }, fmt(value)));

    rowGroup.addEventListener("mouseenter", (event) => {
      if (!tooltip) return;

      showTooltip(tooltip, event, `
        <strong>${escapeHTML(row.category)}</strong>
        ${escapeHTML(year === "All" ? "All years" : year)}<br>
        ${escapeHTML(measure)}: ${fmt(value)}
      `);
    });

    rowGroup.addEventListener("mousemove", (event) => {
      if (!tooltip) return;
      showTooltip(tooltip, event, tooltip.innerHTML);
    });

    rowGroup.addEventListener("mouseleave", () => {
      if (!tooltip) return;
      hideTooltip(tooltip);
    });

    rowGroup.addEventListener("click", (event) => {
      event.stopPropagation();

      if (typeof onRegionClick !== "function") return;

      if (row.category === "Other UK / Unknown") {
        onRegionClick("__uk_other__");
      } else {
        onRegionClick(row.category);
      }
    });

    svg.appendChild(rowGroup);
  });

  svg.appendChild(svgEl("text", {
    x: margin.left,
    y: height - 8,
    class: "people-axis-text"
  }, year === "All" ? "Values are summed across all standard years." : `Selected year: ${year}`));
}

function renderNationalityComparisonBars(options) {
  const {
    svgSelector,
    tooltipSelector,
    population,
    categoryType,
    measure,
    year,
    selectedRegion,
    topN = 10,
    onRegionClick,
    onBlankClick
  } = options;

  const svg = document.querySelector(svgSelector);
  const tooltip = document.querySelector(tooltipSelector);

  if (!svg) return;

  clearElement(svg);

  svg.onclick = () => {
    if (typeof onBlankClick === "function") onBlankClick();
  };

  const rows = getRowsForYearOrAll(population, categoryType, measure, year, {
    minStartYear: PEOPLE_STANDARD_START_YEAR
  })
    .filter((row) => row.category && row.category !== "Total" && !isUnknownCategory(row.category))
    .map((row) => ({
      category: getRegionDisplayName(row.category),
      rawCategory: row.category,
      value: Number(row.value || 0)
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, topN);

  const width = 420;
  const height = 250;
  const margin = { top: 18, right: 52, bottom: 22, left: 142 };

  if (!rows.length) {
    svg.appendChild(svgEl("text", {
      x: 22,
      y: 60,
      class: "uk-breakdown-empty"
    }, "No nationality comparison available."));
    return;
  }

  const maxValue = Math.max(...rows.map((row) => row.value), 1);
  const barAreaWidth = width - margin.left - margin.right;
  const availableHeight = height - margin.top - margin.bottom - 10;
  const rowGap = topN >= 15 ? 4 : topN >= 10 ? 7 : 10;
  const barHeight = Math.max(8, Math.min(16, (availableHeight - rowGap * (rows.length - 1)) / rows.length));
  const rowHeight = barHeight + rowGap;

  rows.forEach((row, index) => {
    const y = margin.top + index * rowHeight;
    const barWidth = row.value > 0 ? Math.max(2, (row.value / maxValue) * barAreaWidth) : 0;

    const isSelected =
      selectedRegion &&
      normaliseRegionName(selectedRegion) === normaliseRegionName(row.category);

    const isMuted = selectedRegion && !isSelected;

    const rowGroup = svgEl("g", {
      class: `uk-breakdown-row-hit ${isMuted ? "uk-breakdown-muted" : ""}`
    });

    rowGroup.appendChild(svgEl("text", {
      x: margin.left - 12,
      y: y + barHeight * 0.72,
      "text-anchor": "end",
      class: "uk-breakdown-label"
    }, shortLabel(row.category, topN >= 15 ? 17 : 20)));

    rowGroup.appendChild(svgEl("rect", {
      x: margin.left,
      y,
      width: barAreaWidth,
      height: barHeight,
      rx: Math.min(7, barHeight / 2),
      class: "uk-breakdown-bar-bg"
    }));

    rowGroup.appendChild(svgEl("rect", {
      x: margin.left,
      y,
      width: barWidth,
      height: barHeight,
      rx: Math.min(7, barHeight / 2),
      class: "uk-breakdown-bar",
      fill: isSelected ? "#4d2526" : "#6f4643"
    }));

    rowGroup.appendChild(svgEl("text", {
      x: margin.left + barAreaWidth + 10,
      y: y + barHeight * 0.72,
      class: "uk-breakdown-value"
    }, fmt(row.value)));

    rowGroup.addEventListener("mouseenter", (event) => {
      if (!tooltip) return;

      showTooltip(tooltip, event, `
        <strong>${escapeHTML(row.category)}</strong>
        ${escapeHTML(year === "All" ? "All years" : year)}<br>
        ${escapeHTML(measure)}: ${fmt(row.value)}
      `);
    });

    rowGroup.addEventListener("mousemove", (event) => {
      if (!tooltip) return;
      showTooltip(tooltip, event, tooltip.innerHTML);
    });

    rowGroup.addEventListener("mouseleave", () => {
      if (!tooltip) return;
      hideTooltip(tooltip);
    });

    rowGroup.addEventListener("click", (event) => {
      event.stopPropagation();

      if (typeof onRegionClick === "function") {
        onRegionClick(row.rawCategory);
      }
    });

    svg.appendChild(rowGroup);
  });

  svg.appendChild(svgEl("text", {
    x: margin.left,
    y: height - 8,
    class: "people-axis-text"
  }, year === "All" ? `Top ${topN} nationalities across all standard years.` : `Selected year: ${year}`));
}

function getRegionTrendRows(population, categoryType, measure, region) {
  const target = normaliseRegionName(region);

  const years =
    population === "Staff" && categoryType === "Nationality"
        ? getYearsWithActualCategoryData(population, categoryType, measure, {
            minStartYear: PEOPLE_STANDARD_START_YEAR
        })
        : getYearsForCategoryType(population, categoryType, measure, {
            minStartYear: PEOPLE_STANDARD_START_YEAR
        });

  if (target === "united kingdom") {
    return years.map((year) => {
      const rows = getCategoryRows(population, categoryType, measure, year.academicYear);

      let value = 0;

      rows.forEach((row) => {
        const key = normaliseRegionName(row.category);

        if (key === "united kingdom" || isUKInternalCategory(row.category)) {
          value += Number(row.value || 0);
        }
      });

      return {
        population,
        categoryType,
        measure,
        academicYear: year.academicYear,
        startYear: year.startYear,
        category: "United Kingdom",
        value
      };
    });
  }

  return years.map((year) => {
    const hasYearData = categoryTypeHasDataForYear(population, categoryType, measure, year.academicYear);

    const row = getCategoryRows(population, categoryType, measure, year.academicYear)
      .find((entry) => normaliseRegionName(entry.category) === target);

    return {
      population,
      categoryType,
      measure,
      academicYear: year.academicYear,
      startYear: year.startYear,
      category: region,
      value: hasYearData ? Number(row?.value || 0) : null
    };
  }).filter((row) => row.value !== null);
}

function renderRegionTrend(options) {
  const {
    svgSelector,
    population,
    categoryType,
    measure,
    region,
    selectedYear,
    tooltipSelector,
    onYearClick
  } = options;

  const svg = document.querySelector(svgSelector);
  const tooltip = document.querySelector(tooltipSelector);
  if (!svg) return;

  clearElement(svg);

  if (!region || region === "__uk_other__") {
    drawBlankAxes(svg, { measure });
    return;
  }

  if (
    region === "__uk_internal__" ||
    isUKInternalCategory(region) ||
    (
      isUnitedKingdomName(region) &&
      hasInternalUKBreakdownForSelection(population, categoryType, measure, selectedYear)
    )
  ) {
    renderUKInternalTrend({
      svg,
      tooltip,
      population,
      categoryType,
      measure,
      selectedYear,
      highlight: isUKInternalCategory(region) ? region : "All",
      onYearClick
    });
    return;
  }

  const rows = getRegionTrendRows(population, categoryType, measure, region);

  drawSmallLine(svg, tooltip, rows, {
    selectedYear,
    measure,
    label: getRegionDisplayName(region),
    onYearClick,
    color: "#8b2f3c"
  });
}

function renderUKInternalTrend(options) {
  const {
    svg,
    tooltip,
    population,
    categoryType,
    measure,
    selectedYear,
    highlight,
    onYearClick
  } = options;

  clearElement(svg);

  const years =
    population === "Staff" && categoryType === "Nationality"
        ? getYearsWithActualCategoryData(population, categoryType, measure, {
            minStartYear: PEOPLE_STANDARD_START_YEAR
        })
        : getYearsForCategoryType(population, categoryType, measure, {
            minStartYear: PEOPLE_STANDARD_START_YEAR
        });

  if (!years.length) {
    drawBlankAxes(svg, { measure });
    return;
  }

  const series = UK_REGION_NAMES.map((region) => {
    const rows = years.map((year) => {
      const hasYearData = categoryTypeHasDataForYear(population, categoryType, measure, year.academicYear);

      const row = getCategoryRows(population, categoryType, measure, year.academicYear)
        .find((entry) => normaliseRegionName(entry.category) === normaliseRegionName(region));

      return {
        category: region,
        academicYear: year.academicYear,
        startYear: Number(year.startYear),
        value: hasYearData ? Number(row?.value || 0) : null,
        measure
      };
    });

    return { region, rows };
  });

  const hasAny = series.some((entry) => entry.rows.some((row) => Number(row.value || 0) > 0));
  if (!hasAny) {
    drawBlankAxes(svg, { measure });
    return;
  }

  const width = Number(svg.getAttribute("viewBox")?.split(" ")[2]) || 380;
  const height = Number(svg.getAttribute("viewBox")?.split(" ")[3]) || 230;
  const margin = { top: 34, right: 92, bottom: 70, left: 54 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const minYear = Math.min(...years.map((year) => Number(year.startYear)));
  const maxYear = Math.max(...years.map((year) => Number(year.startYear)));
  const maxValue = Math.max(
    ...series.flatMap((entry) => entry.rows.map((row) => row.value).filter((value) => value !== null)),
    1
  );

  const x = (year) =>
    margin.left + ((Number(year) - minYear) / Math.max(1, maxYear - minYear)) * innerWidth;

  const y = (value) =>
    margin.top + innerHeight - (Number(value) / maxValue) * innerHeight;

  [0, 0.5, 1].forEach((tick) => {
    const yPos = margin.top + innerHeight - tick * innerHeight;

    svg.appendChild(svgEl("line", {
      x1: margin.left,
      x2: width - margin.right,
      y1: yPos,
      y2: yPos,
      class: "people-grid-line"
    }));

    svg.appendChild(svgEl("text", {
      x: margin.left - 10,
      y: yPos + 4,
      "text-anchor": "end",
      class: "people-axis-text"
    }, fmt(maxValue * tick)));
  });

  if (selectedYear && selectedYear !== "All") {
    const selected = years.find((year) => year.academicYear === selectedYear);
    if (selected) {
      svg.appendChild(svgEl("line", {
        x1: x(selected.startYear),
        x2: x(selected.startYear),
        y1: margin.top,
        y2: margin.top + innerHeight,
        class: "people-selected-year-line"
      }));
    }
  }

  series.forEach((entry, index) => {
    const color = PEOPLE_PALETTE[index % PEOPLE_PALETTE.length];
    const isDimmed = highlight && highlight !== "All" && normaliseRegionName(highlight) !== normaliseRegionName(entry.region);

    let pathParts = [];
    let segmentStarted = false;

    entry.rows.forEach((row) => {
      if (row.value === null) {
        segmentStarted = false;
        return;
      }

      pathParts.push(`${segmentStarted ? "L" : "M"} ${x(row.startYear)} ${y(row.value)}`);
      segmentStarted = true;
    });

    if (pathParts.length) {
      svg.appendChild(svgEl("path", {
        d: pathParts.join(" "),
        fill: "none",
        stroke: color,
        "stroke-width": isDimmed ? 1.8 : 2.8,
        opacity: isDimmed ? 0.2 : 1,
        class: "people-line-standard"
      }));
    }

    entry.rows.forEach((row) => {
      if (row.value === null) return;

      const dot = svgEl("circle", {
        cx: x(row.startYear),
        cy: y(row.value),
        r: selectedYear === row.academicYear ? 4.4 : 3,
        fill: color,
        opacity: isDimmed ? 0.2 : 0.95,
        class: "people-dot"
      });

      dot.addEventListener("mouseenter", (event) => {
        showTooltip(tooltip, event, `
          <strong>${escapeHTML(row.academicYear)}</strong>
          ${escapeHTML(entry.region)}<br>
          ${escapeHTML(measure)}: ${fmt(row.value)}
        `);
      });

      dot.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
      dot.addEventListener("mouseleave", () => hideTooltip(tooltip));

      dot.addEventListener("click", () => {
        if (typeof onYearClick === "function") onYearClick(row.academicYear);
      });

      svg.appendChild(dot);
    });
  });

  drawLegend(svg, UK_REGION_NAMES, width - margin.right + 8, margin.top + 6, {
    rowHeight: 16,
    maxLabel: 18,
    colourCategories: UK_REGION_NAMES
  });

  years.forEach((year) => {
    svg.appendChild(svgEl("text", {
      x: x(year.startYear),
      y: height - 40,
      "text-anchor": "end",
      transform: `rotate(-45 ${x(year.startYear)} ${height - 40})`,
      class: "people-axis-text"
    }, year.academicYear));
  });

  svg.appendChild(svgEl("text", {
    x: 14,
    y: margin.top - 10,
    class: "people-axis-title"
  }, measure));
}

function drawSmallLine(svg, tooltip, rows, options = {}) {
  clearElement(svg);

  if (!rows.length) {
    drawBlankAxes(svg, { measure: options.measure || "Headcount" });
    return;
  }

  const width = Number(svg.getAttribute("viewBox")?.split(" ")[2]) || 720;
  const height = Number(svg.getAttribute("viewBox")?.split(" ")[3]) || 300;
  const margin = { top: 34, right: 28, bottom: 78, left: 58 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const minYear = Math.min(...rows.map((row) => Number(row.startYear)));
  const maxYear = Math.max(...rows.map((row) => Number(row.startYear)));
  const maxValue = Math.max(...rows.map((row) => Number(row.value || 0)), 1);

  const x = (year) =>
    margin.left + ((Number(year) - minYear) / Math.max(1, maxYear - minYear)) * innerWidth;

  const y = (value) =>
    margin.top + innerHeight - (Number(value) / maxValue) * innerHeight;

  [0, 0.5, 1].forEach((tick) => {
    const yPos = margin.top + innerHeight - tick * innerHeight;

    svg.appendChild(svgEl("line", {
      x1: margin.left,
      x2: width - margin.right,
      y1: yPos,
      y2: yPos,
      class: "people-grid-line"
    }));

    svg.appendChild(svgEl("text", {
      x: margin.left - 12,
      y: yPos + 4,
      "text-anchor": "end",
      class: "people-axis-text"
    }, fmt(maxValue * tick)));
  });

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: width - margin.right,
    y1: margin.top + innerHeight,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  svg.appendChild(svgEl("line", {
    x1: margin.left,
    x2: margin.left,
    y1: margin.top,
    y2: margin.top + innerHeight,
    class: "people-axis"
  }));

  if (options.selectedYear && options.selectedYear !== "All") {
    const selectedRow = rows.find((row) => row.academicYear === options.selectedYear);
    if (selectedRow) {
      svg.appendChild(svgEl("line", {
        x1: x(selectedRow.startYear),
        x2: x(selectedRow.startYear),
        y1: margin.top,
        y2: margin.top + innerHeight,
        class: "people-selected-year-line"
      }));
    }
  }

  let pathParts = [];
  let segmentStarted = false;

  rows.forEach((row) => {
    if (row.value === null || row.value === undefined) {
      segmentStarted = false;
      return;
    }

    pathParts.push(`${segmentStarted ? "L" : "M"} ${x(row.startYear)} ${y(row.value)}`);
    segmentStarted = true;
  });

  if (pathParts.length) {
    svg.appendChild(svgEl("path", {
      d: pathParts.join(" "),
      fill: "none",
      stroke: options.color || "#8b2f3c",
      "stroke-width": 2.6,
      class: "people-line-standard"
    }));
  }

  rows.forEach((row) => {
    if (row.value === null || row.value === undefined) return;

    const dot = svgEl("circle", {
      cx: x(row.startYear),
      cy: y(row.value),
      r: options.selectedYear === row.academicYear ? 5 : 3.4,
      fill: options.color || "#8b2f3c",
      class: "people-dot"
    });

    dot.addEventListener("mouseenter", (event) => {
      showTooltip(tooltip, event, `
        <strong>${escapeHTML(row.academicYear)}</strong>
        ${escapeHTML(options.label || row.category)}<br>
        ${escapeHTML(row.measure || options.measure || "Value")}: ${fmt(row.value)}
      `);
    });

    dot.addEventListener("mousemove", (event) => showTooltip(tooltip, event, tooltip.innerHTML));
    dot.addEventListener("mouseleave", () => hideTooltip(tooltip));

    dot.addEventListener("click", () => {
      if (typeof options.onYearClick === "function") options.onYearClick(row.academicYear);
    });

    svg.appendChild(dot);
  });

  rows.forEach((row) => {
    svg.appendChild(svgEl("text", {
      x: x(row.startYear),
      y: height - 43,
      "text-anchor": "end",
      transform: `rotate(-45 ${x(row.startYear)} ${height - 43})`,
      class: "people-axis-text"
    }, row.academicYear));
  });

  svg.appendChild(svgEl("text", {
    x: 14,
    y: margin.top - 10,
    class: "people-axis-title"
  }, options.measure || "Headcount"));
}

/* ------------------------------
   Student module
------------------------------ */

function initialiseStudentControls() {
  const years = getYearsForPopulation("Students", {
    minStartYear: PEOPLE_STANDARD_START_YEAR
  });

  peopleState.studentYear = "All";
  populateYearSelect(document.querySelector(".js-student-year"), years, peopleState.studentYear);

  document.querySelector(".js-student-year")?.addEventListener("change", (event) => {
    peopleState.studentYear = event.target.value;
    renderStudentModule();
  });

  document.querySelectorAll(".js-student-measure").forEach((button) => {
    button.addEventListener("click", () => {
      peopleState.studentMeasure = button.dataset.measure;
      peopleState.selectedProgramme = "";
      setActiveToggle(document.querySelectorAll(".js-student-measure"), peopleState.studentMeasure);
      renderStudentModule();
    });
  });

  document.querySelector(".js-student-reset")?.addEventListener("click", () => {
    peopleState.studentYear = "All";
    peopleState.studentMeasure = "Headcount";
    peopleState.studentDegreeHighlight = "All";
    peopleState.studentGenderHighlight = "All";
    peopleState.selectedProgramme = "";
    peopleState.selectedStudentRegion = "";

    document.querySelector(".js-student-year").value = "All";
    setActiveToggle(document.querySelectorAll(".js-student-measure"), "Headcount");

    renderStudentModule();
  });
}

function setStudentYear(year) {
  peopleState.studentYear = year;

  const select = document.querySelector(".js-student-year");
  if (select) select.value = year;

  renderStudentModule();
}

function renderStudentDegreeLevel() {
  renderCategoryTrendChart({
    svgSelector: ".js-degree-level-trend",
    tooltipSelector: ".js-degree-level-trend-tooltip",
    population: "Students",
    categoryType: "Degree Level",
    measure: peopleState.studentMeasure,
    selectedYear: peopleState.studentYear,
    highlight: peopleState.studentDegreeHighlight,
    onYearClick: setStudentYear,
    onCategoryClick: (category) => {
      peopleState.studentDegreeHighlight = peopleState.studentDegreeHighlight === category ? "All" : category;
      renderStudentDegreeLevel();
    },
    onBlankClick: () => {
      peopleState.studentDegreeHighlight = "All";
      renderStudentDegreeLevel();
    }
  });

  renderDistributionBar({
    svgSelector: ".js-degree-level-distribution",
    tooltipSelector: ".js-degree-level-distribution-tooltip",
    population: "Students",
    categoryType: "Degree Level",
    measure: peopleState.studentMeasure,
    year: peopleState.studentYear,
    highlight: peopleState.studentDegreeHighlight,
    titleSelector: ".js-degree-level-distribution-title",
    onCategoryClick: (category) => {
      peopleState.studentDegreeHighlight = peopleState.studentDegreeHighlight === category ? "All" : category;
      renderStudentDegreeLevel();
    },
    onBlankClick: () => {
      peopleState.studentDegreeHighlight = "All";
      renderStudentDegreeLevel();
    }
  });
}

function renderStudentGender() {
  renderCategoryTrendChart({
    svgSelector: ".js-student-gender-trend",
    tooltipSelector: ".js-student-gender-trend-tooltip",
    population: "Students",
    categoryType: "Gender",
    measure: peopleState.studentMeasure,
    selectedYear: peopleState.studentYear,
    highlight: peopleState.studentGenderHighlight,
    valueMode: "percentage",
    onYearClick: setStudentYear,
    onCategoryClick: (category) => {
      peopleState.studentGenderHighlight = peopleState.studentGenderHighlight === category ? "All" : category;
      renderStudentGender();
    },
    onBlankClick: () => {
      peopleState.studentGenderHighlight = "All";
      renderStudentGender();
    }
  });

  renderPieChart({
    svgSelector: ".js-student-gender-pie",
    tooltipSelector: ".js-student-gender-pie-tooltip",
    population: "Students",
    categoryType: "Gender",
    measure: peopleState.studentMeasure,
    year: peopleState.studentYear,
    highlight: peopleState.studentGenderHighlight,
    titleSelector: ".js-student-gender-pie-title",
    onCategoryClick: (category) => {
      peopleState.studentGenderHighlight = peopleState.studentGenderHighlight === category ? "All" : category;
      renderStudentGender();
    },
    onBlankClick: () => {
      peopleState.studentGenderHighlight = "All";
      renderStudentGender();
    }
  });
}

function renderStudentModule() {
  renderStudentDegreeLevel();
  renderStudentGender();
  renderEarlyProgrammesCard();
  renderStandardProgrammeDashboard();
  renderStudentDomicileMaps();
}

function renderEarlyProgrammesCard() {
  const container = document.querySelector(".js-early-programmes-list");
  if (!container) return;

  const rows = getRows({
    population: "Students",
    categoryType: "Degree Title",
    measure: peopleState.studentMeasure,
    maxStartYear: PEOPLE_EARLY_END_YEAR
  });

  const totals = new Map();

  rows.forEach((row) => {
    if (!row.category || row.category === "Total") return;
    totals.set(row.category, (totals.get(row.category) || 0) + Number(row.value || 0));
  });

  const ranked = [...totals.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  if (!ranked.length) {
    container.innerHTML = `<p class="people-chart-note">No early programme data available.</p>`;
    return;
  }

  container.innerHTML = ranked.map(([programme, value]) => `
    <div class="early-programme-row">
      <span>${escapeHTML(programme)}</span>
      <strong>${fmt(value)}</strong>
    </div>
  `).join("");
}

function renderStandardProgrammeDashboard() {
  const rankingYear = peopleState.studentYear;
  const yearLabel = document.querySelector(".js-programme-ranking-year");
  const rankedRows = getProgrammeTopRows();

  if (yearLabel) {
    yearLabel.textContent = rankingYear === "All" ? "All years" : rankingYear;
  }

  renderRankedBarChart({
    svgSelector: ".js-standard-programme-chart",
    tooltipSelector: ".js-standard-programme-tooltip",
    rows: rankedRows,
    selectedCategory: peopleState.selectedProgramme,
    topN: 10,
    onClick: (programme) => {
      peopleState.selectedProgramme = peopleState.selectedProgramme === programme ? "" : programme;
      renderStandardProgrammeDashboard();
    },
    onBlankClick: () => {
      peopleState.selectedProgramme = "";
      renderStandardProgrammeDashboard();
    }
  });

  renderProgrammeMultiTrend();
}

async function renderStudentDomicileMaps() {
  await renderWorldChoropleth({
    svgSelector: ".js-student-domicile-map",
    tooltipSelector: ".js-student-domicile-tooltip",
    population: "Students",
    categoryType: "Domicile",
    measure: peopleState.studentMeasure,
    year: peopleState.studentYear,
    selectedRegion: peopleState.selectedStudentRegion,
    titleSelector: ".js-student-map-title",
    onRegionClick: (region) => {
      peopleState.selectedStudentRegion = region;
      renderStudentDomicileMaps();
    },
    onBlankClick: () => {
      peopleState.selectedStudentRegion = "";
      renderStudentDomicileMaps();
    }
  });

  renderRegionTrend({
    svgSelector: ".js-student-domicile-trend",
    tooltipSelector: ".js-student-domicile-tooltip",
    population: "Students",
    categoryType: "Domicile",
    measure: peopleState.studentMeasure,
    region: peopleState.selectedStudentRegion,
    selectedYear: peopleState.studentYear,
    onYearClick: setStudentYear
  });

  renderUKBreakdownBars({
    svgSelector: ".js-student-uk-breakdown-bars",
    tooltipSelector: ".js-student-domicile-tooltip",
    population: "Students",
    categoryType: "Domicile",
    measure: peopleState.studentMeasure,
    year: peopleState.studentYear,
    selectedRegion: peopleState.selectedStudentRegion,
    onRegionClick: (region) => {
      peopleState.selectedStudentRegion = region;
      renderStudentDomicileMaps();
    },
    onBlankClick: () => {
      peopleState.selectedStudentRegion = "";
      renderStudentDomicileMaps();
    }
  });
}

/* ------------------------------
   Staff module
------------------------------ */

function initialiseStaffControls() {
  const years = getYearsForPopulation("Staff", {
    minStartYear: PEOPLE_STANDARD_START_YEAR
  });

  peopleState.staffYear = "All";
  populateYearSelect(document.querySelector(".js-staff-year"), years, peopleState.staffYear);

  document.querySelector(".js-staff-year")?.addEventListener("change", (event) => {
    peopleState.staffYear = event.target.value;
    renderStaffModule();
  });

  document.querySelectorAll(".js-staff-measure").forEach((button) => {
    button.addEventListener("click", () => {
      peopleState.staffMeasure = button.dataset.measure;
      setActiveToggle(document.querySelectorAll(".js-staff-measure"), peopleState.staffMeasure);
      renderStaffModule();
    });
  });

  document.querySelector(".js-staff-reset")?.addEventListener("click", () => {
    peopleState.staffYear = "All";
    peopleState.staffMeasure = "Headcount";
    peopleState.staffRoleHighlight = "All";
    peopleState.staffGenderHighlight = "All";
    peopleState.selectedStaffCountry = "";

    document.querySelector(".js-staff-year").value = "All";
    setActiveToggle(document.querySelectorAll(".js-staff-measure"), "Headcount");

    renderStaffModule();
  });

  document.querySelector(".js-staff-nationality-topn")?.addEventListener("change", (event) => {
    peopleState.staffNationalityTopN = Number(event.target.value || 10);
    renderStaffNationalityMap();
  });
}

function setStaffYear(year) {
  peopleState.staffYear = year;

  const select = document.querySelector(".js-staff-year");
  if (select) select.value = year;

  renderStaffModule();
}

function renderStaffRoles() {
  const staffRoleType = getStaffRoleCategoryType();

  renderCategoryTrendChart({
    svgSelector: ".js-staff-role-trend",
    tooltipSelector: ".js-staff-role-trend-tooltip",
    population: "Staff",
    categoryType: staffRoleType,
    measure: peopleState.staffMeasure,
    selectedYear: peopleState.staffYear,
    highlight: peopleState.staffRoleHighlight,
    missingAsGap: true,
    onYearClick: setStaffYear,
    onCategoryClick: (category) => {
      peopleState.staffRoleHighlight = peopleState.staffRoleHighlight === category ? "All" : category;
      renderStaffRoles();
    },
    onBlankClick: () => {
      peopleState.staffRoleHighlight = "All";
      renderStaffRoles();
    }
  });

  renderDistributionBar({
    svgSelector: ".js-staff-role-distribution",
    tooltipSelector: ".js-staff-role-distribution-tooltip",
    population: "Staff",
    categoryType: staffRoleType,
    measure: peopleState.staffMeasure,
    year: peopleState.staffYear,
    highlight: peopleState.staffRoleHighlight,
    titleSelector: ".js-staff-role-distribution-title",
    missingMode: true,
    onCategoryClick: (category) => {
      peopleState.staffRoleHighlight = peopleState.staffRoleHighlight === category ? "All" : category;
      renderStaffRoles();
    },
    onBlankClick: () => {
      peopleState.staffRoleHighlight = "All";
      renderStaffRoles();
    }
  });
}

function renderStaffGender() {
  renderCategoryTrendChart({
    svgSelector: ".js-staff-gender-trend",
    tooltipSelector: ".js-staff-gender-trend-tooltip",
    population: "Staff",
    categoryType: "Gender",
    measure: peopleState.staffMeasure,
    selectedYear: peopleState.staffYear,
    highlight: peopleState.staffGenderHighlight,
    valueMode: "percentage",
    onYearClick: setStaffYear,
    onCategoryClick: (category) => {
      peopleState.staffGenderHighlight = peopleState.staffGenderHighlight === category ? "All" : category;
      renderStaffGender();
    },
    onBlankClick: () => {
      peopleState.staffGenderHighlight = "All";
      renderStaffGender();
    }
  });

  renderPieChart({
    svgSelector: ".js-staff-gender-pie",
    tooltipSelector: ".js-staff-gender-pie-tooltip",
    population: "Staff",
    categoryType: "Gender",
    measure: peopleState.staffMeasure,
    year: peopleState.staffYear,
    highlight: peopleState.staffGenderHighlight,
    titleSelector: ".js-staff-gender-pie-title",
    onCategoryClick: (category) => {
      peopleState.staffGenderHighlight = peopleState.staffGenderHighlight === category ? "All" : category;
      renderStaffGender();
    },
    onBlankClick: () => {
      peopleState.staffGenderHighlight = "All";
      renderStaffGender();
    }
  });
}

function renderStaffModule() {
  renderStaffRoles();
  renderStaffGender();
  renderStaffNationalityMap();
}

async function renderStaffNationalityMap() {
  await renderWorldChoropleth({
    svgSelector: ".js-staff-nationality-map",
    tooltipSelector: ".js-staff-nationality-tooltip",
    population: "Staff",
    categoryType: "Nationality",
    measure: peopleState.staffMeasure,
    year: peopleState.staffYear,
    selectedRegion: peopleState.selectedStaffCountry,
    titleSelector: ".js-staff-map-title",
    onRegionClick: (country) => {
      peopleState.selectedStaffCountry = country;
      renderStaffNationalityMap();
    },
    onBlankClick: () => {
      peopleState.selectedStaffCountry = "";
      renderStaffNationalityMap();
    }
  });

  renderRegionTrend({
    svgSelector: ".js-staff-nationality-trend",
    tooltipSelector: ".js-staff-nationality-tooltip",
    population: "Staff",
    categoryType: "Nationality",
    measure: peopleState.staffMeasure,
    region: peopleState.selectedStaffCountry,
    selectedYear: peopleState.staffYear,
    onYearClick: setStaffYear
  });

  const hasUKBreakdown = hasInternalUKBreakdownForSelection(
    "Staff",
    "Nationality",
    peopleState.staffMeasure,
    peopleState.staffYear
  );

  const panelTitle = document.querySelector(".js-staff-uk-panel-title");

  if (hasUKBreakdown) {
    if (panelTitle) panelTitle.textContent = "UK breakdown";

    renderUKBreakdownBars({
      svgSelector: ".js-staff-nationality-comparison-bars",
      tooltipSelector: ".js-staff-nationality-tooltip",
      population: "Staff",
      categoryType: "Nationality",
      measure: peopleState.staffMeasure,
      year: peopleState.staffYear,
      selectedRegion: peopleState.selectedStaffCountry,
      onRegionClick: (region) => {
        peopleState.selectedStaffCountry = region;
        renderStaffNationalityMap();
      },
      onBlankClick: () => {
        peopleState.selectedStaffCountry = "";
        renderStaffNationalityMap();
      }
    });
  } else {
    if (panelTitle) panelTitle.textContent = "Nationality comparison";

    renderNationalityComparisonBars({
      svgSelector: ".js-staff-nationality-comparison-bars",
      tooltipSelector: ".js-staff-nationality-tooltip",
      population: "Staff",
      categoryType: "Nationality",
      measure: peopleState.staffMeasure,
      year: peopleState.staffYear,
      selectedRegion: peopleState.selectedStaffCountry,
      topN: peopleState.staffNationalityTopN,
      onRegionClick: (country) => {
        peopleState.selectedStaffCountry = country;
        renderStaffNationalityMap();
      },
      onBlankClick: () => {
        peopleState.selectedStaffCountry = "";
        renderStaffNationalityMap();
      }
    });
  }

  renderStaffNationalitySummary();
}

function renderStaffNationalitySummary() {
  const container = document.querySelector(".js-staff-nationality-summary");
  if (!container) return;

  const rows = getRowsForYearOrAll("Staff", "Nationality", peopleState.staffMeasure, peopleState.staffYear);
  const unknown = rows
    .filter((row) => isUnknownCategory(row.category))
    .reduce((sum, row) => sum + Number(row.value || 0), 0);

  const total = rows.reduce((sum, row) => sum + Number(row.value || 0), 0);

  container.innerHTML = `
    <strong>${peopleState.staffYear === "All" ? "All years" : escapeHTML(peopleState.staffYear)}</strong><br>
    Total staff nationality values: ${fmt(total)}<br>
    Not known / unknown: ${fmt(unknown)}
  `;
}

/* ------------------------------
   People wall
------------------------------ */

function getPeopleWallRecords() {
  const source =
    typeof ITEMS !== "undefined" && Array.isArray(ITEMS)
      ? ITEMS
      : [];

  return source
    .filter(isStrictPeopleWallItem)
    .map(normalisePeopleWallRecord)
    .filter((record) => record.id && record.name)
    .sort((a, b) => a.sortName.localeCompare(b.sortName));
}

function isStrictPeopleWallItem(item) {
  if (!item) return false;

  const typeText = String(item.itemType || "")
    .toLowerCase()
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/[|,/]+/g, ";")
    .replace(/\s+/g, " ")
    .trim();

  if (!typeText) return false;

  const typeParts = typeText
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean);

  const hasPersonType = typeParts.some((part) => {
    return (
      part === "person" ||
      part === "people" ||
      part === "profile" ||
      part === "person profile" ||
      part === "people profile"
    );
  });

  if (!hasPersonType) return false;

  const hasNonPersonType = typeParts.some((part) => {
    return (
      part.includes("event") ||
      part.includes("building") ||
      part.includes("equipment") ||
      part.includes("machine") ||
      part.includes("hardware") ||
      part.includes("software") ||
      part.includes("system") ||
      part.includes("facility") ||
      part.includes("object") ||
      part.includes("course") ||
      part.includes("programme") ||
      part.includes("project") ||
      part.includes("award") ||
      part.includes("anniversary") ||
      part.includes("opening") ||
      part.includes("timeline")
    );
  });

  if (hasNonPersonType) return false;

  const title = String(item.title || "").toLowerCase();

  const eventLikeTitle =
    title.includes("anniversary") ||
    title.includes("official opening") ||
    title.includes("opening of") ||
    title.includes("opened") ||
    title.includes("lecture") ||
    title.includes("series") ||
    title.includes("installed") ||
    title.includes("launched") ||
    title.includes("building") ||
    title.includes("programme") ||
    title.includes("degree") ||
    title.includes("course");

  if (eventLikeTitle) return false;

  return true;
}

function normalisePeopleWallRecord(raw) {
  const name =
    raw.title ||
    raw.displayTitle ||
    raw.display_name ||
    raw.displayName ||
    raw.name ||
    "";

  const role =
    raw.role ||
    raw.position ||
    raw.job_title ||
    raw.jobTitle ||
    raw.short_role ||
    raw.shortRole ||
    raw.itemType ||
    "Person";

  const id =
    raw.id ||
    raw.item_id ||
    raw.itemId ||
    raw.record_id ||
    raw.recordId ||
    name;

  return {
    raw,
    id: String(id),
    name: String(name).trim(),
    role: formatPeopleWallRole(role),
    initials: getPeopleInitials(name),
    sortName: getPeopleSortName(name),
    searchText: String(name || "").toLowerCase()
  };
}

function formatPeopleWallRole(value) {
  const text = String(value || "")
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .trim();

  if (!text) return "Person";

  const cleaned = text
    .split(/[;,/|]+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .find((part) => {
      const lower = part.toLowerCase();
      return (
        lower === "person" ||
        lower === "people" ||
        lower === "profile" ||
        lower === "person profile" ||
        lower === "people profile"
      );
    }) || "Person";

  return cleaned
    .split(/\s+/)
    .map((word) => {
      if (!word) return "";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function getPeopleInitials(name) {
  const parts = String(name || "")
    .replace(/[()]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (!parts.length) return "?";

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0] || ""}${parts[parts.length - 1][0] || ""}`.toUpperCase();
}

function getPeopleSortName(name) {
  const cleaned = String(name || "").trim();

  if (!cleaned) return "";

  const parts = cleaned.split(/\s+/).filter(Boolean);

  if (parts.length <= 1) return cleaned.toLowerCase();

  const last = parts[parts.length - 1];
  const first = parts.slice(0, -1).join(" ");

  return `${last}, ${first}`.toLowerCase();
}

function renderPeopleWall(records) {
  const grid = document.querySelector(".js-people-wall-grid");
  const count = document.querySelector(".js-people-wall-count");

  if (!grid) return;

  clearElement(grid);

  if (count) {
    count.textContent = `${records.length} ${records.length === 1 ? "person" : "people"} shown`;
  }

  if (!records.length) {
    const empty = document.createElement("div");
    empty.className = "people-wall-empty";
    empty.textContent = "No matching people records.";
    grid.appendChild(empty);
    return;
  }

  records.forEach((record) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "people-wall-card";
    card.setAttribute("aria-label", `Open ${record.name}`);
    card.dataset.personId = record.id;

    const portrait = document.createElement("div");
    portrait.className = "people-wall-portrait";

    const placeholder = document.createElement("div");
    placeholder.className = "people-wall-placeholder";
    placeholder.textContent = record.initials;
    portrait.appendChild(placeholder);

    const name = document.createElement("h4");
    name.className = "people-wall-card-name";
    name.textContent = record.name;

    const role = document.createElement("p");
    role.className = "people-wall-card-role";
    role.textContent = record.role || "Person";

    card.appendChild(portrait);
    card.appendChild(name);
    card.appendChild(role);

    card.addEventListener("click", () => {
      openPeopleWallDrawer(record);
    });

    grid.appendChild(card);
  });
}

function openPeopleWallDrawer(record) {
  if (typeof openDetailDrawer === "function") {
    openDetailDrawer(record.id);
    return;
  }

  if (typeof openDrawerById === "function") {
    openDrawerById(record.id);
    return;
  }

  if (typeof openDrawer === "function") {
    openDrawer(record.id);
    return;
  }

  if (typeof openRecordDrawer === "function") {
    openRecordDrawer(record.raw || record);
    return;
  }

  document.dispatchEvent(new CustomEvent("open-record-drawer", {
    detail: {
      id: record.id,
      record: record.raw || record
    }
  }));
}

function initialisePeopleWall() {
  const transitionButton = document.querySelector(".js-people-wall-start");
  const wall = document.querySelector("#people-wall-module");
  const search = document.querySelector(".js-people-wall-search");

  const allRecords = getPeopleWallRecords();

  transitionButton?.addEventListener("click", () => {
    wall?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  renderPeopleWall(allRecords);

  search?.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();

    if (!query) {
      renderPeopleWall(allRecords);
      return;
    }

    const filtered = allRecords.filter((record) => {
      return record.searchText.includes(query);
    });

    renderPeopleWall(filtered);
  });
}

/* ------------------------------
   Initialisation
------------------------------ */

function initialisePeoplePage() {
  if (typeof PEOPLE_ROWS === "undefined") {
    console.warn("PEOPLE_ROWS is not available. Make sure js/data_people.js is loaded before js/people.js.");
    return;
  }

  peopleStart();

  document.querySelectorAll(".js-people-growth-measure").forEach((button) => {
    button.addEventListener("click", () => {
      peopleState.growthMeasure = button.dataset.measure;
      setActiveToggle(document.querySelectorAll(".js-people-growth-measure"), peopleState.growthMeasure);
      renderGrowthChart();
    });
  });

  initialiseStudentControls();
  initialiseStaffControls();

  renderGrowthChart();
  renderStudentModule();
  renderStaffModule();
  initialisePeopleWall();
}

initialisePeoplePage();
}

window.initialisePeopleModule = initialisePeopleModule;