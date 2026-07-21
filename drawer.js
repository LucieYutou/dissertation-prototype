const HIDDEN_SOURCE_IDS = new Set(["src_001"]);

const HIDDEN_SOURCE_TITLE_KEYWORDS = [
  "chronological report"
];

const MEDIA_TITLE_OVERRIDES = {};

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getItem(itemId) {
  if (
    typeof ITEM_BY_ID !== "undefined" &&
    ITEM_BY_ID[itemId]
  ) {
    return ITEM_BY_ID[itemId];
  }

  if (
    typeof ITEMS !== "undefined" &&
    Array.isArray(ITEMS)
  ) {
    return ITEMS.find(
      (item) => item.id === itemId
    );
  }

  return null;
}

function getSource(sourceId) {
  if (!sourceId) {
    return null;
  }

  if (
    typeof SOURCE_BY_ID !== "undefined" &&
    SOURCE_BY_ID[sourceId]
  ) {
    return SOURCE_BY_ID[sourceId];
  }

  if (
    typeof SOURCES !== "undefined" &&
    Array.isArray(SOURCES)
  ) {
    return SOURCES.find(
      (source) =>
        source.sourceId === sourceId
    );
  }

  return null;
}

function getMedia(mediaId) {
  if (!mediaId) {
    return null;
  }

  if (
    typeof MEDIA_BY_ID !== "undefined" &&
    MEDIA_BY_ID[mediaId]
  ) {
    return MEDIA_BY_ID[mediaId];
  }

  if (
    typeof MEDIA !== "undefined" &&
    Array.isArray(MEDIA)
  ) {
    return MEDIA.find(
      (media) =>
        media.mediaId === mediaId
    );
  }

  return null;
}

function getItemTitle(itemId) {
  const item = getItem(itemId);
  return item?.title || "";
}

function isImageUrl(url) {
  return /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(
    String(url || "").trim()
  );
}

function getMediaImages(media) {
  if (!media) {
    return [];
  }

  /*
   * New data structure:
   *
   * images: [
   *   {
   *     localUrl: "image/example.jpg",
   *     description: "Description text"
   *   }
   * ]
   */
  if (Array.isArray(media.images)) {
    return media.images
      .map((image) => {
        return {
          localUrl: String(
            image?.localUrl ||
            image?.url ||
            ""
          ).trim(),

          description: String(
            image?.description ||
            ""
          ).trim()
        };
      })
      .filter(
        (image) => image.localUrl
      );
  }

  /*
   * Compatibility with possible older
   * or alternative data structures.
   */
  const localUrls = [];

  if (Array.isArray(media.localUrls)) {
    localUrls.push(...media.localUrls);
  }

  if (media.localUrl) {
    localUrls.unshift(media.localUrl);
  }

  /*
   * Final fallback for old data records
   * containing a direct image URL only.
   */
  if (
    !localUrls.length &&
    isImageUrl(media.url)
  ) {
    localUrls.push(media.url);
  }

  return localUrls
    .map((localUrl) => {
      return {
        localUrl: String(
          localUrl || ""
        ).trim(),

        description: ""
      };
    })
    .filter(
      (image) => image.localUrl
    );
}

function getDisplayDate(
  configItem,
  item
) {
  if (configItem?.displayDate) {
    return configItem.displayDate;
  }

  if (item?.displayDate) {
    return item.displayDate;
  }

  if (item?.date) {
    return item.date;
  }

  return "Date unknown";
}

function getPublicDateNote(item) {
  if (!item) {
    return "";
  }

  if (item.publicDateNote) {
    return item.publicDateNote;
  }

  const note = item.dateNote || "";

  if (!item.date) {
    return "Date unknown.";
  }

  if (!note) {
    return "";
  }

  const lowerNote =
    note.toLowerCase();

  if (
    lowerNote.includes(
      "exact event date stated"
    )
  ) {
    return "";
  }

  if (
    lowerNote.includes(
      "no exact event date"
    ) ||
    lowerNote.includes(
      "no exact date"
    ) ||
    lowerNote.includes(
      "year only"
    ) ||
    lowerNote.includes(
      "month only"
    ) ||
    lowerNote.includes(
      "approximate date"
    ) ||
    lowerNote.includes(
      "date certainty"
    )
  ) {
    return "No exact date is given in the source.";
  }

  return "";
}

function normaliseItemType(value) {
  return String(value || "")
    .toLowerCase()
    .replaceAll("_", " ")
    .trim();
}

function isPersonItem(item) {
  if (!item) {
    return false;
  }

  const type =
    normaliseItemType(
      item.itemType
    );

  return (
    type.includes("person") ||
    type.includes("people") ||
    type.includes("staff") ||
    type.includes("individual") ||
    type.includes("profile")
  );
}

function isEquipmentItem(item) {
  if (!item) {
    return false;
  }

  const type =
    normaliseItemType(
      item.itemType
    );

  return (
    type.includes("equipment") ||
    type.includes("machine") ||
    type.includes("hardware") ||
    type.includes("software") ||
    type.includes("system") ||
    type.includes("facility") ||
    type.includes("building") ||
    type.includes("object")
  );
}

function findItemByExactTitle(label) {
  const target = String(
    label || ""
  )
    .trim()
    .toLowerCase();

  if (
    !target ||
    typeof ITEMS === "undefined" ||
    !Array.isArray(ITEMS)
  ) {
    return null;
  }

  return (
    ITEMS.find((item) => {
      return (
        String(item.title || "")
          .trim()
          .toLowerCase() === target
      );
    }) || null
  );
}

function isExpectedRelatedType(
  item,
  expectedType = "any"
) {
  if (
    !item ||
    expectedType === "any"
  ) {
    return true;
  }

  if (expectedType === "person") {
    return isPersonItem(item);
  }

  if (
    expectedType === "equipment"
  ) {
    return isEquipmentItem(item);
  }

  return true;
}

function resolveRelatedEntry(
  value,
  expectedType = "any"
) {
  if (!value) {
    return null;
  }

  const text =
    String(value).trim();

  if (!text) {
    return null;
  }

  /*
   * Case 1:
   * "item_123 Label text"
   */
  const idWithLabelMatch =
    text.match(
      /^(item_\d+)\s+(.+)$/
    );

  if (idWithLabelMatch) {
    const itemId =
      idWithLabelMatch[1];

    const label =
      idWithLabelMatch[2].trim();

    const relatedItem =
      getItem(itemId);

    if (
      relatedItem &&
      !isExpectedRelatedType(
        relatedItem,
        expectedType
      )
    ) {
      return null;
    }

    return {
      id: relatedItem
        ? itemId
        : "",

      label:
        label ||
        relatedItem?.title ||
        itemId
    };
  }

  /*
   * Case 2:
   * "item_123"
   */
  const idOnlyMatch =
    text.match(/^item_\d+$/);

  if (idOnlyMatch) {
    const relatedItem =
      getItem(text);

    if (
      !relatedItem ||
      !isExpectedRelatedType(
        relatedItem,
        expectedType
      )
    ) {
      return null;
    }

    return {
      id: relatedItem.id,

      label:
        relatedItem.title ||
        relatedItem.id
    };
  }

  /*
   * Case 3:
   * Plain title with an exact match.
   */
  const matchedItem =
    findItemByExactTitle(text);

  if (
    matchedItem &&
    isExpectedRelatedType(
      matchedItem,
      expectedType
    )
  ) {
    return {
      id: matchedItem.id,

      label:
        matchedItem.title ||
        text
    };
  }

  /*
   * Case 4:
   * Plain text with no matching item.
   * Show it without a link.
   */
  return {
    id: "",
    label: text
  };
}

function renderList(
  items,
  expectedType = "any"
) {
  if (
    !items ||
    !items.length
  ) {
    return "";
  }

  const resolvedItems = items
    .map((item) => {
      return resolveRelatedEntry(
        item,
        expectedType
      );
    })
    .filter(Boolean);

  const seen = new Set();

  const uniqueItems =
    resolvedItems.filter(
      (item) => {
        const key =
          item.id ||
          item.label.toLowerCase();

        if (seen.has(key)) {
          return false;
        }

        seen.add(key);
        return true;
      }
    );

  if (!uniqueItems.length) {
    return "";
  }

  return `
    <ul class="drawer-list drawer-related-list">
      ${uniqueItems
        .map((item) => {
          if (item.id) {
            return `
              <li>
                <button
                  class="drawer-related-link js-drawer-related-link"
                  type="button"
                  data-related-item-id="${escapeHTML(item.id)}"
                >
                  ${escapeHTML(item.label)}
                </button>
              </li>
            `;
          }

          return `
            <li>
              ${escapeHTML(item.label)}
            </li>
          `;
        })
        .join("")}
    </ul>
  `;
}

function getPublicSources(item) {
  const sourceIds =
    item?.sources || [];

  return sourceIds
    .map((sourceId) => {
      return getSource(sourceId);
    })
    .filter(Boolean)
    .filter((source) => {
      const title = String(
        source.sourceTitle ||
        source.title ||
        ""
      ).toLowerCase();

      const isHiddenId =
        HIDDEN_SOURCE_IDS.has(
          source.sourceId
        );

      const isHiddenTitle =
        HIDDEN_SOURCE_TITLE_KEYWORDS.some(
          (keyword) => {
            return title.includes(
              keyword
            );
          }
        );

      return (
        !isHiddenId &&
        !isHiddenTitle
      );
    });
}

function renderSources(item) {
  const sources =
    getPublicSources(item);

  if (!sources.length) {
    return `
      <div class="drawer-section drawer-section-muted">
        <h3>Sources</h3>
        <p>Source details are not available yet.</p>
      </div>
    `;
  }

  const sourceLinks = sources
    .map((source) => {
      const title =
        source.sourceTitle ||
        source.title ||
        source.sourceId;

      const type =
        source.sourceType
          ? ` · ${source.sourceType}`
          : "";

      const date =
        source.displayDate
          ? ` · ${source.displayDate}`
          : source.date
            ? ` · ${source.date}`
            : "";

      const url =
        source.url || "";

      if (url) {
        return `
          <li>
            <a
              href="${escapeHTML(url)}"
              target="_blank"
              rel="noreferrer"
            >
              ${escapeHTML(title)}
            </a>

            <span>
              ${escapeHTML(type + date)}
            </span>
          </li>
        `;
      }

      return `
        <li>
          <span>
            ${escapeHTML(title)}
          </span>

          <span>
            ${escapeHTML(type + date)}
          </span>
        </li>
      `;
    })
    .join("");

  return `
    <div class="drawer-section">
      <h3>Sources</h3>

      <ul class="drawer-source-list">
        ${sourceLinks}
      </ul>
    </div>
  `;
}

function getOverride(
  itemId,
  overrides = {}
) {
  return overrides[itemId] || {};
}

function getPublicMediaIds(
  item,
  overrides = {}
) {
  const override =
    getOverride(
      item.id,
      overrides
    );

  if (
    Array.isArray(
      override.mediaIds
    )
  ) {
    return override.mediaIds;
  }

  return item.media || [];
}

function getMediaCaption(media) {
  if (!media) {
    return "";
  }

  /*
   * Media title is not displayed.
   * It is retained only as fallback
   * alternative text and for identifying
   * hidden note records.
   */
  return (
    MEDIA_TITLE_OVERRIDES[
      media.mediaId
    ] ||
    media.mediaTitle ||
    media.title ||
    media.mediaId ||
    "Related image"
  );
}

function normaliseTextForCompare(
  value
) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .trim();
}

function normaliseLocalPathForCompare(
  value
) {
  let text = String(value || "")
    .trim()
    .replaceAll("\\", "/")
    .replace(/^\.\//, "")
    .replace(/[?#].*$/, "")
    .toLowerCase();

  try {
    text = decodeURIComponent(text);
  } catch (error) {
    /*
     * Keep the original path if it
     * cannot be URI decoded.
     */
  }

  return text;
}

function isHiddenMediaCaption(
  caption
) {
  const text =
    normaliseTextForCompare(
      caption
    );

  return (
    text.includes(
      "media note for item_"
    ) ||
    text === "media note" ||
    text.startsWith(
      "media note:"
    )
  );
}

function isHiddenMedia(media) {
  if (!media) {
    return true;
  }

  const caption =
    getMediaCaption(media);

  const title =
    normaliseTextForCompare(
      caption
    );

  const mediaType =
    normaliseTextForCompare(
      media.mediaType
    );

  const imageNote =
    normaliseTextForCompare(
      media.imageNote
    );

  const copyrightNote =
    normaliseTextForCompare(
      media.copyrightNote
    );

  return (
    isHiddenMediaCaption(
      caption
    ) ||
    title.includes(
      "media note for item_"
    ) ||
    mediaType.includes("note") ||
    imageNote.includes(
      "media note for item_"
    ) ||
    copyrightNote.includes(
      "media note for item_"
    )
  );
}

function isUsableExternalUrl(value) {
  return /^https?:\/\//i.test(
    String(value || "").trim()
  );
}

function getMediaSourceUrl(media) {
  /*
   * Prefer the URL stored directly
   * in the media CSV.
   */
  const mediaUrl = String(
    media?.url || ""
  ).trim();

  if (
    isUsableExternalUrl(
      mediaUrl
    )
  ) {
    return mediaUrl;
  }

  /*
   * Use the related source URL
   * as a fallback.
   */
  const relatedSource =
    getSource(
      media?.relatedSourceId
    );

  const sourceUrl = String(
    relatedSource?.url || ""
  ).trim();

  return isUsableExternalUrl(
    sourceUrl
  )
    ? sourceUrl
    : "";
}

function capitaliseFirstLetter(
  value
) {
  const text =
    String(value || "").trim();

  return text.replace(
    /^([^A-Za-z]*)([a-z])/,
    (
      match,
      prefix,
      letter
    ) => {
      return (
        prefix +
        letter.toUpperCase()
      );
    }
  );
}

function formatMediaDescription(
  value
) {
  let text = String(value || "")
    .trim()
    .replace(/\s+/g, " ");

  if (!text) {
    return "";
  }

  /*
   * Remove the parenthetical archive
   * attribution from the IBM 1620
   * description shown in the drawer.
   */
  text = text.replace(
    /\s*\(Image:\s*Alex Coupar see Dundee University Archives\s+https:\/\/archives\.dundee\.ac\.uk\/ms-258\)\s*/i,
    " "
  );

  /*
   * Replace only this specific
   * hyphenated wording.
   *
   * Other hyphens remain unchanged.
   */
  text = text.replace(
    /\bon-line\b/gi,
    "Online"
  );

  text = text
    .replace(/\s+/g, " ")
    .trim();

  /*
   * Specific wording corrections.
   */
  const exactReplacements = {
    "jack-cole-building":
      "Jack Cole Building",

    "online retrieval in the university library":
      "Online retrieval in the university library"
  };

  const exactMatch =
    exactReplacements[
      text.toLowerCase()
    ];

  if (exactMatch) {
    return exactMatch;
  }

  return capitaliseFirstLetter(
    text
  );
}

function getDedupedPublicImages(
  item,
  overrides = {}
) {
  const mediaIds =
    getPublicMediaIds(
      item,
      overrides
    );

  if (!mediaIds.length) {
    return [];
  }

  const candidates = [];

  mediaIds.forEach(
    (mediaId, mediaIndex) => {
      const media =
        getMedia(mediaId);

      if (
        !media ||
        isHiddenMedia(media)
      ) {
        return;
      }

      const sourceUrl =
        getMediaSourceUrl(media);

      const simplifiedCopyright =
        String(
          media.simplifiedCopyright ||
          ""
        ).trim();

      const caption =
        getMediaCaption(media);

      getMediaImages(media)
        .forEach(
          (
            image,
            imageIndex
          ) => {
            const localUrl =
              String(
                image.localUrl ||
                ""
              ).trim();

            if (
              !localUrl ||
              !isImageUrl(localUrl)
            ) {
              return;
            }

            candidates.push({
              media,
              mediaIndex,
              imageIndex,
              localUrl,

              description:
                formatMediaDescription(
                  image.description
                ),

              sourceUrl,
              simplifiedCopyright,
              caption
            });
          }
        );
    }
  );

  /*
   * Duplicate detection is based
   * only on the local image path.
   *
   * Different images from the same
   * source page are retained.
   */
  const seenLocalUrls =
    new Set();

  return candidates
    .sort((a, b) => {
      if (
        a.mediaIndex !==
        b.mediaIndex
      ) {
        return (
          a.mediaIndex -
          b.mediaIndex
        );
      }

      return (
        a.imageIndex -
        b.imageIndex
      );
    })
    .filter((candidate) => {
      const key =
        normaliseLocalPathForCompare(
          candidate.localUrl
        );

      if (
        !key ||
        seenLocalUrls.has(key)
      ) {
        return false;
      }

      seenLocalUrls.add(key);
      return true;
    });
}

function renderMedia(
  item,
  overrides = {}
) {
  const imageEntries =
    getDedupedPublicImages(
      item,
      overrides
    );

  if (!imageEntries.length) {
    return "";
  }

  /*
   * The Stibbs record displays its
   * image without a Description field.
   */
  const hideDescriptions =
    item.id === "item_001";

  const mediaItems =
    imageEntries
      .map((entry) => {
        /*
         * Media title is not displayed.
         * It is used only as fallback
         * alternative text.
         */
        const altText =
          entry.description ||
          entry.caption ||
          "Related image";

        /*
         * Link the image to its source
         * when a source URL exists.
         */
        const imageHTML =
          entry.sourceUrl
            ? `
                <a
                  href="${escapeHTML(entry.sourceUrl)}"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="${escapeHTML(entry.localUrl)}"
                    alt="${escapeHTML(altText)}"
                  >
                </a>
              `
            : `
                <img
                  src="${escapeHTML(entry.localUrl)}"
                  alt="${escapeHTML(altText)}"
                >
              `;

        const descriptionHTML =
          !hideDescriptions &&
          entry.description
            ? `
                <span class="drawer-media-detail">
                  <strong>Description:</strong>

                  <span>
                    ${escapeHTML(entry.description)}
                  </span>
                </span>
              `
            : "";

        const sourceHTML =
          entry.sourceUrl
            ? `
                <span class="drawer-media-source">
                  <strong>Source from:</strong>

                  <a
                    href="${escapeHTML(entry.sourceUrl)}"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ${escapeHTML(entry.sourceUrl)}
                  </a>
                </span>
              `
            : "";

        const copyrightHTML =
          entry.simplifiedCopyright
            ? `
                <span class="drawer-media-detail">
                  <strong>Copyright note:</strong>

                  <span>
                    ${escapeHTML(
                      entry.simplifiedCopyright
                    )}
                  </span>
                </span>
              `
            : "";

        const figcaptionHTML =
          descriptionHTML ||
          sourceHTML ||
          copyrightHTML
            ? `
                <figcaption>
                  ${descriptionHTML}
                  ${sourceHTML}
                  ${copyrightHTML}
                </figcaption>
              `
            : "";

        return `
          <figure class="drawer-media-item">
            ${imageHTML}
            ${figcaptionHTML}
          </figure>
        `;
      })
      .join("");

  return `
    <div class="drawer-section">
      <h3>Related media</h3>

      <div class="drawer-media-grid">
        ${mediaItems}
      </div>
    </div>
  `;
}

function renderDrawerSection(
  title,
  contentHTML
) {
  if (!contentHTML) {
    return "";
  }

  return `
    <div class="drawer-section">
      <h3>${escapeHTML(title)}</h3>
      ${contentHTML}
    </div>
  `;
}

function getDrawerElements() {
  return {
    drawer:
      document.querySelector(
        ".build-drawer"
      ),

    closeButton:
      document.querySelector(
        ".js-build-drawer-close"
      ),

    title:
      document.querySelector(
        ".js-build-drawer-title"
      ),

    date:
      document.querySelector(
        ".js-build-drawer-date"
      ),

    content:
      document.querySelector(
        ".js-build-drawer-content"
      )
  };
}

function openDetailDrawer(
  itemId,
  options = {}
) {
  const item =
    getItem(itemId);

  const drawerElements =
    getDrawerElements();

  if (
    !item ||
    !drawerElements.drawer
  ) {
    return;
  }

  const overrides =
    options.overrides || {};

  const override =
    getOverride(
      itemId,
      overrides
    );

  const title =
    options.displayTitle ||
    override.displayTitle ||
    item.title ||
    "Untitled record";

  const dateLabel =
    options.displayDate ||
    override.displayDate ||
    getDisplayDate(
      override,
      item
    );

  const publicDateNote =
    getPublicDateNote(item);

  if (drawerElements.title) {
    drawerElements.title.textContent =
      title;
  }

  /*
   * Item type is deliberately
   * not displayed.
   */
  if (drawerElements.date) {
    drawerElements.date.innerHTML = `
      ${escapeHTML(dateLabel)}

      ${
        publicDateNote
          ? `
              <span class="drawer-date-note">
                (${escapeHTML(publicDateNote)})
              </span>
            `
          : ""
      }
    `;
  }

  const summary =
    override.summary ||
    item.summary ||
    "No summary is available for this record yet.";

  const whyItMatters =
    override.whyItMatters ||
    item.whyItMatters ||
    "";

  const summaryHTML = `
    <p>
      ${escapeHTML(summary)}
    </p>
  `;

  const whyHTML =
    whyItMatters
      ? `
          <p>
            ${escapeHTML(whyItMatters)}
          </p>
        `
      : "";

  const relatedPeopleHTML =
    renderList(
      item.relatedPeople,
      "person"
    );

  const relatedEquipmentHTML =
    renderList(
      item.relatedEquipment,
      "equipment"
    );

  const mediaHTML =
    renderMedia(
      item,
      overrides
    );

  const sourcesHTML =
    renderSources(item);

  if (drawerElements.content) {
    drawerElements.content.innerHTML = `
      ${renderDrawerSection(
        "Summary",
        summaryHTML
      )}

      ${
        whyHTML
          ? renderDrawerSection(
              "Why it matters",
              whyHTML
            )
          : ""
      }

      ${mediaHTML}

      ${
        relatedPeopleHTML
          ? renderDrawerSection(
              "Related people",
              relatedPeopleHTML
            )
          : ""
      }

      ${
        relatedEquipmentHTML
          ? renderDrawerSection(
              "Related equipment",
              relatedEquipmentHTML
            )
          : ""
      }

      ${sourcesHTML}
    `;

    drawerElements.content
      .querySelectorAll(
        ".js-drawer-related-link"
      )
      .forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            const relatedItemId =
              button.dataset
                .relatedItemId;

            if (!relatedItemId) {
              return;
            }

            openDetailDrawer(
              relatedItemId,
              {
                overrides
              }
            );
          }
        );
      });
  }

  drawerElements.drawer
    .classList.add("is-open");

  drawerElements.drawer
    .setAttribute(
      "aria-hidden",
      "false"
    );
}

function closeDetailDrawer() {
  const drawerElements =
    getDrawerElements();

  if (!drawerElements.drawer) {
    return;
  }

  drawerElements.drawer
    .classList.remove("is-open");

  drawerElements.drawer
    .setAttribute(
      "aria-hidden",
      "true"
    );
}

function initialiseDetailDrawer() {
  const drawerElements =
    getDrawerElements();

  if (drawerElements.closeButton) {
    drawerElements.closeButton
      .addEventListener(
        "click",
        closeDetailDrawer
      );
  }

  if (drawerElements.drawer) {
    drawerElements.drawer
      .addEventListener(
        "click",
        (event) => {
          if (
            event.target ===
            drawerElements.drawer
          ) {
            closeDetailDrawer();
          }
        }
      );
  }

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        closeDetailDrawer();
      }
    }
  );
}

initialiseDetailDrawer();