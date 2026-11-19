// DATA

export const dinosaurs = [
  {
    id: 1,
    name: "Tyrannosaurus rex",
    period: "Late Cretaceous",
    diet: "Carnivore",
    location: "North America",
    description:
      "Tyrannosaurus rex was a massive, two-legged carnivore with a powerful skull, thick teeth, and exceptionally strong jaws capable of crushing bone. Its muscular hind legs supported a heavy body, while its long tail helped maintain balance. Despite having relatively small arms, T. rex possessed strong neck muscles and highly developed senses, including an excellent sense of smell. These adaptations made it a formidable predator capable of hunting large dinosaurs and scavenging carcasses.",
    formation: "Hell Creek Formation",
    discovered: 1905,
    intro:
      "One of the largest known land predators, Tyrannosaurus rex dominated parts of western North America near the end of the Cretaceous Period.",
    fossils:
      "One of the earliest recognized Tyrannosaurus rex specimens was discovered by fossil hunter Barnum Brown in Montana in 1902. Paleontologist Henry Fairfield Osborn formally named the species in 1905. Additional fossils, including remarkably complete skeletons and specimens showing healed injuries, have helped researchers investigate its growth, movement, feeding behavior, and life history. Fossils from the Hell Creek Formation continue to provide valuable evidence about this iconic dinosaur.",
    image: "/images/trex.png",
    model: "/models/trex.glb",
    cardImage: "/images/trex-card.png",
  },
  {
    id: 2,
    name: "Stegosaurus stenops",
    period: "Late Jurassic",
    diet: "Herbivore",
    location: "North America",
    description:
      "Stegosaurus stenops was a large, four-legged herbivore that lived in western North America during the Late Jurassic Period. Its small head, short forelimbs, and long hind limbs gave it a distinctive sloping posture. Two alternating rows of bony plates extended along its back, while four sharp spikes protected the end of its tail. Scientists continue to investigate the functions of its plates, including possible roles in display and temperature regulation.",
    formation: "Morrison Formation",
    discovered: 1887,
    intro:
      "A heavily built herbivorous dinosaur recognized for the distinctive plates along its back and powerful spiked tail.",
    fossils:
      "Stegosaurus stenops was formally described by paleontologist Othniel Charles Marsh in 1887. Fossils discovered in the Morrison Formation have provided valuable evidence about its anatomy and behavior. Several well-preserved specimens have helped researchers reconstruct its unusual skeletal structure, including its plates and tail spikes. Evidence of injuries to other dinosaurs suggests that Stegosaurus could use its spiked tail defensively.",
    image: "/images/stego.png",
    model: "/models/stego.glb",
    cardImage: "/images/stego-card.png",
  },
  {
    id: 3,
    name: "Velociraptor mongoliensis",
    period: "Late Cretaceous",
    diet: "Carnivore",
    location: "Asia",
    description:
      "Velociraptor mongoliensis was a relatively small theropod dinosaur that lived in what is now Mongolia during the Late Cretaceous Period. Unlike its popular movie portrayal, Velociraptor was roughly the size of a turkey in height and possessed feathers. Its lightweight body, long stiffened tail, and powerful hind limbs helped it move efficiently. Each foot carried an enlarged, curved claw that likely played an important role in gripping and restraining prey.",
    formation: "Djadochta Formation",
    discovered: 1924,
    intro:
      "A small, agile, feathered predator known for its distinctive sickle-shaped claws and lightweight build.",
    fossils:
      "Velociraptor mongoliensis was formally named by paleontologist Henry Fairfield Osborn in 1924. One of its most remarkable fossils, known as the Fighting Dinosaurs, preserves a Velociraptor locked in combat with a Protoceratops. Discovered in Mongolia in 1971, this specimen provides rare evidence of direct interactions between prehistoric animals. Fossil evidence of feather attachment structures on Velociraptor's forearm also supports the conclusion that it possessed feathers.",
    image: "/images/raptor.png",
    model: "",
    cardImage: "/images/raptor-card.png",
  },
  {
    id: 4,
    name: "Coelophysis bauri",
    period: "Triassic",
    diet: "Carnivore",
    location: "North America (New Mexico)",
    description:
      'Coelophysis was an early theropod dinosaur characterized by its lightweight body, long neck, slender legs, and narrow skull. Its name means "hollow form," referring to its lightly built bones. This small carnivore walked on two legs and likely hunted smaller animals in the ancient environments of what is now the southwestern United States.',
    formation: "Chinle Formation",
    discovered: 1887,
    intro:
      "A slender, fast-moving predator that roamed North America during the Late Triassic, long before the age of giant dinosaurs.",
    fossils:
      "Coelophysis is particularly famous for the remarkable fossil discoveries at Ghost Ranch, New Mexico. In 1947, researchers uncovered a dense concentration of skeletons, providing scientists with unusually detailed evidence about this early dinosaur. The discovery helped make Coelophysis one of the best-known dinosaurs of the Triassic Period.",
    image: "/images/coelophysis.png",
    model: "/models/coelophysis.glb",
    cardImage: "/images/coelophysis-card.png",
  },
  {
    id: 5,
    name: "Plateosaurus trossingensis",
    period: "Triassic",
    diet: "Herbivore",
    location: "Europe (Germany and Switzerland)",
    description:
      "Plateosaurus was an early sauropodomorph dinosaur with a long neck, small head, powerful hind limbs, and a lengthy tail. Although related to the gigantic sauropods of later periods, Plateosaurus was much smaller and could move on two legs. Its strong forelimbs and grasping hands may have helped it handle vegetation while feeding.",
    formation: "Trossingen Formation",
    discovered: 1913,
    intro:
      "A long-necked, plant-eating dinosaur that roamed Europe during the Late Triassic, millions of years before the giant sauropods.",
    fossils:
      "Plateosaurus is one of the best-known dinosaurs of the Triassic Period thanks to extensive fossil discoveries across Europe. Important fossil sites in Trossingen and Halberstadt, Germany, and Frick, Switzerland, have yielded numerous skeletons. These discoveries have helped researchers investigate its anatomy, growth, and evolutionary relationships.",
    image: "/images/plateosaurus.png",
    model: "/models/plateosaurus.glb",
    cardImage: "/images/plateosaurus-card.png",
  },
  {
    id: 6,
    name: "Allosaurus fragilis",
    period: "Jurassic",
    diet: "Carnivore",
    location: "North America (Western United States)",
    description:
      "Allosaurus was a large carnivorous theropod dinosaur known for its massive jaws, sharp serrated teeth, and distinctive ridges above its eyes. It walked on two powerful hind legs and possessed relatively short but muscular arms with three clawed fingers. As one of the dominant predators of the Late Jurassic, Allosaurus likely hunted large herbivorous dinosaurs that shared its environment.",
    formation: "Morrison Formation",
    discovered: 1877,
    intro:
      "A powerful predator of the Late Jurassic, Allosaurus roamed prehistoric North America millions of years before Tyrannosaurus rex.",
    fossils:
      "Allosaurus was first described by paleontologist Othniel Charles Marsh in 1877. Numerous fossils have since been discovered in the Morrison Formation of western North America. One particularly important site is the Cleveland-Lloyd Dinosaur Quarry in Utah, where the remains of many Allosaurus individuals have been uncovered. These discoveries have made Allosaurus one of the best-studied large theropods of the Jurassic Period.",
    image: "/images/allosaurus.png",
    model: "/models/allosaurus.glb",
    cardImage: "/images/allosaurus-card.png",
  },
  {
    id: 7,
    name: "Diplodocus carnegii",
    period: "Jurassic",
    diet: "Herbivore",
    location: "North America (Wyoming)",
    description:
      "Diplodocus was a massive sauropod dinosaur characterized by its exceptionally long neck, small head, pillar-like legs, and extremely lengthy, whip-like tail. Despite its enormous size, its body was relatively slender compared with some other giant sauropods. Diplodocus walked on four legs and fed on vegetation, likely using its specialized teeth to strip leaves from plants.",
    formation: "Morrison Formation",
    discovered: 1901,
    intro:
      "A gigantic, long-necked herbivore that roamed North America during the Late Jurassic, using its extraordinary neck and tail to create one of the most recognizable silhouettes of the dinosaur age.",
    fossils:
      'Diplodocus carnegii became one of the most famous dinosaurs in the world following fossil discoveries in Wyoming during the late nineteenth century. The species was described by John Bell Hatcher in 1901 and named in honor of Andrew Carnegie. Casts of its skeleton, famously nicknamed "Dippy," were distributed to museums around the world, helping introduce generations of visitors to these enormous Jurassic.',
    image: "/images/diplodocus.png",
    model: "/models/diplodocus.glb",
    cardImage: "/images/diplodocus-card.png",
  },
  {
    id: 8,
    name: "Triceratops horridus",
    period: "Cretaceous",
    diet: "Herbivore",
    location: "North America (Montana and Wyoming)",
    description:
      "Triceratops was a large, four-legged herbivorous dinosaur recognized by its three facial horns, broad bony frill, and powerful beak. Its strong jaws and closely packed teeth were adapted for processing tough vegetation. Despite its intimidating appearance, Triceratops primarily fed on plants and shared its ancient environment with predators such as Tyrannosaurus rex.",
    formation: "Hell Creek Formation",
    discovered: 1889,
    intro:
      "A massive, three-horned herbivore that roamed North America during the Late Cretaceous, protected by its impressive horns and enormous bony frill.",
    fossils:
      'Triceratops was named by paleontologist Othniel Charles Marsh in 1889, following fossil discoveries in western North America. Numerous specimens have since been uncovered, particularly from Late Cretaceous formations in Montana and Wyoming. One remarkable specimen, nicknamed "Horridus," was discovered in Montana in 2014 and is now displayed at Melbourne Museum in Australia. Its unusually complete skeleton provides valuable evidence about the anatomy of this famous horned dinosaur.',
    image: "/images/triceratops.png",
    model: "/models/triceratops.glb",
    cardImage: "/images/triceratops-card.png",
  },
  {
    id: 9,
    name: "Spinosaurus aegyptiacus",
    period: "Cretaceous",
    diet: "Carnivore",
    location: "North Africa (Egypt and Morocco)",
    description:
      "Spinosaurus was one of the largest known carnivorous dinosaurs, distinguished by its elongated jaws, conical teeth, and towering sail formed by unusually tall vertebral spines. Unlike many other large theropods, Spinosaurus possessed adaptations associated with aquatic environments, including dense bones and a flexible, deep tail. Its diet included fish, although scientists continue to debate exactly how it hunted and moved through water.",
    formation: "Bahariya Formation",
    discovered: 1915,
    intro:
      "An enormous, sail-backed predator that inhabited the waterways of North Africa during the Cretaceous Period, possessing remarkable adaptations associated with life around water.",
    fossils:
      "Spinosaurus aegyptiacus was first described by German paleontologist Ernst Stromer in 1915, based on fossils discovered in Egypt's Bahariya Formation. Tragically, the original fossils were destroyed during World War II when the museum housing them was bombed. Later discoveries in North Africa, particularly Morocco, provided new evidence about the dinosaur's unusual anatomy and possible aquatic lifestyle. These findings have dramatically changed scientific reconstructions of Spinosaurus.",
    image: "/images/spinosaurus.png",
    model: "/models/spinosaurus.glb",
    cardImage: "/images/spinosaurus-card.png",
  },
];
