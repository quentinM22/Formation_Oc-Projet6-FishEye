// eslint-disable-next-line no-unused-vars
function photographerMediaFactory(data) {
	// eslint-disable-next-line no-undef
	document.title = new Photographer(data).createMediaTitle()
	function getPhotographerCardDOM() {
		const loaderName = document.querySelector("#loaderName")
		const pricePerDay = document.querySelector(".pricePerDay")
		const modalName = document.querySelector("#name")
		/* eslint-disable no-undef */
		let photographerCard = new Photographer(data).createMediaHtml()
		loaderName.textContent = new Photographer(data).targetName()
		pricePerDay.textContent = new Photographer(data).priceCardFixed()
		modalName.innerHTML = new Photographer(data).targetName()
		/* eslint-anable no-undef */
		return photographerCard
	}
	return { getPhotographerCardDOM }
}

/**
 * Fonction lien entre class media(image et video) et view Photographer
 * @param {données} data
 * @param {nombre de like total} otherData
 * @param {index du media} index
 * @returns
 */
// eslint-disable-next-line no-unused-vars
function mediaFactory(data, otherData, index) {
	let totalLikes = otherData
	let mediaSlide
	let article

	function getMediaCardDOM() {
		/* Création Dom */
		const allLike = document.querySelector(".allLikes")
		allLike.textContent = totalLikes + " "
		/* eslint-disable no-undef */
		if (data.image) {
			article = new Image(data).createHtml(index)
			mediaSlide = new Image(data).createSlide()
		} else if (data.video) {
			article = new Video(data).createHtml(index)
			mediaSlide = new Video(data).createSlide()
		}
		/* eslint-anable no-undef */
		const slides = document.querySelector(".slides")
		slides.innerHTML += mediaSlide
		return article
	}
	return { getMediaCardDOM }
}
