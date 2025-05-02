// script.js

// Function to store user preference in localStorage
function storePreference(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Function to retrieve user preference from localStorage
function getPreference(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Function to trigger animation on the image
function triggerAnimation() {
  const image = document.getElementById('animatedImage');
  // Remove the animation class if it exists to restart animation
  image.classList.remove('animate-scale');
  // Trigger reflow to restart animation
  void image.offsetWidth;
  image.classList.add('animate-scale');
}

// Function to save animation preference (e.g., last animation triggered time)
function saveAnimationPreference() {
  const timestamp = new Date().toISOString();
  storePreference('lastAnimation', timestamp);
}

// Function to load and display last animation time (optional)
function loadAnimationPreference() {
  const lastAnimation = getPreference('lastAnimation');
  if (lastAnimation) {
    console.log('Last animation triggered at:', lastAnimation);
  }
}

// Setup event listener for button click
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('animateBtn');
  btn.addEventListener('click', () => {
    triggerAnimation();
    saveAnimationPreference();
  });

  // Load any saved preferences on page load
  loadAnimationPreference();
});
