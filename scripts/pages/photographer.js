async function displayPhotographers(photographer) {
	// eslint-disable-next-line no-undef
	const photographerModel = photographerMediaFactory(photographer) //Envoi data photographer dans Factories>media
	const section = document.querySelector(".photograph-header")
	section.innerHTML = photographerModel.getPhotographerCardDOM()
}

const mediasSection = document.querySelector(".media_section")
const slides = document.querySelector(".slides")
const selectDropdown = document.querySelector("#selectDropdown")
const titleFilters = document.querySelector("#title")
const dateFilters = document.querySelector("#date")
const popularFilters = document.querySelector("#popular")

// Filtres
function sort_array_by(medias, name) {
	mediasSection.innerHTML = ""
	slides.innerHTML = ""
	if (name === "likes") {
		medias.sort((p1, p2) =>
			p1[name] < p2[name] ? 1 : p1[name] > p2[name] ? -1 : 0
		)
	} else {
		medias.sort((p1, p2) =>
			p1[name] > p2[name] ? 1 : p1[name] < p2[name] ? -1 : 0
		)
	}
	return medias
}

async function displayMedia(medias, likes) {
	if (selectDropdown.textContent === "") {
		sort_array_by(medias, "likes")
		selectDropdown.textContent = "Popularité"
		popularFilters.style.display = "none"
	}
	// Filtres
	titleFilters.addEventListener("click", () => {
		let array = sort_array_by(medias, "title")
		selectDropdown.textContent = "Titre"
		displayMedia(array, likes)
		titleFilters.style.display = "none"
		popularFilters.style.display = "block"
		dateFilters.style.display = "block"
	})
	dateFilters.addEventListener("click", () => {
		let array = sort_array_by(medias, "date")
		selectDropdown.textContent = "Date"
		displayMedia(array, likes)
		dateFilters.style.display = "none"
		titleFilters.style.display = "block"
		popularFilters.style.display = "block"
	})
	popularFilters.addEventListener("click", () => {
		let array = sort_array_by(medias, "likes")
		selectDropdown.textContent = "Popularité"
		displayMedia(array, likes)
		popularFilters.style.display = "none"
		dateFilters.style.display = "block"
		titleFilters.style.display = "block"
	})
	medias.forEach((media) => {
		//boucle séparation media via tableau pré trier en amont
		let indexMedia = null
		indexMedia = medias.indexOf(media)
		// eslint-disable-next-line no-undef
		const mediaModel = mediaFactory(media, likes, indexMedia) //Envoi data media dans Factories>media
		//Creation du Dom dans mediaSection
		const mediaCardDOM = mediaModel.getMediaCardDOM()
		mediasSection.innerHTML += mediaCardDOM
	})
}

//Gestion des donnée
async function init() {
	// eslint-disable-next-line no-undef
	const { photographers, media } = await getData() //Récuperation Data
	const catchUrl = new URL(window.location) //Récuperation Url
	const getParams = new URLSearchParams(catchUrl.search)
	const targetParams = getParams.get("id") //Récuperation Id dans Url

	const findPhotographer = photographers.find((e) => targetParams == e.id) //Récuperation Utilisateur via IdUrl
	if (!findPhotographer) {
		const main = document.querySelector("main")
		main.innerHTML = `
    <div class="error flex-col center pt2">
      <h1>Erreur 404: Pages non disponible</h1>
      <a href="index.html" onclick="(this.href)"> Accueil </a>
    </div>
    
    `
	} else {
		const findMedia = [] //Creation tableau pour tri média en fonction de photogrpaherId et Id url
		const allLikes = [] //Récuperation de tout les likes pour les additionnés
		let total = 0
		//Boucle recuperation média
		media.forEach((e) => {
			if (e.photographerId == targetParams) {
				findMedia.push(e)
				allLikes.push(e.likes)
				total += e.likes //Sommes de touts les likes
			}
		})
		//Envoi data dans les différent display
		displayMedia(findMedia, total)
		displayPhotographers(findPhotographer)
	}
}

init()
