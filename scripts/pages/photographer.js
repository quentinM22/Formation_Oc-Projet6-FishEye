//Mettre le code JavaScript lié à la page photographer.html
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

async function displayMedia(media) {
    const mediasSection = document.querySelector(".media_section");
    media.forEach((media) => { //boucle séparation media via tableau pré trier en amont
        const mediaModel = mediaFactory(media); //Envoi data media dans Factories>media
        //Creation du Dom dans mediaSection 
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
    });
};


async function init() {
    const { photographers, media } = await getData(); //Récuperation Data
    const catchUrl = new URL(window.location) //Récuperation Url 
    const getParams = new URLSearchParams(catchUrl.search) 
    const targetParams = getParams.get("id") //Récuperation Id dans Url
    const findPhotographer = photographers.find((e) => targetParams == e.id) //Récuperation Utilisateur via IdUrl
    const findMedia = [] //Creation tableau pour tri média en fonction de photogrpaherId et Id url
    //Boucle recuperation média
    media.forEach(e => {
        if(e.photographerId == targetParams){
            findMedia.push(e)
        }
    });
    //Envoi data dans les différent display
    displayMedia(findMedia);
    displayPhotographers(findPhotographer)
};

init();