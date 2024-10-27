// **** Loader Functionality ****
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const minimumDisplayTime = 3000;

  window.addEventListener("load", () => {
    setTimeout(() => {
      hideLoader(loader);
    }, minimumDisplayTime);
  });
});

/**
 * Hides the loader with a fade-out effect
 * @param {HTMLElement} loader - The loader element to hide
 */
function hideLoader(loader) {
  loader.classList.add("hide");
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
}

// **** Range Slider Functionality ****
/**
 * Updates the range slider's background and displays the current value
 * @param {HTMLInputElement} range
 */
function updateRange(range) {
  const value = ((range.value - range.min) / (range.max - range.min)) * 100;
  range.style.background = `linear-gradient(90deg, #0198DA 0%, #02C4A6 ${value}%, #E8E9EE ${value}%, #858588 100%)`;
  document.getElementById("rangeValue").textContent = `₹${range.value}`;
}

// **** Navigation Menu Functionality ****
const menuIcon = document.querySelector(".ri-menu-3-line");
const closeIcon = document.querySelector(".ri-close-large-fill");
const navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", () => {
  toggleNavBar(true);
});

closeIcon.addEventListener("click", () => {
  toggleNavBar(false);
});

/**
 * Toggles the visibility of the navigation bar
 * @param {boolean} isActive - True to show, false to hide
 */
function toggleNavBar(isActive) {
  if (isActive) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
}

// **** Read More Functionality ****

function toggleReadMore() {
  const content = document.getElementById("content");
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const readMoreBtn = document.getElementById("readMoreBtn");

  const isExpanded = content.classList.contains("expanded");
  content.classList.toggle("expanded", !isExpanded);
  dots.style.display = isExpanded ? "inline" : "none";
  moreText.style.display = isExpanded ? "none" : "inline";
  readMoreBtn.innerText = isExpanded ? "Read More" : "Show Less";
}
