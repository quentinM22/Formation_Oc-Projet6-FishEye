const btnDrop = document.querySelector(".dropbtn")
const myDropdown = document.querySelector("#myDropdown")
const chevron = document.querySelector(".chevron")
// eslint-disable-next-line no-unused-vars
function closeDropdown() {
	myDropdown.classList.toggle("show")
	btnDrop.setAttribute("aria-expanded", false)
	chevron.classList.replace("fa-chevron-up", "fa-chevron-down")
}
btnDrop.addEventListener("click", () => {
	myDropdown.classList.toggle("show")
	if (btnDrop.getAttribute("aria-expanded") == "false") {
		btnDrop.setAttribute("aria-expanded", true)
		chevron.classList.replace("fa-chevron-down", "fa-chevron-up")
	} else {
		btnDrop.setAttribute("aria-expanded", false)
		chevron.classList.replace("fa-chevron-up", "fa-chevron-down")
	}
})
