module.exports = (db) => {
     /**
    * ===========================================
    * Controller logic
    * ===========================================
    */
    let testPage = (request, response) => {
        response.render('test')
    }

    return{
        testPage: testPage
    }
}