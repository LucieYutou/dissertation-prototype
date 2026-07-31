function initialiseBuildSchoolModule() {
const BUILD_ITEM_OVERRIDES = {
  item_001: {
    displayTitle: "Stibbs begins pressing for a University Computing Laboratory"
  },
  item_009: {
    displayTitle: "IBM 1620 Model II and the start of St Andrews computing service"
  },
  item_016: {
    displayTitle: "Computing Laboratory begins full-time service"
  },
  item_018: {
    displayTitle: "Jack Cole appointed Director of the Computing Laboratory"
  },
  item_020: {
    displayTitle: "Computational Science postgraduate work begins"
  },
  item_021: {
    displayTitle: "Computing Laboratory moved to the Mathematics Institute"
  },
  item_027: {
    displayTitle: "IBM 360/44 installed"
  },
  item_025: {
    displayTitle: "Distinguished Lecture Series begins with Algol ’68"
  },
  item_033: {
    displayTitle: "First Computer Science degree awarded at St Andrews"
  },
  item_062: {
    displayTitle: "Changeover from IBM 360/44 to VAX 11/780 system and user training"
  },
  item_101: {
    displayTitle: "Old Union / North Street PC classroom with networked Zenith workstations"
  },
  item_179: {
    displayTitle: "Ursula Martin appointed Professor of Computer Science"
  },
  item_181: {
    displayTitle: "Computing Laboratory and Management Information Services become IT Services"
  },
  item_206: {
    displayTitle: "School of Computer Science established"
  },
  item_218: {
    displayTitle: "Plans for new Computer Science building unveiled"
  },
  item_215: {
    displayTitle: "Jack Cole Building and The Gateway opened on the North Haugh"
  },
  item_323: {
    displayTitle: "New MSc in Human Computer Interaction appears in MSc portfolio"
  },
  item_328: {
    displayTitle: "Interaction Lab officially opened"
  },
  item_353: {
    displayTitle: "20th anniversary of the official opening of the Jack Cole Building"
  }
};

const BUILD_SCHOOL_CHAPTERS = [
  {
    id: "build-chapter-1",
    label: "Computing as a University Service",
    number: "Chapter 01",
    title: "Computing as a University Service",
    period: "1959–1965",
    items: [
      {
        id: "item_001",
        displayDate: "1959",
        displayTitle: "Stibbs begins pressing for a University Computing Laboratory",
        miniLabel: "1959",
        timelinePosition: 0
      },
      {
        id: "item_009",
        displayDate: "October 1964",
        displayTitle: "IBM 1620 Model II and the start of St Andrews computing service",
        miniLabel: "1964",
        timelinePosition: 17
      },
      {
        id: "item_016",
        displayDate: "4 January 1965",
        displayTitle: "Computing Laboratory begins full-time service",
        miniLabel: "1965",
        timelinePosition: 27
      }
    ],
    ticks: [
      { label: "1959", position: 0, hasEvent: true },
      { label: "1964", position: 17, hasEvent: true },
      { label: "1965", position: 27, hasEvent: true },
      { label: "1971", position: 46, muted: true },
      { label: "1999", position: 72, muted: true },
      { label: "2015", position: 88, muted: true },
      { label: "2026", position: 100, muted: true }
    ]
  },
  {
    id: "build-chapter-2",
    label: "From Service to Discipline",
    number: "Chapter 02",
    title: "From Service to Discipline",
    period: "1965–1971",
    items: [
      {
        id: "item_018",
        displayDate: "October 1965",
        displayTitle: "Jack Cole appointed Director of the Computing Laboratory",
        miniLabel: "1965",
        timelinePosition: 18
      },
      {
        id: "item_020",
        displayDate: "1966",
        displayTitle: "Computational Science postgraduate work begins",
        miniLabel: "1966",
        timelinePosition: 31
      },
      {
        id: "item_021",
        displayDate: "December 1967",
        displayTitle: "Computing Laboratory moved to the Mathematics Institute",
        miniLabel: "1967",
        timelinePosition: 40
      },
      {
        id: "item_027",
        displayDate: "April 1969",
        displayTitle: "IBM 360/44 installed",
        miniLabel: "1969",
        timelinePosition: 47
      },
      {
        id: "item_025",
        displayDate: "1969",
        displayTitle: "Distinguished Lecture Series begins with Algol ’68",
        miniLabel: "1969",
        timelinePosition: 54
      },
      {
        id: "item_033",
        displayDate: "1971",
        displayTitle: "First Computer Science degree awarded at St Andrews",
        miniLabel: "1971",
        timelinePosition: 66
      }
    ],
    ticks: [
      { label: "1959", position: 0, muted: true },
      { label: "1965", position: 18, hasEvent: true },
      { label: "1966", position: 31, hasEvent: true },
      { label: "1967", position: 40, hasEvent: true },
      { label: "1969", position: 50, hasEvent: true },
      { label: "1971", position: 66, hasEvent: true },
      { label: "1999", position: 82, muted: true },
      { label: "2015", position: 93, muted: true },
      { label: "2026", position: 100, muted: true }
    ]
  },
  {
    id: "build-chapter-3",
    label: "Becoming a School",
    number: "Chapter 03",
    title: "Becoming a School",
    period: "1980–1999",
    items: [
      {
        id: "item_062",
        displayDate: "1980",
        displayTitle: "Changeover from IBM 360/44 to VAX 11/780 system and user training",
        miniLabel: "1980",
        timelinePosition: 38
      },
      {
        id: "item_101",
        displayDate: "1987–1988",
        displayTitle: "Old Union / North Street PC classroom with networked Zenith workstations",
        miniLabel: "1987–88",
        timelinePosition: 52
      },
      {
        id: "item_179",
        displayDate: "1992–2002",
        displayTitle: "Ursula Martin appointed Professor of Computer Science",
        miniLabel: "1992–2002",
        timelinePosition: 64
      },
      {
        id: "item_181",
        displayDate: "1996",
        displayTitle: "Computing Laboratory and Management Information Services become IT Services",
        miniLabel: "1996",
        timelinePosition: 72
      },
      {
        id: "item_206",
        displayDate: "1999",
        displayTitle: "School of Computer Science established",
        miniLabel: "1999",
        timelinePosition: 80
      }
    ],
    ticks: [
      { label: "1959", position: 0, muted: true },
      { label: "1965", position: 12, muted: true },
      { label: "1971", position: 24, muted: true },
      { label: "1980", position: 38, hasEvent: true },
      { label: "1987–88", position: 52, hasEvent: true },
      { label: "1992–2002", position: 64, hasEvent: true },
      { label: "1996", position: 72, hasEvent: true },
      { label: "1999", position: 80, hasEvent: true },
      { label: "2015", position: 92, muted: true },
      { label: "2026", position: 100, muted: true }
    ]
  },
  {
    id: "build-chapter-4",
    label: "A Home and Research Identity",
    number: "Chapter 04",
    title: "A Home and Research Identity",
    period: "2002–2025",
    items: [
      {
        id: "item_218",
        displayDate: "7 November 2002",
        displayTitle: "Plans for new Computer Science building unveiled",
        miniLabel: "2002",
        timelinePosition: 58
      },
      {
        id: "item_215",
        displayDate: "2002–2005",
        displayTitle: "Jack Cole Building and The Gateway opened on the North Haugh",
        miniLabel: "2002–05",
        timelinePosition: 66
      },
      {
        id: "item_323",
        displayDate: "9 March 2014",
        displayTitle: "New MSc in Human Computer Interaction appears in MSc portfolio",
        miniLabel: "2014",
        timelinePosition: 82
      },
      {
        id: "item_328",
        displayDate: "2 September 2015",
        displayTitle: "Interaction Lab officially opened",
        miniLabel: "2015",
        timelinePosition: 88
      },
      {
        id: "item_353",
        displayDate: "18 March 2025",
        displayTitle: "20th anniversary of the official opening of the Jack Cole Building",
        miniLabel: "2025",
        timelinePosition: 98
      }
    ],
    ticks: [
      { label: "1959", position: 0, muted: true },
      { label: "1965", position: 12, muted: true },
      { label: "1971", position: 24, muted: true },
      { label: "1999", position: 48, muted: true },
      { label: "2002", position: 58, hasEvent: true },
      { label: "2002–05", position: 66, hasEvent: true },
      { label: "2014", position: 82, hasEvent: true },
      { label: "2015", position: 88, hasEvent: true },
      { label: "2025", position: 98, hasEvent: true },
      { label: "2026", position: 100, muted: true }
    ]
  }
];

const BUILD_CONTINUATION = {
  id: "build-chapter-5",
  label: "Still developing",
  number: "Chapter 05",
  title: "Still developing",
  period: "2025–now",
  text:
    "The story does not end here. After the School had established its institutional home and research identity, computing at St Andrews continued to change through new projects, people, teaching and technologies. Explore further records and later events in the full timeline."
};

const buildStartButton = document.querySelector(".js-build-start");
const buildRoute = document.querySelector("#build-route");
const buildIndex = document.querySelector(".js-build-index");
const buildTimeline = document.querySelector(".js-build-timeline");
const buildTooltip = document.querySelector(".js-build-tooltip");

function getBuildOverride(itemId) {
  return BUILD_ITEM_OVERRIDES[itemId] || {};
}

function showFullTimeline() {
  if (typeof showSection === "function") {
    showSection("timeline");
  }
}

function emphasiseEvent(eventId) {
  if (!eventId) return;

  const eventCard = document.querySelector(`[data-event-id="${eventId}"]`);
  if (!eventCard) return;

  eventCard.classList.add("is-visible", "is-emphasised");
  eventCard.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  window.setTimeout(() => {
    eventCard.classList.remove("is-emphasised");
  }, 1600);
}

function renderIndex() {
  if (!buildIndex) return;

  const chapterButtons = BUILD_SCHOOL_CHAPTERS.map((chapter, index) => {
    const activeClass = index === 0 ? " active" : "";

    return `
      <button class="build-index-link${activeClass}" data-chapter="${chapter.id}" type="button">
        <span>${String(index + 1).padStart(2, "0")}</span>
        ${escapeHTML(chapter.label)}
      </button>
    `;
  }).join("");

  const continuationButton = `
    <button class="build-index-link build-index-link-muted" data-chapter="${BUILD_CONTINUATION.id}" type="button">
      <span>05</span>
      ${escapeHTML(BUILD_CONTINUATION.label)}
    </button>
  `;

  buildIndex.innerHTML = `
    <p class="build-index-title">Archive index</p>
    ${chapterButtons}
    ${continuationButton}
  `;
}

function renderEventCard(configItem) {
  const item = getItem(configItem.id);
  if (!item) return "";

  const override = getBuildOverride(configItem.id);

  const displayDate = getDisplayDate(configItem, item);
  const title =
    configItem.displayTitle ||
    override.displayTitle ||
    item.title ||
    "Untitled record";

  const summary =
    override.summary ||
    item.summary ||
    "No summary is available for this record yet.";

  return `
    <article class="archive-event-card" data-event-id="${escapeHTML(configItem.id)}">
      <div class="archive-date">${escapeHTML(displayDate)}</div>
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(summary)}</p>

      <div class="archive-actions">
        <button
          class="js-build-read-more"
          type="button"
          data-item-id="${escapeHTML(configItem.id)}"
          data-display-date="${escapeHTML(displayDate)}"
          data-display-title="${escapeHTML(title)}"
        >
          Read more
        </button>

        <button
        class="js-view-timeline"
        type="button"
        data-item-id="${escapeHTML(configItem.id)}"
        >
        View in timeline
        </button>
      </div>
    </article>
  `;
}

function renderMiniTimeline(chapter) {
  const ticksHTML = chapter.ticks
    .map((tick) => {
      const classNames = [
        "mini-tick",
        tick.muted ? "mini-tick-muted" : "",
        tick.hasEvent ? "has-event" : ""
      ].filter(Boolean).join(" ");

      return `
        <span class="${classNames}" style="left: ${tick.position}%;">
          ${escapeHTML(tick.label)}
        </span>
      `;
    })
    .join("");

  const pointsHTML = chapter.items
    .map((configItem) => {
      const item = getItem(configItem.id);
      if (!item) return "";

      const displayDate = getDisplayDate(configItem, item);
      const title =
        configItem.displayTitle ||
        getBuildOverride(configItem.id).displayTitle ||
        item.title ||
        configItem.id;

      return `
        <button
          class="mini-point js-mini-record"
          type="button"
          style="left: ${configItem.timelinePosition}%;"
          data-item-id="${escapeHTML(configItem.id)}"
          data-event-id="${escapeHTML(configItem.id)}"
          data-display-date="${escapeHTML(displayDate)}"
          data-display-title="${escapeHTML(title)}"
          aria-label="${escapeHTML(title)}"
        ></button>
      `;
    })
    .join("");

  return `
    <div class="chapter-mini-timeline">
      <div class="mini-timeline-top">
        <span>Full timeline view · 1959–2026</span>
        <button class="js-view-timeline" type="button">Open full timeline →</button>
      </div>

      <div class="mini-timeline-track">
        <button class="mini-timeline-line js-view-timeline" type="button" aria-label="Open full timeline"></button>
        ${ticksHTML}
        ${pointsHTML}
      </div>
    </div>
  `;
}

function renderChapter(chapter) {
  const eventCardsHTML = chapter.items.map(renderEventCard).join("");

  return `
    <section class="build-chapter" id="${chapter.id}" data-chapter="${chapter.id}">
      <div class="chapter-heading">
        <span class="chapter-number">${escapeHTML(chapter.number)}</span>
        <h2>${escapeHTML(chapter.title)}</h2>
        <p>${escapeHTML(chapter.period)}</p>
      </div>

      ${eventCardsHTML}
      ${renderMiniTimeline(chapter)}
    </section>
  `;
}

function renderContinuationChapter() {
  return `
    <section class="build-chapter build-chapter-continuation" id="${BUILD_CONTINUATION.id}" data-chapter="${BUILD_CONTINUATION.id}">
      <div class="chapter-heading continuation-heading">
        <span class="chapter-number">${escapeHTML(BUILD_CONTINUATION.number)}</span>
        <h2>${escapeHTML(BUILD_CONTINUATION.title)}</h2>
        <p>${escapeHTML(BUILD_CONTINUATION.period)}</p>
      </div>

      <div class="archive-continuation-card">
        <p>${escapeHTML(BUILD_CONTINUATION.text)}</p>

        <button class="js-view-timeline" type="button">
          Explore the full timeline →
        </button>
      </div>
    </section>
  `;
}

function renderBuildSchoolPage() {
  if (!buildTimeline) return;

  renderIndex();

  buildTimeline.innerHTML = `
    ${BUILD_SCHOOL_CHAPTERS.map(renderChapter).join("")}
    ${renderContinuationChapter()}
  `;
}

function openBuildDetail(button) {
  openDetailDrawer(button.dataset.itemId, {
    displayDate: button.dataset.displayDate,
    displayTitle: button.dataset.displayTitle,
    overrides: BUILD_ITEM_OVERRIDES
  });
}

function initialiseBuildSchoolInteractions() {
  const buildIndexLinks = document.querySelectorAll(".build-index-link");
  const buildChapters = document.querySelectorAll(".build-chapter");
  const archiveCards = document.querySelectorAll(".archive-event-card");
  const buildReadMoreButtons = document.querySelectorAll(".js-build-read-more");
  const miniRecordButtons = document.querySelectorAll(".js-mini-record");
  const viewTimelineButtons = document.querySelectorAll(".js-view-timeline");
  const miniTimelineLines = document.querySelectorAll(".mini-timeline-line");

  if (buildStartButton && buildRoute) {
    buildStartButton.addEventListener("click", () => {
      buildRoute.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }


  let buildScrollFrame = null;

  function getBuildHeaderHeight() {
    const header =
      document.querySelector(".site-header");

    return header
      ? header.offsetHeight
      : 0;
  }

  function setActiveBuildChapter(chapterId) {
    if (!chapterId) return;

    buildIndexLinks.forEach((link) => {
      const isActive =
        link.dataset.chapter === chapterId;

      link.classList.toggle(
        "active",
        isActive
      );

      if (isActive) {
        link.setAttribute(
          "aria-current",
          "step"
        );
      } else {
        link.removeAttribute(
          "aria-current"
        );
      }
    });
  }

  function updateActiveBuildChapter() {
    if (!buildChapters.length) return;

    const buildSection =
      document.querySelector("#build-school");

    if (
      !buildSection ||
      !buildSection.classList.contains(
        "active-section"
      )
    ) {
      return;
    }

    const readingLine =
      getBuildHeaderHeight() +
      window.innerHeight * 0.28;

    let activeChapter =
      buildChapters[0];

    buildChapters.forEach((chapter) => {
      const rect =
        chapter.getBoundingClientRect();

      if (rect.top <= readingLine) {
        activeChapter = chapter;
      }
    });

    const lastChapter =
      buildChapters[
        buildChapters.length - 1
      ];

    const lastRect =
      lastChapter.getBoundingClientRect();

    if (
      window.innerHeight +
        window.scrollY >=
      document.documentElement.scrollHeight -
        4
    ) {
      activeChapter = lastChapter;
    } else if (
      lastRect.top <=
      window.innerHeight * 0.55
    ) {
      activeChapter = lastChapter;
    }

    setActiveBuildChapter(
      activeChapter.dataset.chapter
    );
  }

  buildIndexLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const chapterId =
        link.dataset.chapter;

      const chapter =
        document.getElementById(
          chapterId
        );

      if (!chapter) return;

      setActiveBuildChapter(
        chapterId
      );

      const top =
        chapter.getBoundingClientRect().top +
        window.scrollY -
        getBuildHeaderHeight() -
        28;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  });

  window.addEventListener(
    "scroll",
    () => {
      if (buildScrollFrame) return;

      buildScrollFrame =
        window.requestAnimationFrame(() => {
          buildScrollFrame = null;
          updateActiveBuildChapter();
        });
    },
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    updateActiveBuildChapter
  );

  setActiveBuildChapter(
    buildChapters[0]?.dataset.chapter
  );

  window.requestAnimationFrame(
    updateActiveBuildChapter
  );

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  archiveCards.forEach((card) => {
    cardObserver.observe(card);
  });


  buildReadMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openBuildDetail(button);
    });
  });

  miniRecordButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      emphasiseEvent(button.dataset.eventId);
      openBuildDetail(button);
    });
  });

  viewTimelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const itemId = button.dataset.itemId;

    if (itemId && typeof window.openTimelineAtItem === "function") {
      window.openTimelineAtItem(itemId);
      return;
    }

    showFullTimeline();
  });
});

  miniTimelineLines.forEach((line) => {
    line.addEventListener("mouseenter", () => {
      if (!buildTooltip) return;
      buildTooltip.classList.add("is-visible");
    });

    line.addEventListener("mousemove", (event) => {
      if (!buildTooltip) return;

      buildTooltip.style.left = `${event.clientX}px`;
      buildTooltip.style.top = `${event.clientY}px`;
    });

    line.addEventListener("mouseleave", () => {
      if (!buildTooltip) return;
      buildTooltip.classList.remove("is-visible");
    });
  });
}

renderBuildSchoolPage();
initialiseBuildSchoolInteractions();
}

window.initialiseBuildSchoolModule = initialiseBuildSchoolModule;