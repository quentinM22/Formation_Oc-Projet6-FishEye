let IsLightboxKeyListenerActive = false
document.addEventListener("keydown", function (event) {
	IsLightboxKeyListenerActive ? handleLightboxKeyDown(event) : undefined
})
function handleLightboxKeyDown(event) {
	switch (event.key) {
		case "ArrowLeft":
			changeSlide(-1)
			break
		case "ArrowRight":
			changeSlide(+1)
			break
		case "Escape":
			closeModal()
			break
	}
}

// eslint-disable-next-line no-unused-vars
function openModal() {
	document.querySelector(".mediaModal").style.display = "block"
	document.querySelector("main").style.display = "none"
	document.querySelector("header").style.display = "none"
	IsLightboxKeyListenerActive = true
}

function closeModal() {
	document.querySelector(".mediaModal").style.display = "none"
	document.querySelector("main").style.display = "block"
	document.querySelector("header").style.display = "block"
	IsLightboxKeyListenerActive = false
}

let slideIndex = null

function changeSlide(n) {
	showSlides((slideIndex += n))
}

// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
	showSlides((slideIndex = n + 1))
}

function showSlides(n) {
	let slides = document.getElementsByClassName("mySlides")
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"
	}

	slides[slideIndex - 1].style.display = "block"
}
