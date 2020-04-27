// Hash password
sha256 = require('js-sha256');

// // Set cookies
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

module.exports = (db) => {
     /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let registrationPage = (request, response) => {
        response.render('registration');
    };

    let register = (request, response) => {
        const username = request.body.username;
        const password = request.body.password;
        const password2 = request.body.password2;

        // Hash password
        if (password === password2) {
            const hashPassword = sha256(password);
            db.registration.addUser(username, hashPassword)
                .then((results) => {
                    const userID = results.rows[0].id
                    response.cookie('loggedIn', 'true');
                    response.cookie('username', username);
                    response.cookie('userID', userID);

                    response.redirect('/');
                })
        }
        else{
            console.log('2nd password wrong')
            response.redirect('/registration');
        }

    }


   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

   return{
    registrationPage: registrationPage,
    register: register
   }
}