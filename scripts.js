// scripts.js
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Project Slider

document.addEventListener("DOMContentLoaded", () => {
    const projectContent = document.querySelector(".project-content");
    const categories = document.querySelectorAll(".project-category");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    const totalCategories = categories.length;

    // Function to show the current category
    function showCategory(index) {
        projectContent.style.transform = `translateX(-${index * 100}%)`;
    }

    // Move to Next Category
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalCategories; // Loop to start
        showCategory(currentIndex);
    });

    // Move to Previous Category
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalCategories) % totalCategories; // Loop to end
        showCategory(currentIndex);
    });

    // Initial display
    showCategory(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');

  // Event delegation: listen for clicks on images inside any project-category
  document.querySelectorAll('.project-category').forEach(category => {
    category.addEventListener('click', e => {
      const target = e.target;
      if (target.tagName === 'IMG' && target.classList.contains('project-img')) {
        modalImg.src = target.src;
        modalImg.alt = target.alt;
        modal.style.display = 'flex';
      }
    });
  });

  // Close modal when clicking outside the image or on the overlay
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target === modalImg) {
      modal.style.display = 'none';
      modalImg.src = '';
      modalImg.alt = '';
    }
  });

  // Optional: close modal on Escape key press
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      modalImg.src = '';
      modalImg.alt = '';
    }
  });
});
