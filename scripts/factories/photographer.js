
function photographerFactory(data) {

    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.className = "grid-item-4 grid-item-md-6 grid-item-s-12  flex center pt2"

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute('alt', `lien vers la pages de ${name}`)

        const a = document.createElement('a')
        a.setAttribute('href', `photographer.html?id=${id}`)
        a.setAttribute('role', `link`)
        a.className = "grid-col flex-col center "

        const abody = document.createElement('div')
        abody.className = "flex-col center text-over w100 p1"

        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.className = "fw400 fs36 secondary m0  text-over"

        const h3 = document.createElement('h3');
        h3.textContent = city + ', ' + country;
        h3.className = "fw400 fs24 primary m0  text-over"

        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        h4.className = 'fs16 fw400 m0 mt1  text-over'

        const h4price = document.createElement('h4');
        h4price.textContent = `${price}€/jour`
        h4price.className = 'dark-gray fw400 fs16 m0 mb1  text-over'

        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(abody)
        abody.appendChild(h2);
        abody.appendChild(h3)
        abody.appendChild(h4)
        abody.appendChild(h4price)
        return (article);
    }
    return { name, picture, getUserCardDOM }
}