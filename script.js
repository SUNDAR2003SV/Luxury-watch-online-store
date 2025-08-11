let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Auto Slide Every 4 Seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}, 4000);

// Contact Form Alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  this.reset();
});
