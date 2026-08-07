function initialiseMainModule() {
const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-link");
const sectionLinks = document.querySelectorAll(".js-section-link");

// Show the chosen section, update the navigation and return to the top of the page
function showSection(targetId) {
  if (targetId !== "timeline" && typeof window.resetTimelineState === "function") {
    window.resetTimelineState();
  }

  sections.forEach((section) => {
    section.classList.toggle("active-section", section.id === targetId);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.target === targetId);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.dataset.target;
    showSection(targetId);
  });
});

// Make section switching available to the Home cards and other page modules
window.showSection = showSection;
}

window.initialiseMainModule = initialiseMainModule;