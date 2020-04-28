module.exports = (db) => {
     /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    let dayPage = (request, response) => {
        const loggedIn = request.cookies.loggedIn;
        if (loggedIn === 'true') {
            // Get username from cookies
            const username = request.cookies.username;
            const userID = request.cookies.userID;
            const tripID = request.params.id;
            const dayNum = request.params.num;

            let data = {};
            data.username = username;
            data.id = tripID;
            data.dayNum = dayNum;

            response.render('day', data)

        }
        else{
            // Go to login and registration page
            response.redirect('/login');
        }
    }

    let addActivity = (request, response) => {
        console.log(request.body);
    }


    return{
        dayPage: dayPage,
        addActivity: addActivity
    }
}