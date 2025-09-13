const itemNav = document.querySelectorAll("#hamburger > *");
const header = document.querySelector("header");
const nav = document.querySelector("#hamburger");

if (!header || !nav) {
  console.error("Required DOM elements not found");
}

nav.classList.add("active");

const hamburger = document.createElement("aside");
const hamburgerButton = document.createElement("button");
hamburgerButton.addEventListener("click", () => toggleSideBar(true));
hamburgerButton.textContent = "menu";
hamburger.classList.add("hidden");
hamburger.classList.add("hamburger-nav");
hamburger.appendChild(hamburgerButton);

const sideBarNav = document.createElement("div");
const closeButton = document.createElement("button");
closeButton.textContent = "close";
closeButton.addEventListener("click", () => toggleSideBar(false));
sideBarNav.appendChild(closeButton);
itemNav.forEach((item) => {
  const clone = item.cloneNode(true);
  sideBarNav.appendChild(clone);
});
sideBarNav.classList.add("hidden");
sideBarNav.id = "sidebar-nav";

header.append(sideBarNav);
header.appendChild(hamburger);

const toggleHamburger = (isActive) => {
  if (isActive) {
    hamburger.classList.add("active");
    hamburger.classList.remove("hidden");
  } else {
    hamburger.classList.remove("active");
    hamburger.classList.add("hidden");
  }
};

const toggleNav = (isActive) => {
  if (isActive) {
    nav.classList.add("active");
    nav.classList.remove("hidden");
  } else {
    nav.classList.remove("active");
    nav.classList.add("hidden");
  }
};

const toggleSideBar = (isActive) => {
  if (isActive) {
    sideBarNav.classList.add("active");
    sideBarNav.classList.remove("hidden");
  } else {
    sideBarNav.classList.remove("active");
    sideBarNav.classList.add("hidden");
  }
};

export const handleScreenWidthChange = (mediaQuery) => {
  if (mediaQuery.matches) {
    toggleHamburger(true);
    toggleNav(false);
  } else {
    toggleHamburger(false);
    toggleNav(true);
    toggleSideBar(false);
  }
};
