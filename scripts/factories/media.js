function photographerFactory(data) {

    const { id, name, portrait, city, country, tagline, price } = data;
    // console.log({ id, name, portrait, city, country, tagline, price });
    const picture = `assets/photographers/${portrait}`;

    function getPhotographerCardDOM() {
        const userName = document.querySelector('#photographeName')
        const userLocation = document.querySelector('#photographeLocation')
        const userTagline = document.querySelector('#photographeTagline')
        const userImg = document.querySelector('#photographeImg')
        userName.textContent = name
        userLocation.textContent = city + ", " + country
        userTagline.textContent = tagline
        userImg.setAttribute('src', picture)
        userImg.setAttribute('alt', portrait)
    }
    return { getPhotographerCardDOM }
}
function mediaFactory(data) {

    const { id, photographerId, title, price, date, likes, image, video } = data;
    // console.log({ id, photographerId, title, price, date, likes, image , video});
    const picture = `assets/media/${photographerId}`;

    function getMediaCardDOM() {
       
        const article = document.createElement('article')
        const card = document.createElement('div')
        const img = document.createElement('img')
        const vod = document.createElement('video')
        const card_like = document.createElement('div')
        const titlecard = document.createElement('h3')
        const count_like = document.createElement('span')
        const cardIcon = document.createElement('button')
        const icon = document.createElement('i')
        article.className = "card grid-item-4 grid-item-md-6 grid-item-s-12 pt1"
        img.className = "media"
        vod.className = "media"
        card.className = ""
        card_like.className = "flex center s-b p05"
        count_like.className = "fs16 fw700 p05 primary"
        count_like.id = `item${id}`
        titlecard.className = 'primary fw700'
        cardIcon.className = "btn_like "
        cardIcon.id = `item${id}`
        count_like.textContent = likes
        titlecard.textContent = title
        icon.className = "fa-regular fa-heart  fs3 primary"
        article.appendChild(card)
        // media image ou video
        if (image) {
            // console.log(image);
            img.setAttribute('src', `${picture}/${image}`)
            img.setAttribute('alt', `${image}`)
            card.appendChild(img)
        } else if (video) {
            vod.setAttribute('src', `${picture}/${video}`)
            vod.setAttribute('type', `video/mp4`)
            card.appendChild(vod)
            // console.log(video);
        }
        card.appendChild(card_like)
        card_like.appendChild(titlecard)
        card_like.appendChild(cardIcon)
        cardIcon.appendChild(count_like)
        cardIcon.appendChild(icon)    

        // Gestion Like
        cardIcon.checked = false
        cardIcon.addEventListener('click', ()=>{
            if (!cardIcon.checked) { //incrementer
                const like = likes + 1
                // console.log(like++);
                count_like.textContent = like
                icon.className = " fa-solid fa-heart fs3 primary anim_heart"
                cardIcon.checked = true
            } else { //décrémenter
                const like = likes 
                count_like.textContent = like
                icon.className = " fa-regular fa-heart fs3 primary"
                cardIcon.checked = false
            }
        })
       
       
        return (article);
    }
    
    return {getMediaCardDOM }
}
