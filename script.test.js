const { JSDOM } = require("jsdom");
const { window } = new JSDOM(
  `<!DOCTYPE html><body><div class="menu-links"></div><div class="hamburger-icon"></div></body>`
);
global.document = window.document;

const toggleMenu = require("./script.js");

test("toggleMenu toggles the open class on menu and icon", () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Initial state
  expect(menu.classList.contains("open")).toBe(false);
  expect(icon.classList.contains("open")).toBe(false);

  // First toggle
  toggleMenu();
  expect(menu.classList.contains("open")).toBe(true);
  expect(icon.classList.contains("open")).toBe(true);

  // Second toggle
  toggleMenu();
  expect(menu.classList.contains("open")).toBe(false);
  expect(icon.classList.contains("open")).toBe(false);
});
