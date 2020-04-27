module.exports = (db) => {
     /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let homePage = (request, response) => {
        const loggedIn = request.cookies.loggedIn;
        if (loggedIn === 'true') {
            // Get username from cookies
            const username = request.cookies.username;
            const data = {'username': username}

            // Render page
            response.render('home', data);
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