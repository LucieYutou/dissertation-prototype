const CURATED_TIMELINE_ITEMS = [
  { id: "item_001", displayDate: "1959", displayTitle: "Stibbs begins pressing for a University Computing Laboratory", tags: ["BTS"] },
  { id: "item_009", displayDate: "October 1964", displayTitle: "IBM 1620 Model II and the start of St Andrews computing service", tags: ["BTS", "Equip"] },
  { id: "item_016", displayDate: "4 January 1965", displayTitle: "Computing Laboratory begins full-time service", tags: ["BTS", "Equip"] },
  { id: "item_018", displayDate: "October 1965", displayTitle: "Jack Cole appointed Director of the Computing Laboratory", tags: ["BTS"] },
  { id: "item_020", displayDate: "1966", displayTitle: "Computational Science postgraduate work begins", tags: ["BTS", "Teach"] },
  { id: "item_021", displayDate: "December 1967", displayTitle: "Computing Laboratory moved to the Mathematics Institute", tags: ["BTS", "Equip"] },
  { id: "item_027", displayDate: "April 1969", displayTitle: "IBM 360/44 installed", tags: ["BTS", "Equip"] },
  { id: "item_025", displayDate: "1969", displayTitle: "Distinguished Lecture Series begins with Algol ’68", tags: ["BTS", "Research"] },
  { id: "item_033", displayDate: "1971", displayTitle: "First Computer Science degree awarded at St Andrews", tags: ["BTS", "Teach"] },
  { id: "item_041", displayDate: "1976", displayTitle: "Collaboration with the arts and humanities", tags: ["Hum", "Research"] },
  { id: "item_046", displayDate: "1978", displayTitle: "FAMULUS information storage and retrieval package", tags: ["Hum"] },
  { id: "item_047", displayDate: "February 1978", displayTitle: "Online information retrieval in the University Library", tags: ["Hum", "Research"] },
  { id: "item_049", displayDate: "October 1978", displayTitle: "Computer aids to learning languages", tags: ["Teach", "Hum"] },
  { id: "item_062", displayDate: "1980", displayTitle: "Changeover from IBM 360/44 to VAX 11/780 system and user training", tags: ["BTS", "Equip", "Teach"] },
  { id: "item_076", displayDate: "October 1982", displayTitle: "Oxford Concordance Package", tags: ["Hum"] },
  { id: "item_078", displayDate: "1983", displayTitle: "ALLC course on computing in the humanities", tags: ["Teach", "Hum"] },
  { id: "item_083", displayDate: "1984", displayTitle: "JANET connection", tags: ["Equip", "Research"] },
  { id: "item_095", displayDate: "July 1986", displayTitle: "Nota Bene multilingual word processor", tags: ["Hum", "Equip"] },
  { id: "item_101", displayDate: "1987–1988", displayTitle: "Old Union / North Street PC classroom with networked Zenith workstations", tags: ["BTS", "Teach", "Equip"] },
  { id: "item_103", displayDate: "February 1987", displayTitle: "Epson SQ-2000 Greek character package", tags: ["Hum", "Equip"] },
  { id: "item_106", displayDate: "March 1987", displayTitle: "HUMBUL humanities bulletin board", tags: ["Hum"] },
  { id: "item_114", displayDate: "June 1987", displayTitle: "Macintosh fonts for scholarly and non-English text", tags: ["Hum", "Equip"] },
  { id: "item_119", displayDate: "July 1987", displayTitle: "Macintosh Plus and AppleTalk cluster", tags: ["Equip", "Teach"] },
  { id: "item_139", displayDate: "November 1988", displayTitle: "SAULCAT online library catalogue", tags: ["Hum", "Equip"] },
  { id: "item_154", displayDate: "February 1989", displayTitle: "Replacement of computing facilities in 1990", tags: ["Equip"] },
  { id: "item_162", displayDate: "April 1989", displayTitle: "Chinese font installed on Macintosh number 2", tags: ["Hum", "Equip"] },
  { id: "item_173", displayDate: "June 1989", displayTitle: "Micro-OCP for multilingual text analysis", tags: ["Hum", "Research"] },
  { id: "item_179", displayDate: "1992–2002", displayTitle: "Ursula Martin appointed Professor of Computer Science", tags: ["BTS", "Research"] },
  { id: "item_181", displayDate: "1996", displayTitle: "Computing Laboratory and Management Information Services become IT Services", tags: ["BTS", "Equip"] },
  { id: "item_192", displayDate: "February 1997", displayTitle: "COPAC online library catalogue access", tags: ["Hum", "Research"] },
  { id: "item_206", displayDate: "1999", displayTitle: "School of Computer Science established", tags: ["BTS"] },
  { id: "item_218", displayDate: "7 November 2002", displayTitle: "Plans for new Computer Science building unveiled", tags: ["BTS"] },
  { id: "item_215", displayDate: "2002–2005", displayTitle: "Jack Cole Building and The Gateway opened on the North Haugh", tags: ["BTS", "Equip", "Teach"] },
  { id: "item_245", displayDate: "September 2005", displayTitle: "Arts Research and Teaching Server", tags: ["Hum", "Teach", "Research"] },
  { id: "item_249", displayDate: "January 2006", displayTitle: "PCs for student use exceed 550", tags: ["Teach", "Equip"] },
  { id: "item_258", displayDate: "March 2008", displayTitle: "Records of the Parliaments of Scotland online", tags: ["Hum", "Research"] },
  { id: "item_298", displayDate: "March 2011", displayTitle: "GOALS: Grammar Online Accessible Language Study", tags: ["Hum", "Teach"] },
  { id: "item_321", displayDate: "11 February 2014", displayTitle: "Palimpsest: an Edinburgh Literary Cityscape", tags: ["Hum", "Research"] },
  { id: "item_323", displayDate: "9 March 2014", displayTitle: "New MSc in Human Computer Interaction appears in MSc portfolio", tags: ["BTS", "Teach", "Research"] },
  { id: "item_326", displayDate: "30 March 2015", displayTitle: "LitLong Edinburgh launches from Palimpsest", tags: ["Hum", "Research"] },
  { id: "item_328", displayDate: "2 September 2015", displayTitle: "Interaction Lab officially opened", tags: ["BTS", "Equip", "Research"] },
  { id: "item_341", displayDate: "27 March 2018", displayTitle: "Old French Bible Project", tags: ["Hum", "Research"] },
  { id: "item_347", displayDate: "23 May 2019", displayTitle: "Open Virtual Worlds virtual reconstruction of Finlaggan", tags: ["Hum", "Research"] },
  { id: "item_353", displayDate: "18 March 2025", displayTitle: "20th anniversary of the official opening of the Jack Cole Building", tags: ["BTS", "Equip"] },
  { id: "item_356", displayDate: "15 September 2025", displayTitle: "St Andrews Computer Science at Digital Heritage 2025", tags: ["Hum", "Research"] }
];

const DETAILED_EXTRA_TIMELINE_ITEMS = [
  { id: "item_004", displayDate: "1960", displayTitle: "IBM 1620 software environment: FORTRAN II-D and SPS", tags: ["Equip", "Teach"] },
  { id: "item_012", displayDate: "December 1964", displayTitle: "Formal inauguration ceremony for the Computing Laboratory", tags: ["BTS"] },
  { id: "item_015", displayDate: "January 1965", displayTitle: "Sheila Hill becomes the first computer operator", tags: ["BTS"] },
  { id: "item_019", displayDate: "1965–66", displayTitle: "Programming courses in FORTRAN and SPS", tags: ["Teach", "Equip"] },
  { id: "item_026", displayDate: "1969", displayTitle: "RAX", tags: ["Hum", "Equip"] },
  { id: "item_029", displayDate: "1970", displayTitle: "CLUSTAN and cluster analysis research", tags: ["Hum", "Research"] },
  { id: "item_031", displayDate: "February 1970", displayTitle: "IBM 1620 sold and Honeywell 316 front-end processor purchased", tags: ["Equip", "BTS"] },
  { id: "item_032", displayDate: "May 1970", displayTitle: "Computing Laboratory staff increased to 16", tags: ["BTS"] },
  { id: "item_038", displayDate: "1975", displayTitle: "Interdata RJE and remote job entry", tags: ["Equip"] },
  { id: "item_043", displayDate: "1976", displayTitle: "RAX text editing and character-code environment", tags: ["Hum"] },
  { id: "item_045", displayDate: "October 1977", displayTitle: "Digitiser purchased for the computer service", tags: ["Equip"] },
  { id: "item_053", displayDate: "1979", displayTitle: "S-algol", tags: ["Research"] },
  { id: "item_057", displayDate: "1980", displayTitle: "AI and expert systems research interest grows at St Andrews", tags: ["Research"] },
  { id: "item_058", displayDate: "1980", displayTitle: "Computing Laboratory conducts census of University-owned machines", tags: ["BTS", "Equip"] },
  { id: "item_061", displayDate: "March 1980", displayTitle: "Cromemco System 3 and Digital MINC delivered", tags: ["Equip"] },
  { id: "item_069", displayDate: "1981", displayTitle: "Computer Typesetting with TeX", tags: ["Hum", "Teach", "Equip"] },
  { id: "item_070", displayDate: "March 1981", displayTitle: "QUME high-quality printers", tags: ["Equip", "Hum"] },
  { id: "item_071", displayDate: "August 1981", displayTitle: "Cambridge Ring network", tags: ["Equip"] },
  { id: "item_075", displayDate: "October 1982", displayTitle: "GIGI colour graphics terminal and Benson electrostatic plotter", tags: ["Equip"] },
  { id: "item_077", displayDate: "December 1982", displayTitle: "ICL PERQ workstation and VAX file transfer", tags: ["Equip"] },
  { id: "item_079", displayDate: "1983", displayTitle: "BBC Micro and early microcomputer ecosystem", tags: ["Equip", "Teach"] },
  { id: "item_082", displayDate: "1984", displayTitle: "BBC Micro cassette data transfer to VAX", tags: ["Equip"] },
  { id: "item_085", displayDate: "February 1984", displayTitle: "NEC Spinwriter", tags: ["Equip"] },
  { id: "item_098", displayDate: "October 1986", displayTitle: "Apple Desktop Publishing System with Macintosh Plus and LaserWriter Plus", tags: ["Equip", "Hum", "Teach"] },
  { id: "item_116", displayDate: "July 1987", displayTitle: "DEC MicroVAX II computer and DECnet expansion", tags: ["Equip"] },
  { id: "item_121", displayDate: "July 1987", displayTitle: "North Street Computer Classroom", tags: ["Teach", "Equip"] },
  { id: "item_127", displayDate: "December 1987", displayTitle: "Computers and Teaching in the Humanities / CATH 88 planning", tags: ["Teach", "Hum"] },
  { id: "item_138", displayDate: "June 1988", displayTitle: "Department of Mediaeval History Arabic text / CLUSTAN analysis project", tags: ["Hum", "Research"] },
  { id: "item_150", displayDate: "February 1989", displayTitle: "NISS Bulletin Board, NISS Catalogue and Oxford Text Archive records", tags: ["Hum", "Research"] },
  { id: "item_167", displayDate: "11 April 1989", displayTitle: "DLS: Database Programming Languages open lecture course", tags: ["Teach", "Research"] },
  { id: "item_178", displayDate: "1990", displayTitle: "GIS introduction for arts and sciences users", tags: ["Hum", "Research"] },
  { id: "item_183", displayDate: "August 1996", displayTitle: "Distributed UNIX village server model", tags: ["Equip"] },
  { id: "item_190", displayDate: "1997–2012", displayTitle: "TALiSMAN online course: Using the WWW for Teaching and Learning", tags: ["Teach"] },
  { id: "item_195", displayDate: "February 1997", displayTitle: "The Data Archive for social sciences and humanities", tags: ["Hum", "Research"] },
  { id: "item_203", displayDate: "15 April 1998", displayTitle: "DLS: Information Retrieval", tags: ["Hum", "Research"] },
  { id: "item_208", displayDate: "12 February 1999", displayTitle: "Supported Classrooms Scheme", tags: ["Teach", "Equip"] },
  { id: "item_210", displayDate: "January 2000", displayTitle: "Videoconferencing for teaching and learning", tags: ["Teach", "Equip"] },
  { id: "item_211", displayDate: "1 March 2000", displayTitle: "DLS: Computer Storage Systems", tags: ["Research", "Equip"] },
  { id: "item_214", displayDate: "12 December 2001", displayTitle: "DLS: XML as a data standard", tags: ["Hum", "Research"] },
  { id: "item_225", displayDate: "September 2003", displayTitle: "WebCT and SITS interface", tags: ["Teach", "Equip"] },
  { id: "item_230", displayDate: "21 June 2004", displayTitle: "Arts and Humanities computing workshop", tags: ["Hum", "Teach", "Research"] },
  { id: "item_241", displayDate: "May 2005", displayTitle: "ePrints initiative with the University Library", tags: ["Hum", "Research"] },
  { id: "item_250", displayDate: "May 2006", displayTitle: "Digital images for research and teaching in the Arts", tags: ["Hum", "Teach"] },
  { id: "item_260", displayDate: "31 March 2008", displayTitle: "AHDS funding to cease", tags: ["Hum", "Research"] },
  { id: "item_263", displayDate: "September 2008", displayTitle: "Developer for Arts and Humanities Computing Projects", tags: ["Hum", "Research"] },
  { id: "item_284", displayDate: "2010", displayTitle: "WebCT to Moodle and MMS", tags: ["Teach", "Equip"] },
  { id: "item_319", displayDate: "21 June 2013", displayTitle: "Interactive Topic Visualization for Exploratory Text Analysis", tags: ["Hum", "Research"] },
  { id: "item_330", displayDate: "16 November 2015", displayTitle: "Palimpsest recognised by British Library Labs", tags: ["Hum", "Research"] },
  { id: "item_333", displayDate: "23 January 2017", displayTitle: "Tangible interactions in museums", tags: ["Hum", "Research"] },
  { id: "item_335", displayDate: "16 June 2017", displayTitle: "Finding What to Read: Visual Text Analytics", tags: ["Hum", "Research"] },
  { id: "item_339", displayDate: "10 October 2017", displayTitle: "Ursula Martin DLS: What Every Computer Scientist Should Know About Computer History", tags: ["Research"] },
  { id: "item_345", displayDate: "27 March 2019", displayTitle: "Deep learning for ancient Roman coins", tags: ["Hum", "Research"] },
  { id: "item_350", displayDate: "25 January 2023", displayTitle: "Open Virtual Worlds Impact Innovation Funding", tags: ["Hum", "Research"] },
  { id: "item_355", displayDate: "27 August 2025", displayTitle: "Open Virtual Worlds fieldwork with Timespan Museum", tags: ["Hum", "Research"] },
  { id: "item_357", displayDate: "15 October 2025", displayTitle: "Remaking Characters in Heritage Contexts", tags: ["Hum", "Research"] }
];

const DETAILED_TIMELINE_ITEMS = [
  ...CURATED_TIMELINE_ITEMS,
  ...DETAILED_EXTRA_TIMELINE_ITEMS
];

const BUILD_SCHOOL_ROUTE_IDS = [
  "item_001",
  "item_009",
  "item_016",
  "item_018",
  "item_020",
  "item_021",
  "item_027",
  "item_025",
  "item_033",
  "item_062",
  "item_101",
  "item_179",
  "item_181",
  "item_206",
  "item_218",
  "item_215",
  "item_323",
  "item_328",
  "item_353"
];

/* =========================================================
   Explore Timeline logic
   ========================================================= */

const TIMELINE_START_YEAR = 1959;
const TIMELINE_END_YEAR = 2026;

const timelineStateByMode = {
  curated: {
    filter: "all",
    search: "",
    selectedItemId: "",
    selectedClusterYear: "",
    selectedArchiveYear: "",
    visibleStartYear: 1959,
    visibleEndYear: 1980,
    scrollLeft: 0
  },
  detailed: {
    filter: "all",
    search: "",
    selectedItemId: "",
    selectedClusterYear: "",
    selectedArchiveYear: "",
    visibleStartYear: 1959,
    visibleEndYear: 1990,
    scrollLeft: 0
  },
  archive: {
    filter: "all",
    search: "",
    selectedItemId: "",
    selectedClusterYear: "",
    selectedArchiveYear: "",
    visibleStartYear: 1959,
    visibleEndYear: 2026,
    scrollLeft: 0
  }
};

function getDefaultModeState(mode) {
  if (mode === "curated") {
    return {
      filter: "all",
      search: "",
      selectedItemId: "",
      selectedClusterYear: "",
      selectedArchiveYear: "",
      visibleStartYear: 1959,
      visibleEndYear: 1980,
      scrollLeft: 0
    };
  }

  if (mode === "detailed") {
    return {
      filter: "all",
      search: "",
      selectedItemId: "",
      selectedClusterYear: "",
      selectedArchiveYear: "",
      visibleStartYear: 1959,
      visibleEndYear: 1990,
      scrollLeft: 0
    };
  }

  return {
    filter: "all",
    search: "",
    selectedItemId: "",
    selectedClusterYear: "",
    selectedArchiveYear: "",
    visibleStartYear: 1959,
    visibleEndYear: 2026,
    scrollLeft: 0
  };
}

function resetTimelineModeState(mode) {
  timelineStateByMode[mode] = getDefaultModeState(mode);

  if (searchInput) {
    searchInput.value = "";
  }

  if (yearInput) {
    yearInput.value = "";
  }

  closeAllClusterPopovers();

  if (typeof closeDetailDrawer === "function") {
    closeDetailDrawer();
  }
}

const timelineState = {
  mode: "curated"
};

function getModeState() {
  return timelineStateByMode[timelineState.mode];
}

const timelineView = document.querySelector(".js-timeline-view");
const modeContainer = document.querySelector(".js-timeline-modes");
const filterContainer = document.querySelector(".js-timeline-filters");
const searchInput = document.querySelector(".js-timeline-search");
const yearInput = document.querySelector(".js-timeline-year");
const yearButton = document.querySelector(".js-timeline-year-button");
const timelineStartButton = document.querySelector(".js-timeline-start");
const timelineExplorer = document.querySelector("#timeline-explorer");

const TIMELINE_MODES = [
  {
    id: "curated",
    label: "Curated",
    description: "45 selected milestones"
  },
  {
    id: "detailed",
    label: "Detailed",
    description: "100 selected records"
  },
  {
    id: "archive",
    label: "Archive List",
    description: "All dataset records"
  }
];

const TIMELINE_FILTERS = [
  {
    id: "all",
    label: "All",
    match: () => true
  },
  {
    id: "build",
    label: "Build the School",
    match: (item) => BUILD_SCHOOL_ROUTE_IDS.includes(item.id)
  },
  {
    id: "equipment",
    label: "Equipment & Infrastructure",
    match: (item, config) =>
      hasShortTag(config, "Equip") || hasTheme(item, "Equipment & Infrastructure")
  },
  {
    id: "teaching",
    label: "Teaching & Student Use",
    match: (item, config) =>
      hasShortTag(config, "Teach") || hasTheme(item, "Teaching & Student Use")
  },
  {
    id: "humanities",
    label: "Humanities Computing",
    match: (item, config) =>
      hasShortTag(config, "Hum") || hasTheme(item, "Humanities Computing")
  },
  {
    id: "research",
    label: "Research & Public Impact",
    match: (item, config) =>
      hasShortTag(config, "Research") || hasTheme(item, "Research & Public Impact")
  },
  {
    id: "people",
    label: "People",
    match: (item) =>
      hasTheme(item, "People") || hasItemType(item, "person")
  },
  {
    id: "local-global",
    label: "Local to Global",
    match: (item) => hasTheme(item, "Local to Global")
  }
];

/* ------------------------------
   Basic helpers
------------------------------ */

function getTimelineItem(itemId) {
  if (typeof getItem === "function") {
    return getItem(itemId);
  }

  if (typeof ITEM_BY_ID !== "undefined" && ITEM_BY_ID[itemId]) {
    return ITEM_BY_ID[itemId];
  }

  return null;
}

function hasTheme(item, theme) {
  return (item.themeTags || []).includes(theme);
}

function hasShortTag(config, tag) {
  return (config?.tags || []).includes(tag);
}

function hasItemType(item, keyword) {
  return String(item.itemType || "")
    .toLowerCase()
    .replaceAll("_", " ")
    .includes(keyword);
}

function getSortYear(item) {
  const sortDate = String(item.sortDate || item.date || "");
  const yearMatch = sortDate.match(/\d{4}/);

  if (!yearMatch) return null;

  return Number(yearMatch[0]);
}

function getTimelineDateValue(item) {
  const sortDate = String(item.sortDate || item.date || "");
  const match = sortDate.match(/(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?/);

  if (!match) return null;

  const year = Number(match[1]);
  let month = match[2] ? Number(match[2]) : 6;
  let day = match[3] ? Number(match[3]) : 15;

  if (!month || month < 1 || month > 12) month = 6;
  if (!day || day < 1 || day > 31) day = 15;

  return year + (month - 1) / 12 + (day - 1) / 365;
}

function canAppearOnTimeline(item) {
  return Boolean(getTimelineDateValue(item));
}

function getSortDate(item) {
  const year = getSortYear(item);

  if (!year) return "9999-12-31";

  return item.sortDate || `${year}-01-01`;
}

function getConfigForItem(itemId, mode = timelineState.mode) {
  const source =
    mode === "curated"
      ? CURATED_TIMELINE_ITEMS
      : mode === "detailed"
        ? DETAILED_TIMELINE_ITEMS
        : [];

  return source.find((config) => config.id === itemId) || null;
}

function getBaseConfigs(mode) {
  if (mode === "curated") return CURATED_TIMELINE_ITEMS;
  if (mode === "detailed") return DETAILED_TIMELINE_ITEMS;
  return [];
}

function getBaseEntries(mode) {
  if (mode === "archive") {
    return (typeof ITEMS !== "undefined" ? ITEMS : []).map((item) => ({
      item,
      config: null
    }));
  }

  return getBaseConfigs(mode)
    .map((config) => ({
      item: getTimelineItem(config.id),
      config
    }))
    .filter((entry) => Boolean(entry.item));
}

function matchesFilter(item, config, filterId) {
  const filter = TIMELINE_FILTERS.find((entry) => entry.id === filterId);
  if (!filter) return true;
  return filter.match(item, config);
}

function getSearchTitle(item, config) {
  return [
    config?.displayTitle,
    item.title
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function matchesSearch(item, config, query) {
  const cleanQuery = String(query || "").trim().toLowerCase();
  if (!cleanQuery) return true;
  return getSearchTitle(item, config).includes(cleanQuery);
}

function getVisibleEntries() {
  const state = getModeState();
  const baseEntries = getBaseEntries(timelineState.mode);

  return baseEntries
    .filter(({ item }) => {
      if (timelineState.mode === "archive") return true;
      return canAppearOnTimeline(item);
    })
    .filter(({ item, config }) => matchesFilter(item, config, state.filter))
    .filter(({ item, config }) => matchesSearch(item, config, state.search));
}

function getDisplayTitle(item, config) {
  return config?.displayTitle || item.title || item.id;
}

function getTimelineDisplayDate(item, config) {
  return config?.displayDate || item.displayDate || item.date || "";
}

function getTimelinePosition(item) {
  const value = getTimelineDateValue(item);

  if (!value) return 0;

  const range = TIMELINE_END_YEAR - TIMELINE_START_YEAR;
  const raw = ((value - TIMELINE_START_YEAR) / range) * 100;

  return Math.max(2, Math.min(98, raw));
}

function getYearFromEntry(entry) {
  return getSortYear(entry.item);
}

function sortEntriesByDate(entries) {
  return [...entries].sort((a, b) => {
    const dateCompare = String(getSortDate(a.item)).localeCompare(String(getSortDate(b.item)));

    if (dateCompare !== 0) return dateCompare;

    return getDisplayTitle(a.item, a.config).localeCompare(getDisplayTitle(b.item, b.config));
  });
}

function clearTimelineSelection(options = {}) {
  const state = getModeState();

  state.selectedItemId = "";
  updateSelectedNodeState();

  if (options.closeDrawer && typeof closeDetailDrawer === "function") {
    closeDetailDrawer();
  }
}

function openTimelineDrawer(itemId, config = null) {
  const item = getTimelineItem(itemId);
  const state = getModeState();

  if (!item || typeof openDetailDrawer !== "function") return;

  // Click the selected item again to return to the normal state.
  if (state.selectedItemId === itemId) {
    clearTimelineSelection({ closeDrawer: true });
    return;
  }

  state.selectedItemId = itemId;
  updateSelectedNodeState();

  openDetailDrawer(itemId, {
    displayDate: config?.displayDate || item.displayDate || item.date,
    displayTitle: config?.displayTitle || item.title,
    overrides: {}
  });
}

/* ------------------------------
   Controls
------------------------------ */

function renderTimelineModes() {
  if (!modeContainer) return;

  modeContainer.innerHTML = TIMELINE_MODES.map((mode) => {
    const activeClass = timelineState.mode === mode.id ? " active" : "";

    return `
      <button class="timeline-mode-button${activeClass}" type="button" data-mode="${escapeHTML(mode.id)}">
        <span>${escapeHTML(mode.label)}</span>
        <small>${escapeHTML(mode.description)}</small>
      </button>
    `;
  }).join("");

  modeContainer.querySelectorAll(".timeline-mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    const nextMode = button.dataset.mode;

    if (!nextMode || nextMode === timelineState.mode) {
      return;
    }

    timelineState.mode = nextMode;

    // Switching mode should feel like entering a fresh view.
    resetTimelineModeState(nextMode);

    syncInputsWithModeState();
    renderTimeline();

    const explorer = document.querySelector("#timeline-explorer");
    if (explorer) {
      explorer.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
}

function renderTimelineFilters() {
  if (!filterContainer) return;

  const state = getModeState();

  filterContainer.innerHTML = TIMELINE_FILTERS.map((filter) => {
    const activeClass = state.filter === filter.id ? " active" : "";

    return `
      <button class="timeline-filter-button${activeClass}" type="button" data-filter="${escapeHTML(filter.id)}">
        ${escapeHTML(filter.label)}
      </button>
    `;
  }).join("");

  filterContainer.querySelectorAll(".timeline-filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      const state = getModeState();

      state.filter = button.dataset.filter;
      state.selectedItemId = "";
      state.selectedClusterYear = "";
      state.selectedArchiveYear = "";

      renderTimeline();
    });
  });
}

function syncInputsWithModeState() {
  const state = getModeState();

  if (searchInput) {
    searchInput.value = state.search;
  }
}

function initialiseTimelineInputs() {
  if (timelineStartButton && timelineExplorer) {
    timelineStartButton.addEventListener("click", () => {
      timelineExplorer.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const state = getModeState();

      state.search = searchInput.value;
      state.selectedItemId = "";
      state.selectedClusterYear = "";
      state.selectedArchiveYear = "";

      renderTimeline();
    });
  }

  if (yearButton && yearInput) {
    yearButton.addEventListener("click", jumpToYear);

    yearInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") jumpToYear();
    });
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".timeline-cluster")) {
      const state = getModeState();
      state.selectedClusterYear = "";
      closeAllClusterPopovers();
    }
  });
}

/* ------------------------------
   Mini overview
------------------------------ */

function renderMiniOverview(entries) {
  const state = getModeState();
  const timelineEntries = entries.filter(({ item }) => canAppearOnTimeline(item));

  const points = timelineEntries.map(({ item }) => {
    const position = getTimelinePosition(item);

    return `<span class="timeline-mini-dot" style="left: ${position}%;"></span>`;
  }).join("");

  const viewportStart = ((state.visibleStartYear - TIMELINE_START_YEAR) / (TIMELINE_END_YEAR - TIMELINE_START_YEAR)) * 100;
  const viewportEnd = ((state.visibleEndYear - TIMELINE_START_YEAR) / (TIMELINE_END_YEAR - TIMELINE_START_YEAR)) * 100;
  const viewportWidth = Math.max(4, viewportEnd - viewportStart);

  return `
    <div class="timeline-sticky-mini">
      <div class="timeline-mini-overview">
        <div class="timeline-mini-labels">
          <span>${TIMELINE_START_YEAR}</span>
          <span>${TIMELINE_END_YEAR}</span>
        </div>

        <div class="timeline-mini-track">
          ${points}
          <span class="timeline-mini-viewport" style="left: ${viewportStart}%; width: ${viewportWidth}%;"></span>
        </div>
      </div>
    </div>
  `;
}

/* ------------------------------
   Visual timeline
------------------------------ */

function renderVisualTimeline(entries) {
  const sortedEntries = sortEntriesByDate(
    entries.filter(({ item }) => canAppearOnTimeline(item))
  );

  if (timelineState.mode === "curated") {
    renderCuratedTimeline(sortedEntries);
    return;
  }

  renderDetailedTimeline(sortedEntries);
}

function assignCuratedLanes(entries) {
  const lanes = [[], [], [], []];
  const threshold = 2.4;

  return entries.map((entry, index) => {
    const position = getTimelinePosition(entry.item);

    let bestLane = 0;
    let bestDistance = -1;

    lanes.forEach((lane, laneIndex) => {
      const lastPosition = lane.length ? lane[lane.length - 1] : -999;
      const distance = Math.abs(position - lastPosition);

      if (distance > bestDistance) {
        bestDistance = distance;
        bestLane = laneIndex;
      }
    });

    if (bestDistance < threshold) {
      bestLane = index % lanes.length;
    }

    lanes[bestLane].push(position);

    return {
      ...entry,
      lane: bestLane
    };
  });
}

function renderCuratedTimeline(entries) {
  const entriesWithLanes = assignCuratedLanes(entries);

  const nodesHTML = entriesWithLanes.map((entry) => {
    const { item, config, lane } = entry;
    const position = getTimelinePosition(item);
    const title = getDisplayTitle(item, config);
    const date = getTimelineDisplayDate(item, config);
    const edgeClass = position <= 4 ? " is-edge-start" : position >= 96 ? " is-edge-end" : "";

    return `
      <button
        class="timeline-node timeline-node-curated${edgeClass}"
        type="button"
        style="left: ${position}%;"
        data-item-id="${escapeHTML(item.id)}"
        data-title="${escapeHTML(title)}"
        data-date="${escapeHTML(date)}"
        data-lane="${lane}"
        aria-label="${escapeHTML(date + " — " + title)}"
      >
        <span class="timeline-node-dot"></span>

        <span class="timeline-node-label">
          <strong>${escapeHTML(date)}</strong>
          <em>${escapeHTML(title)}</em>
          <small>Click the node for details</small>
        </span>
      </button>
    `;
  }).join("");

  timelineView.innerHTML = `
    <div class="timeline-visual-mode timeline-visual-mode-curated">
      ${renderMiniOverview(entries)}

      <div class="timeline-main-scroll js-timeline-scroll">
        <div class="timeline-main-track">
          <div class="timeline-year-line"></div>
          ${renderYearLabels()}
          ${nodesHTML}
        </div>
      </div>
    </div>
  `;

  bindCuratedTimelineInteractions();
}

function renderDetailedTimeline(entries) {
  const state = getModeState();
  const groups = groupEntriesByYear(entries);
  const clusterLayouts = assignDetailedClusterLayout(groups);

  const clustersHTML = clusterLayouts.map((layout) => {
    const { year, groupEntries, position, count, size } = layout;
    const isOpen = String(state.selectedClusterYear) === String(year);

    const clusterItemsHTML = groupEntries.map(({ item, config }) => {
      const title = getDisplayTitle(item, config);
      const date = getTimelineDisplayDate(item, config);

      return `
        <button
          class="timeline-cluster-item"
          type="button"
          data-item-id="${escapeHTML(item.id)}"
        >
          <span>${escapeHTML(date)}</span>
          <strong>${escapeHTML(title)}</strong>
        </button>
      `;
    }).join("");

    return `
      <div
        class="timeline-cluster${isOpen ? " is-open" : ""}"
        style="left: ${position}%; --cluster-size: ${size}px;"
        data-year="${escapeHTML(year)}"
      >
        <button class="timeline-cluster-dot" type="button" aria-label="${escapeHTML(year + " records")}">
          <span>${escapeHTML(year)}</span>
          <strong>${count}</strong>
          <em>Click to view records</em>
        </button>

        <div class="timeline-cluster-popover">
          <h3>${escapeHTML(year)}</h3>
          <p>${count === 1 ? "1 record" : `${count} records`}</p>
          <div class="timeline-cluster-list">
            ${clusterItemsHTML}
          </div>
        </div>
      </div>
    `;
  }).join("");

  timelineView.innerHTML = `
    <div class="timeline-visual-mode timeline-visual-mode-detailed">
      ${renderMiniOverview(entries)}

      <div class="timeline-main-scroll js-timeline-scroll">
        <div class="timeline-main-track">
          <div class="timeline-year-line"></div>
          ${renderYearLabels()}
          ${clustersHTML}
        </div>
      </div>
    </div>
  `;

  bindDetailedTimelineInteractions();
}

function groupEntriesByYear(entries) {
  const groups = new Map();

  entries.forEach((entry) => {
    const year = getYearFromEntry(entry);
    if (!year) return;

    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(entry);
  });

  return [...groups.entries()]
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([year, groupEntries]) => [year, sortEntriesByDate(groupEntries)]);
}

function assignDetailedClusterLayout(groups) {
  const maxCount = Math.max(...groups.map(([, groupEntries]) => groupEntries.length), 1);

  const layouts = groups.map(([year, groupEntries]) => {
    const firstEntry = groupEntries[0];
    const basePosition = getTimelinePosition(firstEntry.item);
    const count = groupEntries.length;

    // Keep circles readable, but do not let large years become too large.
    const size = 30 + Math.round((count / maxCount) * 28);

    return {
      year,
      groupEntries,
      basePosition,
      position: basePosition,
      count,
      size
    };
  });

  // Minimum distance between cluster centres, in timeline percentage.
  // This prevents neighbouring circles from covering each other.
  const minGap = 1.65;

  for (let index = 1; index < layouts.length; index += 1) {
    const previous = layouts[index - 1];
    const current = layouts[index];

    if (current.position - previous.position < minGap) {
      current.position = previous.position + minGap;
    }
  }

  // If the adjustment pushes the last cluster too far right, pull the group back.
  const overflow = layouts.length ? layouts[layouts.length - 1].position - 98 : 0;

  if (overflow > 0) {
    for (let index = layouts.length - 1; index >= 0; index -= 1) {
      layouts[index].position = Math.max(2, layouts[index].position - overflow);
    }

    for (let index = layouts.length - 2; index >= 0; index -= 1) {
      const next = layouts[index + 1];
      const current = layouts[index];

      if (next.position - current.position < minGap) {
        current.position = next.position - minGap;
      }
    }
  }

  return layouts;
}

function renderYearLabels() {
  const years = [1959, 1965, 1971, 1980, 1990, 2000, 2010, 2020, 2026];

  return years.map((year) => {
    const position = ((year - TIMELINE_START_YEAR) / (TIMELINE_END_YEAR - TIMELINE_START_YEAR)) * 100;

    return `
      <span class="timeline-year-label" style="left: ${position}%;">
        ${year}
      </span>
    `;
  }).join("");
}

 function bindCuratedTimelineInteractions() {
  const state = getModeState();
  const nodes = timelineView.querySelectorAll(".timeline-node-curated");
  const scrollArea = timelineView.querySelector(".js-timeline-scroll");

  nodes.forEach((node) => {
    node.addEventListener("click", (event) => {
      event.stopPropagation();

      const config = getConfigForItem(node.dataset.itemId);
      openTimelineDrawer(node.dataset.itemId, config);
    });
  });

  if (scrollArea) {
    scrollArea.scrollLeft = state.scrollLeft || 0;

    scrollArea.addEventListener("scroll", () => {
      state.scrollLeft = scrollArea.scrollLeft;
      updateViewportFromScroll(scrollArea);
    });

    // Click empty timeline space to return to the normal state.
    scrollArea.addEventListener("click", (event) => {
      if (!event.target.closest(".timeline-node-curated")) {
        clearTimelineSelection({ closeDrawer: true });
      }
    });
  }

  updateSelectedNodeState();
}

function bindDetailedTimelineInteractions() {
  const state = getModeState();
  const clusters = timelineView.querySelectorAll(".timeline-cluster");
  const clusterItems = timelineView.querySelectorAll(".timeline-cluster-item");
  const scrollArea = timelineView.querySelector(".js-timeline-scroll");

  clusters.forEach((cluster) => {
    const dot = cluster.querySelector(".timeline-cluster-dot");

    dot.addEventListener("click", (event) => {
      event.stopPropagation();

      state.selectedClusterYear =
        state.selectedClusterYear === cluster.dataset.year
          ? ""
          : cluster.dataset.year;

      updateClusterOpenState();
    });
  });

  clusterItems.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const config = getConfigForItem(button.dataset.itemId, "detailed");
      openTimelineDrawer(button.dataset.itemId, config);
    });
  });

  if (scrollArea) {
    scrollArea.scrollLeft = state.scrollLeft || 0;

    scrollArea.addEventListener("scroll", () => {
      state.scrollLeft = scrollArea.scrollLeft;
      updateViewportFromScroll(scrollArea);
    });
  }

  updateClusterOpenState();
  updateSelectedNodeState();
}

function updateClusterOpenState() {
  const state = getModeState();
  const clusters = timelineView?.querySelectorAll(".timeline-cluster") || [];

  clusters.forEach((cluster) => {
    cluster.classList.toggle(
      "is-open",
      cluster.dataset.year === state.selectedClusterYear
    );
  });
}

function closeAllClusterPopovers() {
  const clusters = timelineView?.querySelectorAll(".timeline-cluster") || [];
  clusters.forEach((cluster) => cluster.classList.remove("is-open"));
}

function updateSelectedNodeState() {
  const state = getModeState();

  /*
    Curated:
    - selected node becomes bright
    - other nodes become dimmed

    Detailed:
    - cluster record list stays readable
    - selected record may get a light selected style
    - no dimming for other records
  */

  const timelineNodes = timelineView?.querySelectorAll(".timeline-node") || [];

  timelineNodes.forEach((node) => {
    const isSelected = node.dataset.itemId === state.selectedItemId;
    const shouldDim = Boolean(state.selectedItemId) && !isSelected;

    node.classList.toggle("is-selected", isSelected);
    node.classList.toggle("is-dimmed", shouldDim);
  });

  const clusterItems = timelineView?.querySelectorAll(".timeline-cluster-item") || [];

  clusterItems.forEach((item) => {
    const isSelected = item.dataset.itemId === state.selectedItemId;

    item.classList.toggle("is-selected", isSelected);
    item.classList.remove("is-dimmed");
  });
}

function resetTimelineState() {
  timelineState.mode = "curated";

  timelineStateByMode.curated = {
    filter: "all",
    search: "",
    selectedItemId: "",
    selectedClusterYear: "",
    selectedArchiveYear: "",
    visibleStartYear: 1959,
    visibleEndYear: 1980,
    scrollLeft: 0
  };

  timelineStateByMode.detailed = {
    filter: "all",
    search: "",
    selectedItemId: "",
    selectedClusterYear: "",
    selectedArchiveYear: "",
    visibleStartYear: 1959,
    visibleEndYear: 1990,
    scrollLeft: 0
  };

  timelineStateByMode.archive = {
    filter: "all",
    search: "",
    selectedItemId: "",
    selectedClusterYear: "",
    selectedArchiveYear: "",
    visibleStartYear: 1959,
    visibleEndYear: 2026,
    scrollLeft: 0
  };

  if (searchInput) {
    searchInput.value = "";
  }

  if (yearInput) {
    yearInput.value = "";
  }

  closeAllClusterPopovers();

  if (timelineView) {
    renderTimeline();
  }
}

window.resetTimelineState = resetTimelineState;

function updateViewportFromScroll(scrollArea) {
  const state = getModeState();
  const scrollableWidth = Math.max(1, scrollArea.scrollWidth - scrollArea.clientWidth);
  const scrollRatio = scrollArea.scrollLeft / scrollableWidth;
  const visibleSpan = timelineState.mode === "curated" ? 21 : 31;
  const startYear = TIMELINE_START_YEAR + scrollRatio * ((TIMELINE_END_YEAR - TIMELINE_START_YEAR) - visibleSpan);

  state.visibleStartYear = Math.round(startYear);
  state.visibleEndYear = Math.round(startYear + visibleSpan);

  const mini = timelineView.querySelector(".timeline-sticky-mini");
  if (!mini) return;

  const entries = getVisibleEntries();
  const newMiniWrapper = document.createElement("div");
  newMiniWrapper.innerHTML = renderMiniOverview(entries);

  mini.replaceWith(newMiniWrapper.firstElementChild);
}

/* ------------------------------
   Archive List
------------------------------ */

function renderArchiveList(entries) {
  const datedEntries = [];
  const undatedEntries = [];

  entries.forEach((entry) => {
    if (getSortYear(entry.item)) {
      datedEntries.push(entry);
    } else {
      undatedEntries.push(entry);
    }
  });

  const sortedDatedEntries = sortEntriesByDate(datedEntries);
  const sortedUndatedEntries = [...undatedEntries].sort((a, b) =>
    getDisplayTitle(a.item, a.config).localeCompare(getDisplayTitle(b.item, b.config))
  );

  timelineView.innerHTML = `
    <div class="timeline-archive-mode">
      ${renderArchiveDensityByYear(sortedDatedEntries)}

      <div class="archive-list-section">
        <h2>Dated records</h2>
        ${renderArchiveYearGroups(sortedDatedEntries)}
      </div>

      ${
        sortedUndatedEntries.length
          ? `
            <div class="archive-list-section archive-list-undated">
              <h2>Undated records</h2>
              ${renderUndatedArchiveItems(sortedUndatedEntries)}
            </div>
          `
          : ""
      }
    </div>
  `;

  bindArchiveListInteractions();
}

function renderArchiveDensityByYear(entries) {
  const state = getModeState();
  const countsByYear = new Map();

  for (let year = TIMELINE_START_YEAR; year <= TIMELINE_END_YEAR; year += 1) {
    countsByYear.set(year, 0);
  }

  entries.forEach(({ item }) => {
    const year = getSortYear(item);
    if (!year) return;
    countsByYear.set(year, (countsByYear.get(year) || 0) + 1);
  });

  const maxCount = Math.max(...countsByYear.values(), 1);
  const selectedYear = state.selectedArchiveYear;
  const selectedCount = selectedYear ? countsByYear.get(Number(selectedYear)) || 0 : null;

  const barsHTML = [...countsByYear.entries()].map(([year, count]) => {
    const height = count === 0 ? 7 : 8 + (count / maxCount) * 46;
    const activeClass = count > 0 ? " has-records" : "";
    const selectedClass = String(year) === String(selectedYear) ? " is-selected" : "";
    const showLabel = year % 5 === 0 || year === TIMELINE_END_YEAR;

    return `
      <button
        class="archive-year-density${activeClass}${selectedClass}"
        type="button"
        data-year="${year}"
        style="height: ${height}px;"
        title="${year}: ${count} records"
      >
        <span>${showLabel ? year : ""}</span>
      </button>
    `;
  }).join("");

  const statusText = selectedYear
    ? `${selectedYear} · ${selectedCount === 1 ? "1 record" : `${selectedCount} records`}`
    : `${entries.length} dated records in current view`;

  return `
    <div class="archive-density archive-density-sticky">
      <div class="archive-density-label">
        <span>${TIMELINE_START_YEAR}–${TIMELINE_END_YEAR}</span>
        <span class="js-archive-density-status">${escapeHTML(statusText)}</span>
      </div>

      <div class="archive-density-year-bars">
        ${barsHTML}
      </div>
    </div>
  `;
}

function renderArchiveYearGroups(entries) {
  const groups = groupEntriesByYear(entries);

  if (!groups.length) {
    return `<p class="timeline-empty">No dated records in this view.</p>`;
  }

  return groups.map(([year, groupEntries]) => {
    return `
      <section class="archive-year-group" data-year="${escapeHTML(year)}">
        <h3>${escapeHTML(year)}</h3>
        ${renderDatedArchiveItems(groupEntries)}
      </section>
    `;
  }).join("");
}

function renderDatedArchiveItems(entries) {
  return `
    <div class="archive-record-list">
      ${entries.map(({ item, config }) => {
        const title = getDisplayTitle(item, config);
        const date = getTimelineDisplayDate(item, config);

        return `
          <button class="archive-record-item" type="button" data-item-id="${escapeHTML(item.id)}">
            <span>${escapeHTML(date)}</span>
            <strong>${escapeHTML(title)}</strong>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderUndatedArchiveItems(entries) {
  return `
    <div class="archive-record-list archive-record-list-undated">
      ${entries.map(({ item, config }) => {
        const title = getDisplayTitle(item, config);

        return `
          <button class="archive-record-item archive-record-item-undated" type="button" data-item-id="${escapeHTML(item.id)}">
            <strong>${escapeHTML(title)}</strong>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function bindArchiveListInteractions() {
  const state = getModeState();
  const archiveItems = timelineView.querySelectorAll(".archive-record-item");
  const densityButtons = timelineView.querySelectorAll(".archive-year-density");

  archiveItems.forEach((itemButton) => {
    itemButton.addEventListener("click", () => {
      openTimelineDrawer(itemButton.dataset.itemId, null);
    });
  });

  densityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const year = button.dataset.year;

      state.selectedArchiveYear = year;
      updateArchiveDensitySelection(year);

      const targetGroup = timelineView.querySelector(`.archive-year-group[data-year="${year}"]`);

      if (targetGroup) {
        targetGroup.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

function updateArchiveDensitySelection(year) {
  const densityButtons = timelineView.querySelectorAll(".archive-year-density");
  const status = timelineView.querySelector(".js-archive-density-status");

  let count = 0;

  densityButtons.forEach((button) => {
    const selected = button.dataset.year === String(year);
    button.classList.toggle("is-selected", selected);

    if (selected) {
      const title = button.getAttribute("title") || "";
      const match = title.match(/:\s*(\d+)/);
      count = match ? Number(match[1]) : 0;
    }
  });

  if (status) {
    status.textContent = `${year} · ${count === 1 ? "1 record" : `${count} records`}`;
  }
}

/* ------------------------------
   Jump to year
------------------------------ */

function jumpToYear() {
  const state = getModeState();
  const year = Number(String(yearInput?.value || "").match(/\d{4}/)?.[0]);

  if (!year || year < TIMELINE_START_YEAR || year > TIMELINE_END_YEAR) return;

  if (timelineState.mode === "archive") {
    state.selectedArchiveYear = String(year);
    updateArchiveDensitySelection(year);

    const targetGroup = timelineView.querySelector(`.archive-year-group[data-year="${year}"]`);

    if (targetGroup) {
      targetGroup.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    return;
  }

  const scrollArea = timelineView.querySelector(".js-timeline-scroll");
  if (!scrollArea) return;

  const ratio = (year - TIMELINE_START_YEAR) / (TIMELINE_END_YEAR - TIMELINE_START_YEAR);
  const targetScroll = ratio * (scrollArea.scrollWidth - scrollArea.clientWidth);

  scrollArea.scrollTo({
    left: targetScroll,
    behavior: "smooth"
  });
}

/* ------------------------------
   Main render
------------------------------ */

function renderTimeline() {
  renderTimelineModes();
  renderTimelineFilters();
  syncInputsWithModeState();

  if (!timelineView) return;

  const entries = getVisibleEntries();

  if (timelineState.mode === "archive") {
    renderArchiveList(entries);
    return;
  }

  renderVisualTimeline(entries);
}

 function getPreferredTimelineModeForItem(itemId) {
  const inCurated = CURATED_TIMELINE_ITEMS.some((config) => config.id === itemId);

  if (inCurated) {
    return "curated";
  }

  const inDetailed = DETAILED_TIMELINE_ITEMS.some((config) => config.id === itemId);

  if (inDetailed) {
    return "detailed";
  }

  return "archive";
}

function showTimelineSection() {
  if (typeof showSection === "function") {
    showSection("timeline");
    return;
  }

  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.toggle("active-section", section.id === "timeline");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.target === "timeline");
  });
}

function scrollHorizontalTimelineToElement(targetElement) {
  const scrollArea = timelineView?.querySelector(".js-timeline-scroll");

  if (!scrollArea || !targetElement) {
    return;
  }

  const targetLeft = targetElement.offsetLeft + targetElement.offsetWidth / 2;
  const targetScrollLeft = Math.max(0, targetLeft - scrollArea.clientWidth * 0.38);

  scrollArea.scrollTo({
    left: targetScrollLeft,
    behavior: "smooth"
  });

  const state = getModeState();
  state.scrollLeft = targetScrollLeft;

  window.setTimeout(() => {
    updateViewportFromScroll(scrollArea);
  }, 350);
}

function highlightArchiveRecord(itemId) {
  const archiveItems = timelineView?.querySelectorAll(".archive-record-item") || [];

  archiveItems.forEach((itemButton) => {
    itemButton.classList.toggle(
      "is-selected",
      itemButton.dataset.itemId === itemId
    );
  });
}

function scrollArchiveToItem(itemId) {
  const targetRecord = timelineView?.querySelector(
    `.archive-record-item[data-item-id="${CSS.escape(itemId)}"]`
  );

  if (!targetRecord) {
    return;
  }

  highlightArchiveRecord(itemId);

  targetRecord.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function openTimelineAtCuratedItem(itemId) {
  const state = timelineStateByMode.curated;

  timelineState.mode = "curated";
  state.selectedItemId = itemId;
  state.selectedClusterYear = "";
  state.selectedArchiveYear = "";

  renderTimeline();

  window.requestAnimationFrame(() => {
    const targetNode = timelineView?.querySelector(
      `.timeline-node-curated[data-item-id="${CSS.escape(itemId)}"]`
    );

    scrollHorizontalTimelineToElement(targetNode);
    updateSelectedNodeState();
  });
}

function openTimelineAtDetailedItem(itemId) {
  const item = getTimelineItem(itemId);
  const year = item ? getSortYear(item) : null;
  const state = timelineStateByMode.detailed;

  timelineState.mode = "detailed";
  state.selectedItemId = itemId;
  state.selectedArchiveYear = "";
  state.selectedClusterYear = year ? String(year) : "";

  renderTimeline();

  window.requestAnimationFrame(() => {
    const targetCluster = year
      ? timelineView?.querySelector(`.timeline-cluster[data-year="${year}"]`)
      : null;

    scrollHorizontalTimelineToElement(targetCluster);
    updateClusterOpenState();
    updateSelectedNodeState();
  });
}

function openTimelineAtArchiveItem(itemId) {
  const item = getTimelineItem(itemId);
  const year = item ? getSortYear(item) : null;
  const state = timelineStateByMode.archive;

  timelineState.mode = "archive";
  state.selectedItemId = itemId;
  state.selectedClusterYear = "";
  state.selectedArchiveYear = year ? String(year) : "";

  renderTimeline();

  window.requestAnimationFrame(() => {
    if (year) {
      updateArchiveDensitySelection(year);
    }

    scrollArchiveToItem(itemId);
  });
}

function scrollToTimelineExplorer() {
  const explorer = document.querySelector("#timeline-explorer");
  const header = document.querySelector(".site-header");

  if (!explorer) return;

  const headerHeight = header ? header.offsetHeight : 0;
  const targetTop =
    explorer.getBoundingClientRect().top +
    window.scrollY -
    headerHeight -
    12;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth"
  });
}

window.openTimelineAtItem = function openTimelineAtItem(itemId) {
  if (!itemId) return;

  const preferredMode = getPreferredTimelineModeForItem(itemId);

  if (typeof closeDetailDrawer === "function") {
    closeDetailDrawer();
  }

  showTimelineSection();

  if (preferredMode === "curated") {
    timelineState.mode = "curated";
    timelineStateByMode.curated.selectedItemId = itemId;
    timelineStateByMode.curated.selectedClusterYear = "";
    timelineStateByMode.curated.selectedArchiveYear = "";
  } else if (preferredMode === "detailed") {
    const item = getTimelineItem(itemId);
    const year = item ? getSortYear(item) : null;

    timelineState.mode = "detailed";
    timelineStateByMode.detailed.selectedItemId = itemId;
    timelineStateByMode.detailed.selectedArchiveYear = "";
    timelineStateByMode.detailed.selectedClusterYear = year ? String(year) : "";
  } else {
    const item = getTimelineItem(itemId);
    const year = item ? getSortYear(item) : null;

    timelineState.mode = "archive";
    timelineStateByMode.archive.selectedItemId = itemId;
    timelineStateByMode.archive.selectedClusterYear = "";
    timelineStateByMode.archive.selectedArchiveYear = year ? String(year) : "";
  }

  
  renderTimeline();

 
  window.setTimeout(() => {
    scrollToTimelineExplorer();

    window.setTimeout(() => {
      if (preferredMode === "curated") {
        const targetNode = timelineView?.querySelector(
          `.timeline-node-curated[data-item-id="${CSS.escape(itemId)}"]`
        );

        scrollHorizontalTimelineToElement(targetNode);
        updateSelectedNodeState();
        return;
      }

      if (preferredMode === "detailed") {
        const item = getTimelineItem(itemId);
        const year = item ? getSortYear(item) : null;
        const targetCluster = year
          ? timelineView?.querySelector(`.timeline-cluster[data-year="${year}"]`)
          : null;

        scrollHorizontalTimelineToElement(targetCluster);
        updateClusterOpenState();
        updateSelectedNodeState();
        return;
      }

      const item = getTimelineItem(itemId);
      const year = item ? getSortYear(item) : null;

      if (year) {
        updateArchiveDensitySelection(year);
      }

      scrollArchiveToItem(itemId);
    }, 260);
  }, 80);
};

function initialiseTimeline() {
  renderTimelineModes();
  renderTimelineFilters();
  syncInputsWithModeState();
  initialiseTimelineInputs();
  renderTimeline();
}

initialiseTimeline();