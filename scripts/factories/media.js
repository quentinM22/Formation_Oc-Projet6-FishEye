
function photographerFactory(data) {

    const { id, name, portrait, city, country, tagline, price } = data;
    // console.log({ id, name, portrait, city, country, tagline, price });
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

    let { id, photographerId, title, price, date, likes, image, video } = data;
    let totalLikes = otherData;
    const picture = `assets/media/${photographerId}`;
    function getMediaCardDOM() {

        const allLike = document.querySelector('.allLikes')
        const article = document.createElement('article')
        const card = document.createElement('div')
        const media = document.createElement('div')
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
        titlecard.className = 'primary fw700'
        cardIcon.className = "btn_like "
        icon.className = "fa-regular fa-heart  fs3 primary"
        cardIcon.id = `item${id}`
        count_like.textContent = likes
        titlecard.textContent = title
        allLike.textContent = totalLikes + " "

        article.appendChild(card)
        card.appendChild(media)
        // media image ou video
        if (image) {
            img.setAttribute('src', `${picture}/${image}`)
            img.setAttribute('alt', `${image}`)
            media.appendChild(img)
        } else if (video) {
            vod.setAttribute('src', `${picture}/${video}`)
            vod.setAttribute('type', `video/mp4`)
            media.appendChild(vod)
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
                cardIcon.checked = true
                likes++
                totalLikes++

                icon.className = " fa-solid fa-heart fs3 primary anim_heart"
            } else{ //décrémenter
                cardIcon.checked = false
                likes--
                totalLikes--

                icon.className = " fa-regular fa-heart fs3 primary"
            }
            count_like.textContent = likes
            allLike.textContent = totalLikes + " "
         
        })
        // // modal média
        media.addEventListener('click', ()=>{
            
            console.log();
            const mediaModal = document.querySelector('#media_modal')
            const main = document.querySelector('#main')
            const modalBody = document.querySelector('#modalBody')
            main.style.display = 'none'
            mediaModal.style.display = 'block'
            modalBody.textContent = id
            const img = document.createElement('img')
            const vod = document.createElement('video')
            if (image) {
                img.setAttribute('src', `${picture}/${image}`)
                img.setAttribute('alt', `${image}`)
                img.style.width = ' 500px'
                img.style.height = '500px'
                modalBody.appendChild(img)
            }else if (video) {
                vod.setAttribute('src', `${picture}/${video}`)
                vod.setAttribute('type', `video/mp4`)
                modalBody.appendChild(vod)
            }
            
            const closeModal = document.querySelector('#closeModal')
            closeModal.addEventListener('click', ()=>{
               mediaModal.style.display = 'none' 
               main.style.display = 'block'
            })
        })
       
        return (article);
    }
    
    return {getMediaCardDOM }
}

