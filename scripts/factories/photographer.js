function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const a = document.createElement('a')
        const abody = document.createElement('div')
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const h4 = document.createElement( 'h4' );
        const h4price = document.createElement( 'h4' );
        img.setAttribute("src", picture)
        img.setAttribute('alt',portrait)
        a.setAttribute('href', `../../photographer.html?id=${id}`)
        h2.textContent = name;
        h3.textContent = city+ ', '+country;
        h4.textContent = tagline;
        h4price.textContent = `${price}€/jour`
        article.className = "grid-item-4 grid-item-md-6 grid-item-s-12 flex center pt3"
        a.className = "grid-col flex-col center"
        abody.className = "flex-col center"
        h2.className= "fw400 fs36 secondary m0"
        h3.className= "fw400 fs13 primary m0"
        h4.className = 'fs13 fw400 m0 mt1'
        h4price.className = 'dark-gray fw400 fs9 m0 mb1'
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