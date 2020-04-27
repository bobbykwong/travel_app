module.exports = (db) => {
     /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let homePage = (request, response) => {
        const loggedIn = request.cookies.loggedIn;
        if (loggedIn === 'true') {
            response.render('home');
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