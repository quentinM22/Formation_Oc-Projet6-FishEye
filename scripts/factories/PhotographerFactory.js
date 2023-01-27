class Photographer {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
    }
    createHtml() {
        return `
        <article class="grid-item-4 grid-item-md-6 grid-item-s-12  flex center pt2">
            <a href="photographer.html?id=${this.id}" role="link" class="grid-col flex-col center ">
                <img src="assets/photographers/${this.portrait}" alt="lien vers la pages de ${this.name}">
                <div class="flex-col center text-over w100 p1">
                    <h2 class="fw400 fs36 secondary m0  text-over">${this.name}</h2>
                    <h3 class="fw400 fs24 primary m0  text-over">${this.city}, ${this.country}</h3>
                    <h4 class="fs16 fw400 m0 mt1  text-over">${this.tagline}</h4>
                    <h4 class="dark-gray fw400 fs16 m0 mb1  text-over">${this.price}€/jour</h4>
                </div>
            </a>
        </article>
        `
    }
    createMediaHtml() {
        return `
            <div class="grid-item-4 grid-item-md-12   grid-item-s-12 flex-col a-start p1">
                <h1 id="photographeName" class="fs64 fw700 secondary m0">${this.name}</h1>
                <h2 id="photographeLocation" class="fs24 fw400 primary">${this.city}, ${this.country}</h2>
                <h3 id="photographeTagline" class="fs18 fw400 dark-gray">${this.tagline}</h3>
            </div>
            <div class="grid-item-4 grid-item-md-12 grid-item-s-12 flex center p1">
                <button class="contact_button" onclick="displayModal()" aria-label="Contact me">Contactez-moi</button>
            </div>
            <div class="pics_users grid-item-4 grid-item-md-12 grid-item-s-12 flex center p1">
                <img src="assets/photographers/${this.portrait}" alt="${this.name}" class="pics_user"></div>
        `
    }
    createMediaTitle(){
        return `Fisheye - photographe ${this.name}`
    }
    priceCardFixed(){
        return `${this.price}€/Jour`
    }
    targetName(){
        return `${this.name}`
    }
}