module.exports = (db) => {
     /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    // Show new trip page
    let newTripPage = (request, response) => {
        const loggedIn = request.cookies.loggedIn;
        if (loggedIn === 'true') {
            // Get username from cookies
            const username = request.cookies.username;
            const data = {'username': username}

            // Render page
            response.render('newtrip', data);
        }
        else{
            // Go to login and registration page
            response.redirect('/login');
        }
    };

    // Add a new trip
    let addNewTrip = (request,response) => {
        const loggedIn = request.cookies.loggedIn;
        if (loggedIn === 'true') {
            // Get username from cookies
            const username = request.cookies.username;
            const users_id = request.cookies.userID

            // Get trip details from request body
            const country = request.body.country;
            const lat = parseFloat(request.body.lat);
            const lng = parseFloat(request.body.lng);
            const name = request.body.name;
            const date_start = request.body.date_start;
            const date_end = request.body.date_end;

            // Insert new trip into database
            db.newTrip.addTrip(name, date_start, date_end, country, lat, lng, users_id)
                .then((results) => {
                    console.log(results.rows);
                    const tripID = results.rows[0].id
                    response.redirect(`/trip/${tripID}`);
                })
                .catch(err => console.error(err.stack))

        }
        else{
            // Go to login and registration page
            response.redirect('/login');
        }
    }


    return{
        newTripPage: newTripPage,
        addNewTrip: addNewTrip
    }
}