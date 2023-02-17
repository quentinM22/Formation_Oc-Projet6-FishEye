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
const myModal = document.querySelector("#myModal")
const close = myModal.querySelector(".close")
const prev = myModal.querySelector(".prev")
const next = myModal.querySelector(".next")
// eslint-disable-next-line no-unused-vars
function openModal() {
	document.querySelector(".mediaModal").style.display = "block"
	document.querySelector("main").style.display = "none"
	document.querySelector("header").style.display = "none"
	close.setAttribute("tabindex", "0")
	prev.setAttribute("tabindex", "0")
	next.setAttribute("tabindex", "0")

	IsLightboxKeyListenerActive = true
}

function closeModal() {
	document.querySelector(".mediaModal").style.display = "none"
	document.querySelector("main").style.display = "block"
	document.querySelector("header").style.display = "block"
	close.setAttribute("tabindex", "-1")
	prev.setAttribute("tabindex", "-1")
	next.setAttribute("tabindex", "-1")
	IsLightboxKeyListenerActive = false
}

// //Rester dans la modal
myModal.addEventListener("keydown", (e) => {
	if (e.key === "Tab") {
		if (document.activeElement === next) {
			e.preventDefault()
			close.focus()
		}
	}
})

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
