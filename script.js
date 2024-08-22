/**
 * @description Smooth scrolls to the specified section on the page without changing the URL.
 *
 * @param {integer} sectionNumber - The section number to be scrolled to.
 * @param {boolean} logo - A boolean stating whether the click has come from the logo or not.
 * @returns {void}
 */
function scrollToSection(sectionNumber, logo = false) {
  const section = document.getElementById(`section-${sectionNumber}`);
  const headerOffset = document.querySelector("header").offsetHeight;

  const elementPosition =
    section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition + 10,
    behavior: "smooth",
  });

  if (window.innerWidth < 640 && !logo) {
    toggleMobileMenu();
  }
}

/**
 * @description Toggles the visibility of the navigation menu.
 *
 * @returns {void}
 */
function displayMenu() {
  document.querySelector("nav").classList.toggle("show-navigation");
}

/**
 * @description Toggles the visibility of the mobile menu.
 * 
 * @returns {void}
 */
function toggleMobileMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}
