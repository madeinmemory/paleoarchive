import "./style.css";

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
<p id="resultCount"></p>

<section id="archive"></section>
</main>

`;

// DATA

const dinosaurs = [
  {
    id: 1,
    name: "Tyrannosaurus rex",
    period: "Late Cretaceous",
    diet: "Carnivore",
    location: "North America",
  },
  {
    id: 2,
    name: "Stegosaurus stenops",
    period: "Late Jurassic",
    diet: "Herbivore",
    location: "North America",
  },
  {
    id: 3,
    name: "Velociraptor mongoliensis",
    period: "Late Cretaceous",
    diet: "Carnivore",
    location: "Asia",
  },
];

// ELEMENTS

const archive = document.querySelector("#archive");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const periodFilter = document.querySelector("#periodFilter");

// FUNCTIONS

function renderDinosaurs(dinosaurList) {
  archive.innerHTML = dinosaurList
    .map((dinosaur) => {
      return `
  <article data-id="${dinosaur.id}">
<h2>${dinosaur.name}</h2>
<p>Period: ${dinosaur.period}</p>
<p>Diet: ${dinosaur.diet}</p>
<p>Location: ${dinosaur.location}</p>
</article>
`;
    })
    .join("");

  if (dinosaurList.length === 0) {
    archive.textContent = "No dinosaurs found. Try another search.";
  }

  const word = dinosaurList.length === 1 ? "dinosaur" : "dinosaurs";
  resultCount.textContent = `${dinosaurList.length} ${word} found.`;
}

function renderDinosaurDetails(dinosaur) {
  archive.innerHTML = `
   <button id="backButton">← Back to archive</button>

   <article class="detail-card">
   <h2>${dinosaur.name}</h2>
   <p>Period: ${dinosaur.period}</p>
   <p>Diet: ${dinosaur.diet}</p>
   <p>Location: ${dinosaur.location}</p>
   </article>
  
  `;
  const backButton = document.querySelector("#backButton");

  backButton.addEventListener("click", () => {
    renderDinosaurs(dinosaurs);
  });
}

function updateDinosaurs() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedPeriod = periodFilter.value;

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
  renderDinosaurs(filteredDinosaurs);
}

//EVENTS

searchInput.addEventListener("input", updateDinosaurs);
periodFilter.addEventListener("change", updateDinosaurs);
archive.addEventListener("click", (event) => {
  const card = event.target.closest("article");

  if (!card) {
    return;
  }

  const dinosaurId = Number(card.dataset.id);

  const selectedDinosaur = dinosaurs.find((dinosaur) => {
    return dinosaur.id === dinosaurId;
  });
  renderDinosaurDetails(selectedDinosaur);
});

//START APP
renderDinosaurs(dinosaurs);
