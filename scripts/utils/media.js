function getMedia() {
    const mediaNodes = document.querySelectorAll(".media_section>article")
    const tabMediaNodes = Array.prototype.slice.call(mediaNodes)
        return tabMediaNodes
}

function show(event){     
        const target = event.currentTarget;
        
    const work = target.parentNode;
    const lightbox = document.querySelector(".lightbox");  
    const medias =  getMedia()
    console.log(target);
    console.log(lightbox);
    console.log(work);
    console.log(medias);

}

