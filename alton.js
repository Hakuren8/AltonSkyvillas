let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[slideIndex - 1].classList.add('active');
  dots[slideIndex - 1].classList.add('active');
}

setInterval(() => {
  plusSlides(1);
}, 7000);

function callWhatsapp() {
  const whatsappNumber = "60164771238";
  const message = encodeURIComponent("Hello, I would like to get more information about Alton Skyvillas !");
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}
