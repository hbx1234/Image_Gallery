// Array of image paths
const imageList = ["image1.jpg", "image2.png", "image3.avif", "big one.jpg"];
let currentIndex = 0; // Tracks the currently displayed image

// Function to change the main image and caption
function changeImage(imageSrc) {
  const captions = {
    "image1.jpg": "Image 1",
    "image2.png": "Image 2",
    "image3.avif": "Image 3",
    "big one.jpg": "Image 4",
  };

  const currentImage = document.getElementById("current-image");
  const caption = document.getElementById("caption");

  currentIndex = imageList.indexOf(imageSrc); // Update the current index

  currentImage.style.opacity = 0; // Fade out effect
  setTimeout(() => {
    currentImage.src = imageSrc; // Change the image source
    caption.textContent = captions[imageSrc] || "No Caption"; // Update the caption
    currentImage.style.opacity = 1; // Fade in effect
  }, 300);
}

// Add event listeners for keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    // Move to the next image
    currentIndex = (currentIndex + 1) % imageList.length;
    changeImage(imageList[currentIndex]);
  } else if (event.key === "ArrowLeft") {
    // Move to the previous image
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    changeImage(imageList[currentIndex]);
  }
});

// Add fullscreen functionality
const fullscreenBtn = document.getElementById("fullscreen-btn");
const currentImage = document.getElementById("current-image");

fullscreenBtn.addEventListener("click", () => {
  if (currentImage.requestFullscreen) {
    currentImage.requestFullscreen();
  } else if (currentImage.webkitRequestFullscreen) {
    currentImage.webkitRequestFullscreen(); // For Safari
  } else if (currentImage.msRequestFullscreen) {
    currentImage.msRequestFullscreen(); // For Internet Explorer/Edge
  }
});
