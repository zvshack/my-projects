// Get modal elements
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("imgModal");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Loop through all images with the 'enlargeable' class
document.querySelectorAll(".enlargeable").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

// Close modal on X click
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Optional: Close modal when clicking outside the image
modal.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};