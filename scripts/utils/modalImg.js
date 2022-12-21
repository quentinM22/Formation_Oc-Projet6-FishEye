function openModal() {
    document.querySelector(".mediaModal").style.display = "block";
  }
  
  function closeModal() {
    document.querySelector(".mediaModal").style.display = "none";
  }
  
  let slideIndex = null;
//   showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n + 1);
  }
  
  function showSlides(n) {
    console.log(n);

    let slides = document.getElementsByClassName("mySlides");
    console.log(slides.length);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }