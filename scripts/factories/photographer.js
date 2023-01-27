function photographerFactory(data) {
    function getUserCardDOM() {
        let article = new Photographer(data).createHtml()
       
        return article;
    }
    return {getUserCardDOM }
}