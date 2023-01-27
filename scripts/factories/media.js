function photographerMediaFactory(data) {
    // const { name, portrait, city, country, tagline, price } = data;
    document.title = new Photographer(data).createMediaTitle()
    function getPhotographerCardDOM() {
        let photographerCard = new Photographer(data).createMediaHtml()
        const loaderName = document.querySelector('#loaderName')
        loaderName.textContent = new Photographer(data).targetName()
        const pricePerDay = document.querySelector('.pricePerDay')
        pricePerDay.textContent = new Photographer(data).priceCardFixed()
        const modalName = document.querySelector('#name')
        modalName.innerHTML = new Photographer(data).targetName()
        return photographerCard
    }
    return { getPhotographerCardDOM }
}

function mediaFactory(data, otherData, index) {
    let totalLikes = otherData;
    let mediaSlide
    let article 

    function getMediaCardDOM() {
        /* Création Dom */
        const allLike = document.querySelector('.allLikes')
        allLike.textContent = totalLikes + " "
         if (data.image) {
            article = new Image(data).createHtml(index)
            mediaSlide = new Image(data).createSlide()
        } else if (data.video) {
            article = new Video(data).createHtml(index)
            mediaSlide = new Video(data).createSlide()
        }
        const slides = document.querySelector('.slides')
        slides.innerHTML += mediaSlide
        return article;
    }

    return { getMediaCardDOM }
}

