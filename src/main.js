import "./style.css";
import { dinosaurs } from "./data/dinosaurs.js";
import { getDinosaurWord } from "./utils/getDinosaurWord.js";

//CONSTANTS

//APP

const app = document.querySelector("#app");

app.innerHTML = `
<header>
<h1>PaleoArchive</h1>
<p>Explore prehistoric life.</p>
</header>

<main>
<input type="text" 
id="searchInput"
placeholder="Search PaleoArchive..."
>
<select id="periodFilter">
<option value="all">All Periods</option>
<option value="Triassic">Triassic</option>
<option value="Jurassic">Jurassic</option>
<option value="Cretaceous">Cretaceous</option>
</select>

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
<h2>${dinosaur.name}</h2>
<p>Period: ${dinosaur.period || "Unknown"}</p>
<p>Diet: ${dinosaur.diet || "Unknown"}</p>
<p>Location: ${dinosaur.location || "Unknown"}</p>
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
   <section class="overview">
   <h3>Overview</h3>
   <p>Description: ${dinosaur.description || "No description available."}</p>
   <p>Diet: ${dinosaur.diet || "Unknown"}</p>
   <p>Location: ${dinosaur.location || "Unknown"}</p>
   </section>

   <section class="geology">
   <h3>Geology</h3>
   <p>Period: ${dinosaur.period || "Unknown"}</p>
   <p>Formation: ${dinosaur.formation || "Unknown"}</p>
    </section>

    <section class="discovery">
    <h3>Discovery</h3>
   <p>Species named: ${dinosaur.discovered || "Unknown"}</p>
   </section>
   </article>
  
  `;
  const backButton = document.querySelector("#backButton");

  backButton.addEventListener("click", () => {
    updateDinosaurs(dinosaurs);
  });
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
