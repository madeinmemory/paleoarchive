import { dinosaurs } from "../data/dinosaurs";

let cardObserver = null;

export function setupCardReveal(archive) {
  cardObserver?.disconnect();

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const cards = archive.querySelectorAll(".dinosaur-card");
  if (cards.length === 0) {
    return;
  }

  cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Dinosaur Revealed:", entry.target.dataset.id);
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  cards.forEach((card) => {
    console.log("Now watching dinosaur:", card.dataset.id);
    card.classList.add("reveal-pending");
    cardObserver.observe(card);
  });
}
