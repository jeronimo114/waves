const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");

link1.addEventListener("mouseover", () => {
  gsap.to(link1, { y: 5, x: 1, duration: 0.3 });
});
link1.addEventListener("mouseleave", () => {
  gsap.to(link1, { y: 0, x: 0, duration: 0.3 });
});
link2.addEventListener("mouseover", () => {
  gsap.to(link2, { y: 5, x: 1, duration: 0.3 });
});
link2.addEventListener("mouseleave", () => {
  gsap.to(link2, { y: 0, x: 0, duration: 0.3 });
});
link3.addEventListener("mouseover", () => {
  gsap.to(link3, { y: 5, x: 1, duration: 0.3 });
});
link3.addEventListener("mouseleave", () => {
  gsap.to(link3, { y: 0, x: 0, duration: 0.3 });
});

gsap.to(window, { duration: 0.5, scrollTo: ".about" });
