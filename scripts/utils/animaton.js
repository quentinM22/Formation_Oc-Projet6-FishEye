function showContent() {
    document.querySelector('.loader').classList.add('hidden')
}
setTimeout(showContent, 2000)

 
const findMediaSection =  document.querySelector('.media_section')
if (findMediaSection) {
    function showMedia() {
    findMediaSection.classList.add('fade')
}
setTimeout(showMedia, 3000)
}
