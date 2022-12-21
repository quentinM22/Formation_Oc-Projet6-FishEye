// function tabindexSet(value) {
//     let body = document.querySelector("body");
//     const header = document.querySelector("header");
//     const main = document.querySelector("main");
//     const tabs = [...main.querySelectorAll("[tabindex]"), ...header.querySelectorAll("[tabindex]")];

//     if (body.style.overflow === 'hidden') {
//         body.style.overflow = 'unset'
//     } else {
//         body.style.overflow = 'hidden';
//     }

//     for (let i = 0; i < tabs.length; i++) {
//         tabs[i].setAttribute("tabindex", `${value}`);
//     }
// }

// function show(event) {
//     const mediaNodes = document.querySelectorAll(".media_section>.media")
//     const tabMediaNodes = Array.prototype.slice.call(mediaNodes)

//     const target = event.currentTarget;
//     const targetParent = target.parentNode;
//     const indexWork = tabMediaNodes.indexOf(targetParent);
//     const lightbox = document.querySelector(".lightbox");
//     lightbox.dataset.key = indexWork;
//     tabindexSet(-1);
//     loadLightbox(tabMediaNodes, targetParent);
   
//     lightbox.style.display = 'flex'

// }
// function loadLightbox(tabMediaNodes, targetParent) {
//     const lightbox = document.querySelector(".lightbox");
//     const lightboxMedia = document.querySelector(".thmb-full");
//     const lightboxText = lightbox.querySelector("p");
    
//     const medias = tabMediaNodes
//     const findMedia = medias.find((e) => targetParent === e)
      
//     let media = null
//     medias.forEach(e => { 
//         // if(findMedia == e){
//             lightboxText.textContent = e.querySelector("h3").textContent
//         if (e.querySelector("video")) {
//                 media = document.createElement("video")
//                 media.style.width = '50px'
//                 media.style.height = '50px'
//                 media.setAttribute('src',e.querySelector('.thmb').getAttribute('src'))
//                 media.setAttribute("controls","")
//             } else if (e.querySelector("img")){
//                 media = document.createElement("img")
//                 media.style.width = '50px'
//                 media.style.height = '50px'
//                 media.setAttribute('src',e.querySelector('.thmb').getAttribute('src'))
//             }
//             lightboxMedia.appendChild(media)
//             // console.log(media[e]);
//         // }
        

//     });
            
//     // medias.forEach(e => {
//     //     if (targetParent === e) {
//             // lightboxText.textContent = targetParent.querySelector("h3").textContent
//             // if (targetParent.querySelector("video")) {
//             //     media = document.createElement("video")
//             //     media.style.width = '500px'
//             //     media.style.height = '500px'
//             //     media.setAttribute('src',targetParent.querySelector('.thmb').getAttribute('src'))
//             //     media.setAttribute("controls","")
//             // } else if (targetParent.querySelector("img")){
//             //     media = document.createElement("img")
//             //     media.style.width = '500px'
//             //     media.style.height = '500px'
//             //     media.setAttribute('src',targetParent.querySelector('.thmb').getAttribute('src'))
//             // }
//             // lightboxMedia.appendChild(media)
//             // console.log(e);
//         // }
//     // });
    
//     // const currentMediaClone = medias.querySelector('.thmb').cloneNode(true)

//     // const currentText = document.querySelector("#titleCard").textContent;
//     // const currentMedia = medias.querySelector(".thmb")
//     // const currentMediaClone = currentMedia.cloneNode(true)
//     // console.log(currentMedia);
//     // console.log(currentText);
//     // console.log(currentMediaClone);
//     // currentMediaClone.setAttribute("tabindex","4");
//     // console.log(currentMediaClone);

// }

// function closeLightbox() {
//     const lightbox = document.querySelector(".lightbox");
//     lightbox.style.display = "none";
//     tabindexSet(0);
// }

