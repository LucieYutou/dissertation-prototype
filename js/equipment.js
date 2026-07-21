const equipmentState = {
  query: "",
  category: "All"
};

const EQUIPMENT_CATEGORIES = [
  "Computers & processors",
  "Terminals & access",
  "Printing & graphics",
  "Networks & communication",
  "Software & systems"
];

function getEquipmentRecords() {
  const source =
    typeof ITEMS !== "undefined" && Array.isArray(ITEMS)
      ? ITEMS
      : [];

  return source
    .filter(isEquipmentGalleryItem)
    .map(normaliseEquipmentRecord)
    .filter((record) => record.id && record.title)
    .sort((a, b) => a.title.localeCompare(b.title));
}

function getItemTypeParts(item) {
  const typeText = String(item?.itemType || "")
    .toLowerCase()
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/[|,/]+/g, ";")
    .replace(/\s+/g, " ")
    .trim();

  return typeText
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean);
}

function isEquipmentGalleryItem(item) {
  if (!item) return false;

  const typeParts = getItemTypeParts(item);
  const typeText = typeParts.join(" ");

  const title = String(item.title || "").toLowerCase();
  const summary = String(item.summary || "").toLowerCase();
  const why = String(item.whyItMatters || item.why_it_matters || "").toLowerCase();

  const themeText = Array.isArray(item.themeTags)
    ? item.themeTags.join(" ").toLowerCase()
    : String(item.themeTags || "").toLowerCase();

  const text = `${typeText} ${themeText} ${title} ${summary} ${why}`;

  const hasExcludedType = typeParts.some((part) => {
    return (
      part.includes("event") ||
      part.includes("person") ||
      part.includes("people") ||
      part.includes("profile") ||
      part.includes("building") ||
      part.includes("space") ||
      part.includes("room") ||
      part.includes("classroom") ||
      part.includes("lab") ||
      part.includes("laboratory") ||
      part.includes("place") ||
      part.includes("source") ||
      part.includes("publication")
    );
  });

  if (hasExcludedType) return false;

  const eventLikeTitle =
    title.includes("anniversary") ||
    title.includes("official opening") ||
    title.includes("opening of") ||
    title.includes("opened") ||
    title.includes("begins with") ||
    title.includes("lecture") ||
    title.includes("series") ||
    title.includes("workshop") ||
    title.includes("conference") ||
    title.includes("seminar") ||
    title.includes("award") ||
    title.includes("prize") ||
    title.includes("building") ||
    title.includes("room") ||
    title.includes("classroom") ||
    title.includes("laboratory") ||
    title.includes("lab ") ||
    title.includes(" lab") ||
    title.includes("programme") ||
    title.includes("degree") ||
    title.includes("course");

  if (eventLikeTitle) return false;

  const hasEquipmentType = typeParts.some((part) => {
    return (
      part === "equipment" ||
      part === "software system" ||
      part === "software" ||
      part === "system" ||
      part === "technical system" ||
      part === "network" ||
      part === "infrastructure"
    );
  });

  const hasEquipmentTheme =
    themeText.includes("equipment") ||
    themeText.includes("infrastructure") ||
    themeText.includes("technology");

  const hasEquipmentKeyword =
    /\b(computer|processor|mainframe|vax|ibm|bbc|macintosh|pc|pcs|terminal|terminals|printer|laserwriter|imagewriter|graphics|ghost|uniras|network|janet|email|e-mail|mail|web|website|mysql|confluence|webct|saulcat|clustan|database|server|system|software|font|fonts|plotter|scanner|storage|disk|tape)\b/i.test(text);

  return hasEquipmentType || hasEquipmentTheme || hasEquipmentKeyword;
}

function normaliseEquipmentRecord(raw) {
  const title =
    raw.title ||
    raw.displayTitle ||
    raw.name ||
    "";

  const id =
    raw.id ||
    raw.item_id ||
    raw.itemId ||
    raw.record_id ||
    raw.recordId ||
    title;

  const categories = classifyEquipmentRecord(raw);

  return {
    raw,
    id: String(id),
    title: String(title).trim(),
    image: getEquipmentImage(raw),
    categories,
    searchText: String(title || "").toLowerCase()
  };
}

function classifyEquipmentRecord(item) {
  const categories = new Set();

  const type = String(item.itemType || "")
    .toLowerCase()
    .replaceAll("_", " ")
    .replaceAll("-", " ");

  const themeText = Array.isArray(item.themeTags)
    ? item.themeTags.join(" ").toLowerCase()
    : String(item.themeTags || "").toLowerCase();

  const title = String(item.title || "").toLowerCase();
  const summary = String(item.summary || "").toLowerCase();
  const why = String(item.whyItMatters || item.why_it_matters || "").toLowerCase();

  const text = `${type} ${themeText} ${title} ${summary} ${why}`;

  if (
    /\b(ibm|vax|bbc|microcomputer|micro computer|macintosh|thinkcentre|pc|pcs|computer|computers|processor|processors|mainframe|workstation|workstations|hardware)\b/i.test(text)
  ) {
    categories.add("Computers & processors");
  }

  if (
    /\b(terminal|terminals|access|cluster|public pc|public pcs|student use|workstation|workstations|library cluster|pc classroom|login|console)\b/i.test(text)
  ) {
    categories.add("Terminals & access");
  }

  if (
    /\b(printer|printers|printing|laserwriter|imagewriter|line-printer|line printer|graphics|ghost|uniras|font|fonts|typeface|plotter|text display|characters|greek|chinese)\b/i.test(text)
  ) {
    categories.add("Printing & graphics");
  }

  if (
    /\b(network|networks|janet|ethernet|internet|web|website|websites|mail|email|e-mail|name facility|communication|server|servers|confluence|wiki|blogging)\b/i.test(text)
  ) {
    categories.add("Networks & communication");
  }

  if (
    type.includes("software") ||
    type.includes("system") ||
    /\b(software|system|systems|clustan|webct|saulcat|mysql|database|databases|helpdesk|archive system|application|service|services|platform)\b/i.test(text)
  ) {
    categories.add("Software & systems");
  }

  if (!categories.size) {
    categories.add("Software & systems");
  }

  return [...categories];
}

function getEquipmentImage(item) {
  if (!item) return "";

  const directImage =
    item.image ||
    item.imageUrl ||
    item.photo ||
    item.photoUrl ||
    item.mediaUrl ||
    "";

  if (isUsableEquipmentImageUrl(directImage)) {
    return directImage;
  }

  const mediaIds = item.media || item.mediaIds || [];

  if (!mediaIds.length) return "";

  for (const mediaId of mediaIds) {
    const media =
      typeof getMedia === "function"
        ? getMedia(mediaId)
        : null;

    if (!media) continue;

    const url =
      typeof getMediaUrl === "function"
        ? getMediaUrl(media)
        : media.url || media.src || media.imageUrl || "";

    if (isUsableEquipmentImageUrl(url)) {
      return url;
    }
  }

  return "";
}

function isUsableEquipmentImageUrl(url) {
  if (!url) return false;

  const text = String(url).trim();

  if (!text) return false;

  if (/\.pdf(\?.*)?$/i.test(text)) return false;
  if (/docs\.google\.com/i.test(text)) return false;
  if (/drive\.google\.com/i.test(text)) return false;

  return /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(text);
}

function renderEquipmentGallery(records) {
  const grid = document.querySelector(".js-equipment-grid");
  const count = document.querySelector(".js-equipment-count");

  if (!grid) return;

  grid.innerHTML = "";

  if (count) {
    count.textContent = `${records.length} ${records.length === 1 ? "item" : "items"} shown`;
  }

  if (!records.length) {
    const empty = document.createElement("div");
    empty.className = "equipment-empty";
    empty.textContent = "No matching equipment records.";
    grid.appendChild(empty);
    return;
  }

  records.forEach((record) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "equipment-card";
    card.setAttribute("aria-label", `Open ${record.title}`);
    card.dataset.itemId = record.id;

    const visual = document.createElement("div");
    visual.className = "equipment-card-visual";

    if (record.image) {
      const img = document.createElement("img");
      img.src = record.image;
      img.alt = record.title;
      img.loading = "lazy";

      img.addEventListener("error", () => {
        replaceEquipmentImageWithPlaceholder(visual, record.title);
      });

      visual.appendChild(img);

      const overlay = document.createElement("div");
      overlay.className = "equipment-card-title-overlay";
      overlay.textContent = record.title;
      visual.appendChild(overlay);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "equipment-card-placeholder";
      placeholder.textContent = record.title;
      visual.appendChild(placeholder);
    }

    card.appendChild(visual);

    card.addEventListener("click", () => {
      openEquipmentDrawer(record);
    });

    grid.appendChild(card);
  });
}

function replaceEquipmentImageWithPlaceholder(visual, title) {
  if (!visual) return;

  visual.innerHTML = "";

  const placeholder = document.createElement("div");
  placeholder.className = "equipment-card-placeholder";
  placeholder.textContent = title;

  visual.appendChild(placeholder);
}

function getFilteredEquipmentRecords() {
  const allRecords = getEquipmentRecords();

  return allRecords.filter((record) => {
    const matchesSearch =
      !equipmentState.query ||
      record.searchText.includes(equipmentState.query);

    const matchesCategory =
      equipmentState.category === "All" ||
      record.categories.includes(equipmentState.category);

    return matchesSearch && matchesCategory;
  });
}

function setEquipmentFilter(category) {
  equipmentState.category = category;

  document.querySelectorAll(".js-equipment-filter").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === category);
  });

  renderEquipmentGallery(getFilteredEquipmentRecords());
}

function openEquipmentDrawer(record) {
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

function initialiseEquipmentPage() {
  const startButton = document.querySelector(".js-equipment-start");
  const gallery = document.querySelector("#equipment-gallery");
  const search = document.querySelector(".js-equipment-search");

  startButton?.addEventListener("click", () => {
    gallery?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  document.querySelectorAll(".js-equipment-filter").forEach((button) => {
    button.addEventListener("click", () => {
      setEquipmentFilter(button.dataset.category || "All");
    });
  });

  search?.addEventListener("input", () => {
    equipmentState.query = search.value.trim().toLowerCase();
    renderEquipmentGallery(getFilteredEquipmentRecords());
  });

  renderEquipmentGallery(getFilteredEquipmentRecords());
}

initialiseEquipmentPage();