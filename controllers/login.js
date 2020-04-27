// Hash password
// sha256 = require('js-sha256');

module.exports = (db) => {
     /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let loginPage = (request, response) => {
        response.render('login');
    };

    let login = (request, response) => {
        const username = request.query.username;
        const password = request.query.password;

        const hashPassword = sha256(password);

        db.login.authenticateLogin(username, hashPassword)
            .then((result) => {
                const userID = result.rows[0].id;

                response.cookie('loggedIn', 'true');
                response.cookie('username', username);
                response.cookie('userID', userID);

                response.redirect('/');
            })
            .catch((err) => {
                console.error(err.stack);
            })


    }


    /**
    * ===========================================
    * Export controller functions as a module
    * ===========================================
    */

    return{
        loginPage: loginPage,
        login: login
    }
}