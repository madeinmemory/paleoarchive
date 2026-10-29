import "./style.css";

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
}

function searchDinosaurs() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredDinosaurs = dinosaurs.filter((dinosaur) => {
    return (
      dinosaur.name.toLowerCase().includes(searchTerm) ||
      dinosaur.period.toLowerCase().includes(searchTerm) ||
      dinosaur.diet.toLowerCase().includes(searchTerm) ||
      dinosaur.location.toLowerCase().includes(searchTerm)
    );
  });
  renderDinosaurs(filteredDinosaurs);
}

//EVENTS

searchInput.addEventListener("input", searchDinosaurs);

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
