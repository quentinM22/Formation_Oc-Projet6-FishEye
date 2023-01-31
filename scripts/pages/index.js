/**
 * Controlleur photograppheur
 * @param {dataPhotographer} photographers
 */
async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section")
	photographers.forEach((photographer) => {
		// eslint-disable-next-line no-undef
		const photographerModel = photographerFactory(photographer)
		const userCardDOM = photographerModel.getUserCardDOM()
		photographersSection.innerHTML += userCardDOM
	})
}
/**
 * Récuperation data Photographers
 */
async function init() {
	// eslint-disable-next-line no-undef
	const { photographers } = await getData()
	displayData(photographers)
}

init()
