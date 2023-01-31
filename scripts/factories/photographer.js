/**
 * Fonction lien entre class Photographer et la view Index
 * @param {données} data
 * @returns
 */
// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
	function getUserCardDOM() {
		// eslint-disable-next-line no-undef
		let article = new Photographer(data).createHtml()
		return article
	}
	return { getUserCardDOM }
}
