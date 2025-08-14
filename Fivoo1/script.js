// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navbar = document.querySelector(".navbar");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
      // Close mobile menu after click
      if (navMenu && hamburger) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  // Portfolio Scroll Animation
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  if (portfolioItems.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.2
    });

    portfolioItems.forEach(item => observer.observe(item));
  }

  // Optional: Dynamic Typing Effect in Header (if #element exists)
  const element = document.getElementById("element");
if (element) {
  const textArray = ["Web Development", "Graphic Design", "Video Editing", "Animation"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = textArray[textIndex];
    element.textContent = currentText.substring(0, charIndex);
    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % textArray.length;
      }
      setTimeout(type, 1000);
    }
  }
  type();
}

  // Sticky Navbar Shadow on Scroll
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("shadow");
      } else {
        navbar.classList.remove("shadow");
      }
    });
  }
    // Email Link Toggle
    const emailLink = document.getElementById("hiddenEmailLink");
    if (emailLink) {
      emailLink.addEventListener("click", () => {
        const email = "fivoo.co@gmail.com";
        const mailtoLink = `mailto:${email}`;
        emailLink.setAttribute("href", mailtoLink);
        emailLink.style.display = "inline"; // Show the link
        emailLink.textContent = email; // Update the text to show the email address
      });
    // Hide the email link initially
    emailLink.style.display = "none";
    }
    // Hide email link on page load
    document.addEventListener("DOMContentLoaded", () => {
      const emailLink = document.getElementById("hiddenEmailLink");
      if (emailLink) {
        emailLink.style.display = "none"; // Hide the email link initially
      }
    });
    // Show email link on click
    document.getElementById("hiddenEmailLink").addEventListener("click", function() {
      this.style.display = "inline"; // Show the email link
      this.textContent = "fivoo.co@gmail.com"; // Update the text to show the email address
      this.removeEventListener("click", arguments.callee); // Remove the click event listener to prevent further clicks from hiding it again
    });
    //scroll to top button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
    // Hide scroll to top button initially
    scrollToTopBtn.style.display = "none";
    // Show scroll to top button on scroll
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
})
