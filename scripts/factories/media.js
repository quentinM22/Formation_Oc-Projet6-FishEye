
function photographerFactory(data) {

    const { id, name, portrait, city, country, tagline, price } = data;
    const picture = `assets/photographers/${portrait}`;
    document.title = `Fisheye - photographe ${name}` 
    function getPhotographerCardDOM() {
        const userName = document.querySelector('#photographeName')
        userName.textContent = name
        
        const userLocation = document.querySelector('#photographeLocation')
        userLocation.textContent = city + ", " + country
        
        const userTagline = document.querySelector('#photographeTagline')
        userTagline.textContent = tagline
        
        const pics_users = document.querySelector('.pics_users')
        const pics_user = document.createElement('img')
        pics_user.setAttribute('src', picture)
        pics_user.setAttribute('alt', portrait)
        pics_user.className = 'pics_user'

        pics_users.appendChild(pics_user)
        
        
        const pricePerDay = document.querySelector('.pricePerDay')
        pricePerDay.textContent = `${price}€/Jour`
    }
    return { getPhotographerCardDOM }
}

function mediaFactory(data, otherData, index) {

    const { id, photographerId, title, likes, image, video } = data;
    let totalLikes = otherData;
    let media = null
    let mediaSlide = null

    
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
        titlecard.id = 'titleCard'
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
            mediaSlide = document.createElement('img')
            mediaSlide.setAttribute('src', `${picture}/${image}`)
            mediaSlide.setAttribute('alt', `${image}`)
        } else if (video) {
            media = document.createElement('video')
            media.setAttribute('src', `${picture}/${video}`)
            media.setAttribute('type', `video/mp4`)
            media.setAttribute("preload", "metadata")
            mediaSlide = document.createElement('video')
            mediaSlide.setAttribute('src', `${picture}/${video}`)
            mediaSlide.setAttribute('type', `video/mp4`)
            mediaSlide.setAttribute("controls","")
        }
        media.setAttribute('onclick', `openModal();currentSlide(${index})`)
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

        // modal Slides
        const slides = document.querySelector('.slides')
        const mySlides = document.createElement('div')
        const p = document.createElement('p')
        mySlides.className = "mySlides"
        mediaSlide.className = "thmb-full"
        p.textContent = title
        slides.appendChild(mySlides)
        mySlides.appendChild(mediaSlide)
        mySlides.appendChild(p)

        return article;
    }

    return { getMediaCardDOM }
}

