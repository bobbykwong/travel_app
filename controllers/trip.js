module.exports = (db) => {
     /**
    * ===========================================
    * Controller logic
    * ===========================================
    */

    // Add a new trip
    let tripPage = (request,response) => {
        const loggedIn = request.cookies.loggedIn;
        if (loggedIn === 'true') {
            // Get username from cookies
            const username = request.cookies.username;
            const users_id = request.cookies.userID;
            const trips_id = request.params.id;

            let data;

            let promise1 = new Promise((resolve, reject) => {
                // Get trip details from database
                db.trip.getTrip(users_id, trips_id)
                    .then((results) => {
                        data = results.rows[0];

                        // Reconfigure dates to appropriate format
                        // Start Date
                        let startDate = new Date(data.date_start)
                        const yearStart = startDate.getFullYear();
                        const monthStart = startDate.getMonth()+1;
                        const dayStart = startDate.getDate();
                        startDate = `${dayStart}-${monthStart}-${yearStart}`
                        data.date_start = startDate

                        // End date
                        let endDate = new Date(data.date_end)
                        const yearEnd = endDate.getFullYear();
                        const monthEnd = endDate.getMonth()+1;
                        const dayEnd = endDate.getDate();
                        endDate = `${dayEnd}-${monthEnd}-${yearEnd}`

                        data.date_end = endDate;
                        resolve();
                    })
                    .catch(err => console.error(err.stack))
            })

            let promise2 = new Promise((resolve, reject) => {
                // Get length of trip
                db.trip.getTripLength(users_id, trips_id)
                    .then(results => {
                        data['tripLength'] = results.rows[0].triplength;
                        console.log(data)
                        resolve();
                    })
                    .catch(err => console.error(err.stack))
            })

            Promise.all([promise1, promise2])
                .then(() => {
                    data['username'] = username;
                    response.render('trip', data);
                })
        }
        else{
            // Go to login and registration page
            response.redirect('/login');
        }
    }


    return{
        tripPage: tripPage
    }
}