
async function getData() {
    const url = 'data/photographers.json'
    return await fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(error=> console.log("erreur: " + error));

}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    const { photographers } = await getData();
    displayData(photographers);
}

init();

