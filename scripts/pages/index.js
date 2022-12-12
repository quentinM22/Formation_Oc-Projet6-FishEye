async function getData() {
    const urlGithub = 'https://github.com/quentinM22/Formation_Oc-Projet6-Fisheye/data/photographers.json'
    // const url = '/data/photographers.json'
    const data = await fetch(urlGithub)
    .then(res => res.json())
    .then(data => data)
    .catch(error=> error)
    return data
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    const { photographers } = await getData();
    displayData(photographers);
};

init();

