// Dots and text
const dot1Text = document.querySelector(".dot1-text");
dot1Text.addEventListener("mouseenter", () => {
  gsap.to(".dot1-text", { color: "black", duration: 2 });
});
dot1Text.addEventListener("mouseleave", () => {
  gsap.to(".dot1-text", { color: "", duration: 2 });
});




// Text on orange animation
const tl = gsap.timeline({ defaults: { duration: 0.75 } });

tl.fromTo(
  ".text-container h1",
  { x: "100%", opacity: 0.5 },
  { x: 0, opacity: 1 }
);

tl.fromTo(
  ".text-container h2",
  { x: "-100%", opacity: 0.5 },
  { x: 0, opacity: 1 },
  "<"
);

tl.fromTo(
  ".text-container p",
  { y: "100%", opacity: 0.5 },
  { y: 0, opacity: 1 },
  "<"
);

//Boxes animation
tl.fromTo(
  ".box",
  { x: 0 },
  {
    x: "1000%",
    rotate: 160,
    ease: "bounce.out",
    y: 0,
    duration: 2.5,
    stagger: 0.25
  }
);

//dot and word animation
