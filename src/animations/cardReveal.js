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

  cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
    card.classList.add("reveal-pending");
    cardObserver.observe(card);
  });
}
