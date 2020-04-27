module.exports = (db) => {
     /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let homePage = (request, response) => {
        const loggedIn = request.cookies.loggedIn;
        if (loggedIn === 'true') {
            response.send('going into home page')
        }
        else{
            // Go to login and registration page
            response.redirect('/login');
        }
    }


    return{
        homePage: homePage
    }
}