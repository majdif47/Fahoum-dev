const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav_links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navlinks.classList.toggle("active");
});

document.querySelectorAll(".neon-button").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navlinks.classList.remove("active");
  })
);

const tabs = document.querySelectorAll(".tab");

tabs.forEach((clickedTab) => {
  clickedTab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    clickedTab.classList.add("active");
  });
});
VANTA.NET({
  el: "#homesec",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xff2e63,
  backgroundColor: 0x252a34,
  points: 15.0,
  spacing: 12.0,
});
VANTA.TOPOLOGY({
  el: "#aboutsec",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xff2e63,
  backgroundColor: 0x252a34,
});
VANTA.TOPOLOGY({
  el: "#contactsec",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xff2e63,
  backgroundColor: 0x252a34,
});
