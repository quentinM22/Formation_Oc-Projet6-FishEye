//Mettre le code JavaScript lié à la page photographer.html
async function getData() {
    const res = await fetch('../../data/photographers.json')
    const data = res.json()
    // console.log(data);
    return data

}
async function  displayPhotographers(photographer) {
    // const photographerSection = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    photographerModel.getPhotographerCardDOM();
    
    // console.log(photographer);
  
};

async function displayData(media) {
    const mediasSection = document.querySelector(".media_section");

    media.forEach((media) => {
        const mediaModel = mediaFactory(media);
        
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediasSection.appendChild(mediaCardDOM);
    });
    // console.log(media);
};


async function init() {
    const { photographers, media } = await getData();
    
    const catchUrl = new URL(window.location)
    const getParams = new URLSearchParams(catchUrl.search)
    // console.log(getParams.get("id"));
    const targetParams = getParams.get("id")
    // console.log(targetParams);
    const findPhotographer = photographers.find((e) => targetParams == e.id)
    const findMedia = []
    media.forEach(e => {
        if(e.photographerId == targetParams){
            findMedia.push(e)
        }
    });
    
    // console.log(findMedia);
    // console.log(findPhotographer);
    displayData(findMedia);
    displayPhotographers(findPhotographer)
};

init();