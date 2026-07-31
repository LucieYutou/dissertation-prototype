const PAGE_PARTIALS = [
  "home",
  "build-school",
  "timeline",
  "humanities",
  "equipment",
  "people"
];

async function fetchPartial(path) {
  const response = await fetch(path, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(
      `Unable to load ${path}: ${response.status} ${response.statusText}`
    );
  }

  return response.text();
}

async function loadPartials() {
  const pageSections =
    document.querySelector("#page-sections");

  const drawerSlot =
    document.querySelector("#drawer-slot");

  if (!pageSections) {
    throw new Error(
      'Missing required container: "#page-sections".'
    );
  }

  if (!drawerSlot) {
    throw new Error(
      'Missing required placeholder: "#drawer-slot".'
    );
  }

  const pageRequests =
    PAGE_PARTIALS.map((name) => {
      return fetchPartial(
        `partials/${name}.html`
      );
    });

  const drawerRequest =
    fetchPartial(
      "partials/drawer.html"
    );

  const [
    pageMarkup,
    drawerMarkup
  ] = await Promise.all([
    Promise.all(pageRequests),
    drawerRequest
  ]);

  pageSections.innerHTML =
    pageMarkup.join("\n");

  drawerSlot.insertAdjacentHTML(
    "beforebegin",
    drawerMarkup
  );

  drawerSlot.remove();
}

function verifyInitialisers() {
  const requiredInitialisers = [
    "initialiseDrawerModule",
    "initialiseMainModule",
    "initialiseHomeModule",
    "initialiseBuildSchoolModule",
    "initialiseTimelineModule",
    "initialiseHumanitiesStory",
    "initialiseEquipmentModule",
    "initialisePeopleModule"
  ];

  requiredInitialisers.forEach((name) => {
    if (
      typeof window[name] !==
      "function"
    ) {
      throw new Error(
        `Missing initialiser: ${name}`
      );
    }
  });
}

function initialiseWebsiteModules() {
  window.initialiseDrawerModule();
  window.initialiseMainModule();
  window.initialiseHomeModule();
  window.initialiseBuildSchoolModule();
  window.initialiseTimelineModule();
  window.initialiseHumanitiesStory();
  window.initialiseEquipmentModule();
  window.initialisePeopleModule();
}

async function initialiseApplication() {
  try {
    await loadPartials();

    verifyInitialisers();
    initialiseWebsiteModules();

    document.documentElement.classList.add(
      "app-ready"
    );
  } catch (error) {
    console.error(
      "The website could not be initialised.",
      error
    );
  }
}

initialiseApplication();