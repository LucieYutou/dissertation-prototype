const beginLink = document.querySelector(".js-begin-exploring");
const pathCards = Array.from(document.querySelectorAll(".js-path-card"));
const prevButton = document.querySelector(".js-ring-prev");
const nextButton = document.querySelector(".js-ring-next");

let activePathIndex = 0;

const ringPositions = [
  "is-front",
  "is-right-front",
  "is-right-back",
  "is-left-back",
  "is-left-front"
];

function getRingOffset(cardIndex, activeIndex, total) {
  return (cardIndex - activeIndex + total) % total;
}

function renderPathRing() {
  const total = pathCards.length;

  pathCards.forEach((card, cardIndex) => {
    card.classList.remove(
      "is-front",
      "is-left-front",
      "is-right-front",
      "is-left-back",
      "is-right-back"
    );

    const offset = getRingOffset(cardIndex, activePathIndex, total);
    card.classList.add(ringPositions[offset]);

    const isFront = offset === 0;
    card.setAttribute("aria-current", isFront ? "true" : "false");
  });
}

function moveToPath(index) {
  activePathIndex = (index + pathCards.length) % pathCards.length;
  renderPathRing();
}

pathCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const isFront = index === activePathIndex;

    if (!isFront) {
      moveToPath(index);
      return;
    }

    const targetId = card.dataset.target;

    if (typeof showSection === "function" && targetId) {
      showSection(targetId);
    }
  });
});

if (prevButton) {
  prevButton.addEventListener("click", () => {
    moveToPath(activePathIndex - 1);
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    moveToPath(activePathIndex + 1);
  });
}

if (beginLink) {
  beginLink.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(beginLink.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

renderPathRing();