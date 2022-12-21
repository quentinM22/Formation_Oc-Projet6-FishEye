
function photographerFactory(data) {

    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;

    function getPhotographerCardDOM() {
        const userName = document.querySelector('#photographeName')
        const userLocation = document.querySelector('#photographeLocation')
        const userTagline = document.querySelector('#photographeTagline')
        const userImg = document.querySelector('#photographeImg')
        const pricePerDay = document.querySelector('.pricePerDay')
        pricePerDay.textContent = `${price}€/Jour`
        userName.textContent = name
        userLocation.textContent = city + ", " + country
        userTagline.textContent = tagline
        userImg.setAttribute('src', picture)
        userImg.setAttribute('alt', portrait)
    }
    return { getPhotographerCardDOM }
}

function mediaFactory(data, otherData) {

    const { id, photographerId, title, likes, image, video } = data;
    let totalLikes = otherData;
    let media = null
    const picture = `assets/media/${photographerId}`;

    function getMediaCardDOM() {
        /* Création Dom */
        const allLike = document.querySelector('.allLikes')
        allLike.textContent = totalLikes + " "

        const article = document.createElement('article')
        article.className = "media card grid-item-4 grid-item-md-6 grid-item-s-12 pt1"

        const card_like = document.createElement('div')
        card_like.className = "flex center s-b p05"

        const titlecard = document.createElement('h3')
        titlecard.className = 'primary fw700'
        titlecard.textContent = title

        const count_like = document.createElement('span')
        count_like.className = "fs16 fw700 p05 primary"
        count_like.id = "btn_like"
        count_like.textContent = likes

        const cardIcon = document.createElement('button')
        cardIcon.className = "btn_like "
        cardIcon.setAttribute('onclick', 'like(event)')

        const icon = document.createElement('i')
        icon.id = 'targetHeart'
        icon.className = "fa-regular fa-heart  fs3 primary"

        // media image ou video
        if (image) {
            media = document.createElement('img')
            media.setAttribute('src', `${picture}/${image}`)
            media.setAttribute('alt', `${image}`)
        } else if (video) {
            media = document.createElement('video')
            media.setAttribute('src', `${picture}/${video}`)
            media.setAttribute('type', `video/mp4`)
            media.setAttribute("preload", "metadata")
        }
        media.setAttribute('onclick', 'show(event)')
        media.setAttribute("tabindex", 0);
        media.className = "thmb"
        // media.id = "media"

        /* Mise en place de la view */
        article.appendChild(media)
        article.appendChild(card_like)
        card_like.appendChild(titlecard)
        card_like.appendChild(cardIcon)
        cardIcon.appendChild(count_like)
        cardIcon.appendChild(icon)
        return (article);
    }

    return { getMediaCardDOM }
}

