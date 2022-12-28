let IsLightboxKeyListenerActive = false;
document.addEventListener('keydown',
  function (event) {
    IsLightboxKeyListenerActive ? handleLightboxKeyDown(event) : undefined;
  }
);
function handleLightboxKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
      plusSlides(-1)
      break;
    case "ArrowRight":
      plusSlides(+1)
      break;
    case "Escape":
      closeModal();
      break;
  }
}

function openModal() {
  document.querySelector(".mediaModal").style.display = "block";
  document.querySelector("main").style.display = "none"
  IsLightboxKeyListenerActive = true
}

function closeModal() {
  document.querySelector(".mediaModal").style.display = "none";
  document.querySelector("main").style.display = "block"
  IsLightboxKeyListenerActive = false;
}

let slideIndex = null;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n + 1);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
