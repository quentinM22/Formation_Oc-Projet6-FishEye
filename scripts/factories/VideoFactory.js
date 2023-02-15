/* eslint-disable no-unused-vars */
class Video {
	constructor(data) {
		this.id = data.id
		this.photographerId = data.photographerId
		this.title = data.title
		this.video = data.video
		this.likes = data.likes
		this.date = data.date
		this.price = data.price
	}
	createHtml(index) {
		return `
        <article class="media card grid-item-4 grid-item-md-6 grid-item-s-12 pt1">
            <a href="#" onclick="openModal();currentSlide(${index})">
                <video src="assets/media/${this.photographerId}/${this.video}" type="video/mp4" preload="metadata" aria-label="${this.title}, video" tabindex="0" class="thmb">
            </a>
            <div class="flex center s-b p05">
                <h3 id="titleCard" class="grid-item-10 primary fw700 text-over">${this.title}</h3>
                <button class="btn_like " onclick="like(event)">
                    <span class="fs16 fw700 p05 primary " id="btn_like" aria-label="${this.likes} like">${this.likes}</span>
                    <i id="targetHeart" class="fa-regular fa-heart  fs3 primary"></i>
                </button>
            </div>
        </article>
        `
	}
	createSlide() {
		return `
        <div class="mySlides" tabindex="0" aria-label="${this.title} ,video">
            <video src="assets/media/${this.photographerId}/${this.video}" type="video/mp4" controls="" alt="${this.title}, video" class="thmb-full"></video>
            <p class="primary">${this.title}</p>
        </div>
        `
	}
}
