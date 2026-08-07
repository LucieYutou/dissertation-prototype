function initialiseHumanitiesStory() {
  const section =
    document.querySelector(
      "#humanities"
    );

  if (!section) {
    return;
  }

  const startButton =
    section.querySelector(
      ".js-humanities-start"
    );

  const sceneLinks =
    Array.from(
      section.querySelectorAll(
        ".js-humanities-scene-link"
      )
    );

  const scenes =
    Array.from(
      section.querySelectorAll(
        ".js-humanities-scene"
      )
    );

  const beats =
    Array.from(
      section.querySelectorAll(
        ".js-humanities-beat"
      )
    );

  const galleries =
    Array.from(
      section.querySelectorAll(
        ".js-humanities-gallery"
      )
    );

  const recordButtons =
    Array.from(
      section.querySelectorAll(
        ".js-humanities-record"
      )
    );

  const fallbackImages =
    Array.from(
      section.querySelectorAll(
        "[data-humanities-image]"
      )
    );

  let navigationLocked = false;
  let navigationTimer = null;
  let scrollFrame = null;


  // These measurements keep scroll targets clear of the fixed header and the mobile scene index.
  function getHeaderHeight() {
    const header =
      document.querySelector(
        ".site-header"
      );

    return header
      ? header.offsetHeight
      : 0;
  }

  function getMobileSceneIndexHeight() {
    if (window.innerWidth > 1000) {
      return 0;
    }

    const sceneIndex =
      section.querySelector(
        ".humanities-scene-index"
      );

    return sceneIndex
      ? sceneIndex.offsetHeight
      : 0;
  }

  function getScrollOffset() {
    return (
      getHeaderHeight() +
      getMobileSceneIndexHeight()
    );
  }

  function scrollToElement(element) {
    if (!element) {
      return;
    }

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      getScrollOffset();

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  }


  // The scene index changes as the reader moves through the story.
  function setActiveScene(sceneId) {
    if (!sceneId) {
      return;
    }

    sceneLinks.forEach((button) => {
      const isActive =
        button.dataset.sceneTarget ===
        sceneId;

      button.classList.toggle(
        "is-active",
        isActive
      );

      if (isActive) {
        button.setAttribute(
          "aria-current",
          "step"
        );
      } else {
        button.removeAttribute(
          "aria-current"
        );
      }
    });
  }

  function lockNavigation() {
    navigationLocked = true;

    if (navigationTimer) {
      window.clearTimeout(
        navigationTimer
      );
    }

    navigationTimer =
      window.setTimeout(() => {
        navigationLocked = false;
        updateActiveSceneFromScroll();
      }, 1000);
  }

  function updateActiveSceneFromScroll() {
    if (
      navigationLocked ||
      !scenes.length
    ) {
      return;
    }

    const readingPosition =
      window.scrollY +
      getScrollOffset() +
      window.innerHeight * 0.22;

    let activeScene =
      scenes[0];

    scenes.forEach((scene) => {
      const sceneTop =
        scene.getBoundingClientRect().top +
        window.scrollY;

      if (
        sceneTop <=
        readingPosition
      ) {
        activeScene =
          scene;
      }
    });

    setActiveScene(
      activeScene.id
    );
  }


  // The opening button takes the reader straight to the first scene.
  if (startButton) {
    startButton.addEventListener(
      "click",
      () => {
        const firstScene =
          document.getElementById(
            "humanities-machine"
          );

        if (!firstScene) {
          return;
        }

        setActiveScene(
          "humanities-machine"
        );

        lockNavigation();
        scrollToElement(
          firstScene
        );
      }
    );
  }


  // Choosing a scene pauses automatic tracking until the smooth scroll has finished.

  sceneLinks.forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        const targetId =
          button.dataset.sceneTarget;

        if (!targetId) {
          return;
        }

        const target =
          document.getElementById(
            targetId
          );

        if (!target) {
          console.warn(
            `Humanities scene not found: ${targetId}`
          );

          return;
        }

        setActiveScene(
          targetId
        );

        lockNavigation();
        scrollToElement(
          target
        );
      }
    );
  });


  // Each narrative state is paired with a visual through its data-visual-key.

  function initialiseBeat(beat) {
    const states =
      Array.from(
        beat.querySelectorAll(
          ".js-humanities-state"
        )
      );

    const visuals =
      Array.from(
        beat.querySelectorAll(
          ".js-humanities-visual"
        )
      );

    if (
      !states.length ||
      !visuals.length
    ) {
      return;
    }

    function activateState(
      activeState
    ) {
      if (!activeState) {
        return;
      }

      const visualKey =
        activeState.dataset
          .visualKey;

      states.forEach((state) => {
        state.classList.toggle(
          "is-active",
          state === activeState
        );
      });

      visuals.forEach((visual) => {
        const shouldActivate =
          visual.dataset
            .visualKey ===
          visualKey;

        visual.classList.toggle(
          "is-active",
          shouldActivate
        );

        visual.setAttribute(
          "aria-hidden",
          shouldActivate
            ? "false"
            : "true"
        );
      });

      beat.dataset.activeVisual =
        visualKey || "";
    }

    function updateBeat() {
      const beatRect =
        beat.getBoundingClientRect();

      if (
        beatRect.bottom < 0 ||
        beatRect.top >
          window.innerHeight
      ) {
        return;
      }

      const readingLine =
        window.innerHeight *
        0.45;

      let closestState =
        states[0];

      let closestDistance =
        Number.POSITIVE_INFINITY;

      states.forEach((state) => {
        const rect =
          state.getBoundingClientRect();

        const centre =
          rect.top +
          rect.height / 2;

        const distance =
          Math.abs(
            centre -
            readingLine
          );

        if (
          distance <
          closestDistance
        ) {
          closestDistance =
            distance;

          closestState =
            state;
        }
      });

      activateState(
        closestState
      );
    }

    beat._updateHumanitiesBeat =
      updateBeat;

    activateState(
      states[0]
    );
  }

  beats.forEach(
    initialiseBeat
  );


  // The IBM 1620 thumbnails replace the main image and update its text and credit

  function initialiseGallery(
    gallery
  ) {
    const mainImage =
      gallery.querySelector(
        ".js-humanities-gallery-main-image"
      );

    const title =
      gallery.querySelector(
        ".js-humanities-gallery-title"
      );

    const description =
      gallery.querySelector(
        ".js-humanities-gallery-description"
      );

    const credit =
      gallery.querySelector(
        ".js-humanities-gallery-credit"
      );

    const thumbnails =
      Array.from(
        gallery.querySelectorAll(
          ".js-humanities-gallery-thumbnail"
        )
      );

    if (
      !mainImage ||
      !thumbnails.length
    ) {
      return;
    }

    function updateGalleryText(
      button
    ) {
      if (title) {
        title.textContent =
          button.dataset
            .imageTitle || "";
      }

      if (description) {
        description.textContent =
          button.dataset
            .imageDescription || "";
      }

      if (credit) {
        const creditText =
          button.dataset
            .imageCredit || "";

        credit.textContent =
          creditText;

        credit.hidden =
          creditText.length === 0;
      }
    }

    function setGalleryImage(
      button
    ) {
      const source =
        button.dataset
          .imageSrc;

      if (!source) {
        return;
      }

      thumbnails.forEach(
        (thumbnail) => {
          thumbnail.classList.toggle(
            "is-active",
            thumbnail === button
          );
        }
      );

      mainImage.classList.add(
        "is-changing"
      );

      window.setTimeout(() => {
        mainImage.src =
          source;

        mainImage.alt =
          button.dataset
            .imageAlt || "";

        updateGalleryText(
          button
        );

        window.requestAnimationFrame(
          () => {
            mainImage.classList.remove(
              "is-changing"
            );
          }
        );
      }, 170);
    }

    thumbnails.forEach(
      (button) => {
        button.addEventListener(
          "click",
          () => {
            setGalleryImage(
              button
            );
          }
        );
      }
    );
  }

  galleries.forEach(
    initialiseGallery
  );


  function openHumanitiesRecord(
    itemId
  ) {
    if (!itemId) {
      return;
    }

    if (
      typeof window
        .openDetailDrawer ===
      "function"
    ) {
      window.openDetailDrawer(
        itemId
      );

      return;
    }

    if (
      typeof window.openDrawer ===
      "function"
    ) {
      window.openDrawer(
        itemId
      );

      return;
    }

    if (
      typeof openDetailDrawer ===
      "function"
    ) {
      openDetailDrawer(
        itemId
      );

      return;
    }

    console.warn(
      `Drawer function unavailable for ${itemId}.`
    );
  }

  recordButtons.forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          openHumanitiesRecord(
            button.dataset.itemId
          );
        }
      );
    }
  );


  // A missing image is replaced with a simple message instead of leaving a broken frame

  function showImageFallback(
    image
  ) {
    if (!image) {
      return;
    }

    const parent =
      image.parentElement;

    if (
      !parent ||
      parent.querySelector(
        ".humanities-image-fallback"
      )
    ) {
      return;
    }

    image.style.display =
      "none";

    const fallback =
      document.createElement(
        "div"
      );

    fallback.className =
      "humanities-image-fallback";

    fallback.textContent =
      "Image unavailable";

    parent.appendChild(
      fallback
    );

    console.error(
      `Humanities image failed to load: ${image.getAttribute("src")}`
    );
  }

  fallbackImages.forEach(
    (image) => {
      image.addEventListener(
        "error",
        () => {
          showImageFallback(
            image
          );
        }
      );

      if (
        image.complete &&
        image.naturalWidth === 0
      ) {
        showImageFallback(
          image
        );
      }
    }
  );


  // One scroll update keeps the active scene and all visual states in step

  function updateHumanitiesScrollState() {
    updateActiveSceneFromScroll();

    beats.forEach((beat) => {
      if (
        typeof beat
          ._updateHumanitiesBeat ===
        "function"
      ) {
        beat
          ._updateHumanitiesBeat();
      }
    });
  }

  function requestScrollUpdate() {
    if (
      scrollFrame !== null
    ) {
      return;
    }

    scrollFrame =
      window.requestAnimationFrame(
        () => {
          updateHumanitiesScrollState();

          scrollFrame =
            null;
        }
      );
  }

  window.addEventListener(
    "scroll",
    requestScrollUpdate,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    requestScrollUpdate
  );


  // Positions are checked again whenever the Humanities page becomes visible.

  const pageObserver =
    new MutationObserver(() => {
      if (
        !section.classList.contains(
          "active-section"
        )
      ) {
        return;
      }

      window.requestAnimationFrame(
        () => {
          updateHumanitiesScrollState();
        }
      );
    });

  pageObserver.observe(
    section,
    {
      attributes: true,
      attributeFilter: [
        "class"
      ]
    }
  );


  setActiveScene(
    "humanities-machine"
  );

  window.requestAnimationFrame(
    () => {
      updateHumanitiesScrollState();
    }
  );
}

window.initialiseHumanitiesStory =
  initialiseHumanitiesStory;
