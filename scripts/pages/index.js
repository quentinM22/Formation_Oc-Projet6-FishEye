async function getPhotographers() {
    const url = '/data/photographers.json'
    const data = await fetch(url)
    .then(res => res.json())
    .then(data => data)
    .catch(error=> error)
    // const data = res.json()
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
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

