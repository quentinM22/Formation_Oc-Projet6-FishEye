async function getData() {
    const url = 'data/photographers.json'
    return await fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log("erreur: " + error));

}