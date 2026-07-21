const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-link");
const sectionLinks = document.querySelectorAll(".js-section-link");

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