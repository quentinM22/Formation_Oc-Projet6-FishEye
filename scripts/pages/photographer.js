async function getData() {
    const url = 'data/photographers.json'
    return await fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(error=> console.log("erreur: " + error))
}


async function  displayPhotographers(photographer) {
    const photographerModel = photographerFactory(photographer); //Envoi data photogrpaher dans Factories>media
    photographerModel.getPhotographerCardDOM();
};


const mediasSection = document.querySelector(".media_section");
const titleFilters = document.querySelector('#title')
const dateFilters = document.querySelector('#date')
const popularFilters = document.querySelector('#popular')


 function sort_array_by(medias, name) {
        mediasSection.innerHTML = ""
        medias.sort((p1, p2)=>(p1[name] > p2[name])? 1 : (p1[name] < p2[name])? -1 : 0)
         return medias
     }

async function displayMedia(medias, likes) {
    
    // Filtres
    titleFilters.addEventListener("click", ()=>{
        let array = sort_array_by(medias, "title")
        displayMedia(array, likes)
    })
    dateFilters.addEventListener("click", ()=>{
        let array = sort_array_by(medias, "date")
        displayMedia(array, likes)
    })
    popularFilters.addEventListener("click", ()=>{
        let array = sort_array_by(medias, 'likes')
        displayMedia(array, likes)
    })
    

    medias.forEach((media) => { //boucle séparation media via tableau pré trier en amont
        
        let indexMedia = null
        indexMedia = medias.indexOf(media)
        const mediaModel = mediaFactory(media, likes, indexMedia); //Envoi data media dans Factories>media
        //Creation du Dom dans mediaSection 
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
    });
};

//Gestion des donnée
async function init() {
    const { photographers, media } = await getData(); //Récuperation Data
    const catchUrl = new URL(window.location) //Récuperation Url 
    const getParams = new URLSearchParams(catchUrl.search) 
    const targetParams = getParams.get("id") //Récuperation Id dans Url
    const findPhotographer = photographers.find((e) => targetParams == e.id) //Récuperation Utilisateur via IdUrl
    const findMedia = [] //Creation tableau pour tri média en fonction de photogrpaherId et Id url
    const allLikes = [] //Récuperation de tout les likes pour les additionnés
    let total = 0
    //Boucle recuperation média
    media.forEach((e) => {
        if(e.photographerId == targetParams){
            findMedia.push(e)
            allLikes.push(e.likes)
            total += e.likes //Sommes de touts les likes
        }
    })

    //Envoi data dans les différent display
    displayMedia(findMedia, total);
    displayPhotographers(findPhotographer)
};

init();


