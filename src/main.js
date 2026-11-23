// IMPORTS

import "./style.css";
import { dinosaurs } from "./data/dinosaurs.js";
import { getDinosaurWord } from "./utils/getDinosaurWord.js";
import { setupCardReveal } from "./animations/cardReveal.js";

//APP

const app = document.querySelector("#app");

app.innerHTML = `
<header class="site-header">
  <p class="site-label">DIGITAL NATURAL HISTORY ARCHIVE</p>
  <h1>PaleoArchive</h1>
  <p class="site-description">
    Explore prehistoric life through interactive exhibits,
    scientific discoveries, and ancient species.
  </p>
</header>

<main>
<section class="archive-controls">
<h2>Explore the Collection</h2>

<div class="search-field">

<label for="searchInput">Search Dinosaurs</label>
<input type="text" 
id="searchInput"
placeholder="Search PaleoArchive..."
>
</div>

<div class="filter-row">
<div class="filter-field">
<label for="periodFilter">Filter by Period</label>
<select id="periodFilter">
<option value="all">All Periods</option>
<option value="Triassic">Triassic</option>
<option value="Jurassic">Jurassic</option>
<option value="Cretaceous">Cretaceous</option>
</select>
</div>

<div class="filter-field">
<label for="sortOrder">Sort Dinosaurs</label>
<select id="sortOrder">
<option value="az">Name: A-Z</option>
<option value="za">Name: Z-A</option>
</select>
</div>
</div>

<div class="results-toolbar">
<p id="resultCount"></p>
<button id="resetFilters">Reset Filters</button>
</div>

</section>

<section id="archive"></section>

<section class="coming-soon" id="comingSoon">
  <p class="coming-soon-label">THE ARCHIVE IS GROWING</p>
  <h2>More Dinosaurs Coming Soon</h2>
  <p>New prehistoric exhibits are on the horizon. Stay tuned for future additions.</p>
</section>

<footer class="site-footer">
  <span>PaleoArchive</span>
  <span>v1.0</span>
</footer>
</main>

`;

// ELEMENTS

const archive = document.querySelector("#archive");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const periodFilter = document.querySelector("#periodFilter");
const sortOrder = document.querySelector("#sortOrder");
const resetFilters = document.querySelector("#resetFilters");
const comingSoon = document.querySelector("#comingSoon");
// FUNCTIONS

function renderDinosaurs(dinosaurList) {
  comingSoon.hidden = false;
  archive.innerHTML = dinosaurList
    .map((dinosaur) => {
      return `
        <article class="dinosaur-card" data-id="${dinosaur.id}">
          <button type="button" class="card-button">

            ${
              dinosaur.cardImage
                ? `
              <img
                class="card-image"
                src="${dinosaur.cardImage}"
                alt=""
                loading="lazy"
              >
            `
                : ""
            }

            <div class="card-content">
              <h2>${dinosaur.name}</h2>
              <span class="learn-more">Learn More →</span>
            </div>

          </button>
        </article>
      `;
    })
    .join("");

  if (dinosaurList.length === 0) {
    archive.textContent = "No dinosaurs found. Try another search.";
  }

  const word = getDinosaurWord(dinosaurList.length);
  resultCount.textContent = `${dinosaurList.length} ${word} found.`;

  setupCardReveal(archive);
}

function renderDinosaurDetails(dinosaur) {
  comingSoon.hidden = true;
  archive.innerHTML = `
   <button id="backButton">← Back to archive</button>

   <article class="detail-card">
   <h2>${dinosaur.name}</h2>

   <p class="dinosaur-intro"> ${dinosaur.intro || "Explore this prehistoric dinosaur."}</p>

   <div class="exhibit-media">

   ${dinosaur.model ? `<div class="view-toggle"><button id="showIllustration" class="active" aria-pressed="true">Show Illustration</button> <button id="showSkeleton" aria-pressed="false">Show Skeleton</button></div>` : ""}
   ${dinosaur.image ? `<img class="dinosaur-hero" id="illustrationView" src="${dinosaur.image}" alt="Illustrated reconstruction of ${dinosaur.name}" />` : ""}
   ${dinosaur.model ? `<model-viewer class="dinosaur-model" id="skeletonView" hidden data-src="${dinosaur.model}" alt="Interactive 3D model of ${dinosaur.name}" auto-rotate auto-rotate-delay="0" rotation-per-second="5deg" camera-controls ></model-viewer>` : ""}
   </div>

   ${
     dinosaur.modelUrl
       ? `
  <a
    href="${dinosaur.modelUrl}"
    target="_blank"
    rel="noopener noreferrer"
    class="model-credit"
  >
    View original 3D model ↗
  </a>
`
       : ""
   }

   <section class="quick-facts">
   <h3>Quick Facts</h3>
   <div class="fact">
   <span class="fact-label">Period:</span>
   <p class="fact-value"> ${dinosaur.period || "Unknown"}</p>
   </div>
   <div class="fact">
    <span class="fact-label">Diet:</span>
    <p class="fact-value"> ${dinosaur.diet || "Unknown"}</p>
    </div>
    <div class="fact">
    <span class="fact-label">Species named:</span>
    <p class="fact-value"> ${dinosaur.discovered || "Unknown"}</p>
    </div>
    <div class="fact">
    <span class="fact-label">Location:</span>
    <p class="fact-value"> ${dinosaur.location || "Unknown"}</p>
    </div>
    <div class="fact">
    <span class="fact-label">Formation:</span>
    <p class="fact-value"> ${dinosaur.formation || "Unknown"}</p>
    </div>
   </section>

   <section class="dinosaur-story">
   <h3>About ${dinosaur.name}</h3>

   <p>${dinosaur.description || "No description available."}</p>

   ${dinosaur.fossils ? `<p>${dinosaur.fossils}</p>` : ""}
   </section>
   </article>
  
  `;
  const backButton = document.querySelector("#backButton");

  backButton.addEventListener("click", () => {
    updateDinosaurs(dinosaurs);
  });

  const illustrationView = document.querySelector("#illustrationView");
  const skeletonView = document.querySelector("#skeletonView");
  const showIllustration = document.querySelector("#showIllustration");
  const showSkeleton = document.querySelector("#showSkeleton");

  if (dinosaur.model && dinosaur.image) {
    showIllustration.addEventListener("click", () => {
      illustrationView.hidden = false;
      skeletonView.hidden = true;
      showIllustration.classList.add("active");
      showSkeleton.classList.remove("active");
      showIllustration.setAttribute("aria-pressed", "true");
      showSkeleton.setAttribute("aria-pressed", "false");
    });
    showSkeleton.addEventListener("click", async () => {
      showSkeleton.classList.add("active");
      showIllustration.classList.remove("active");
      illustrationView.hidden = true;
      skeletonView.hidden = false;
      if (!skeletonView.hasAttribute("src")) {
        await import("@google/model-viewer");
        skeletonView.src = skeletonView.dataset.src;
      }
      showSkeleton.setAttribute("aria-pressed", "true");
      showIllustration.setAttribute("aria-pressed", "false");
    });
  }
}

function updateDinosaurs() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedPeriod = periodFilter.value;
  const selectedSort = sortOrder.value;

  const filteredDinosaurs = dinosaurs.filter((dinosaur) => {
    const matchesSearch =
      dinosaur.name.toLowerCase().includes(searchTerm) ||
      dinosaur.period.toLowerCase().includes(searchTerm) ||
      dinosaur.diet.toLowerCase().includes(searchTerm) ||
      dinosaur.location.toLowerCase().includes(searchTerm);
    const matchesPeriod =
      dinosaur.period.includes(selectedPeriod) || selectedPeriod === "all";
    return matchesSearch && matchesPeriod;
  });

  if (selectedSort === "az") {
    filteredDinosaurs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === "za") {
    filteredDinosaurs.sort((a, b) => b.name.localeCompare(a.name));
  }

  renderDinosaurs(filteredDinosaurs);
}

//EVENTS

searchInput.addEventListener("input", updateDinosaurs);
periodFilter.addEventListener("change", updateDinosaurs);
sortOrder.addEventListener("change", updateDinosaurs);
archive.addEventListener("click", (event) => {
  const card = event.target.closest("article");

  if (!card || !card.dataset.id) {
    return;
  }

  const dinosaurId = Number(card.dataset.id);

  const selectedDinosaur = dinosaurs.find((dinosaur) => {
    return dinosaur.id === dinosaurId;
  });
  renderDinosaurDetails(selectedDinosaur);
});

resetFilters.addEventListener("click", () => {
  searchInput.value = "";
  periodFilter.value = "all";
  sortOrder.value = "az";
  updateDinosaurs();
});

//START APP
renderDinosaurs(dinosaurs);
