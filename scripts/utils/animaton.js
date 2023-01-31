function showContent() {
	document.querySelector(".loader").classList.add("hidden")
}
setTimeout(showContent, 2000)
function showMedia() {
	findMediaSection.classList.add("fade")
}
const findMediaSection = document.querySelector(".media_section")
if (findMediaSection) {
	setTimeout(showMedia, 3000)
}
