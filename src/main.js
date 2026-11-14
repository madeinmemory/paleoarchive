import "./style.css";
import { dinosaurs } from "./data/dinosaurs.js";
import { getDinosaurWord } from "./utils/getDinosaurWord.js";
import "@google/model-viewer";

//CONSTANTS

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
<label for="searchInput">Search Dinosaurs</label>
<input type="text" 
id="searchInput"
placeholder="Search PaleoArchive..."
>

<label for="periodFilter">Filter by Period</label>
<select id="periodFilter">
<option value="all">All Periods</option>
<option value="Triassic">Triassic</option>
<option value="Jurassic">Jurassic</option>
<option value="Cretaceous">Cretaceous</option>
</select>

<label for="sortOrder">Sort Dinosaurs</label>
<select id="sortOrder">
<option value="az">Name: A-Z</option>
<option value="za">Name: Z-A</option>
</select>

<button id="resetFilters">Reset Filters</button>
<p id="resultCount"></p>

<section id="archive"></section>
</main>

`;

// ELEMENTS

const archive = document.querySelector("#archive");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const periodFilter = document.querySelector("#periodFilter");
const sortOrder = document.querySelector("#sortOrder");
const resetFilters = document.querySelector("#resetFilters");
// FUNCTIONS

function renderDinosaurs(dinosaurList) {
  archive.innerHTML = dinosaurList
    .map((dinosaur) => {
      return `
  <article data-id="${dinosaur.id}">
  <button>
<h2>${dinosaur.name}</h2>
<p>Period: ${dinosaur.period || "Unknown"}</p>
<p>Diet: ${dinosaur.diet || "Unknown"}</p>
<p>Location: ${dinosaur.location || "Unknown"}</p>
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
}

function renderDinosaurDetails(dinosaur) {
  archive.innerHTML = `
   <button id="backButton">← Back to archive</button>

   <article class="detail-card">
   <h2>${dinosaur.name}</h2>

   <p class="dinosaur-intro"> ${dinosaur.intro || "Explore this prehistoric dinosaur."}</p>
  
   ${dinosaur.model ? `<div class="view-toggle"><button id="showIllustration" class="active" aria-pressed="true">Show Illustration</button> <button id="showSkeleton" class="active" aria-pressed="false">Show Skeleton</button></div>` : ""}
   ${dinosaur.image ? `<img class="dinosaur-hero" id="illustrationView" src="${dinosaur.image}" alt="Illustrated reconstruction of ${dinosaur.name}" />` : ""}
   ${dinosaur.model ? `<model-viewer class="dinosaur-model" id="skeletonView" hidden src="${dinosaur.model}" alt="Interactive 3D model of ${dinosaur.name}" auto-rotate auto-rotate-delay="0" rotation-per-second="5deg" camera-controls ></model-viewer>` : ""}

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
    showSkeleton.addEventListener("click", () => {
      showSkeleton.classList.add("active");
      showIllustration.classList.remove("active");
      illustrationView.hidden = true;
      skeletonView.hidden = false;
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
