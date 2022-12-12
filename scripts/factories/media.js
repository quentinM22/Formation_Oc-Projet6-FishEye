function photographerFactory(data) {

    const { id, name, portrait, city, country, tagline, price} = data;
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
        const count_like = document.createElement('span')
        const cardIcon = document.createElement('button')
        const icon = document.createElement('i')
        cardIcon.checked = false
       article.className = "card grid-item-4 grid-item-md-6 grid-item-s-12 pt1"
       img.className = "media"
       vod.className = "media"
       card.className = ""
       cardIcon.id = "item" + id
       count_like.textContent = likes
       icon.className = "fa-regular fa-heart  fs3 primary"
       article.appendChild(card)
       if(image){
        // console.log(image);
        
        img.setAttribute('src', `${picture}/${image}`)
        img.setAttribute('alt', `${image}`)
        card.appendChild(img)
       }else if(video){
        vod.setAttribute('src', `${picture}/${video}`)
        vod.setAttribute('type', `video/mp4`)
        card.appendChild(vod)
        // console.log(video);
       }
       card.appendChild(card_like)
       card_like.appendChild(count_like)
       card_like.appendChild(cardIcon)
       cardIcon.appendChild(icon)
      
       const input = document.querySelector(`#item${id}`)
       console.log(input);
    //    input.addEventListener('click', () => {
    //        if (!input.checked) { //incrementer
    //            likes++
    //            count_like.textContent = likes
    //            icon.className = " fa-solid fa-heart fs3 primary anim_heart"
    //            input.checked = true
    //        } else { //décrémenter
    //            likes--
    //            count_like.textContent = likes
    //            icon.className = " fa-regular fa-heart fs3 primary anim_heart_remove"
    //            input.checked = false
    //        }
    //    })

        return (article);
    }
    return { getMediaCardDOM }
}
