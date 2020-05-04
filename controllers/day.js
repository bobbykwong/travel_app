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
            const trips_id = request.params.id;
            const days_id = request.params.num;

            // Update days id and trips id to cookies
            response.cookie('days_id', days_id);
            response.cookie('trips_id', trips_id);

            let data = {};

            // Get all activities on that day

            db.day.allActivities(days_id, trips_id)
                .then((results) => {
                    data.activities = results.rows;
                    data.username = username;
                    data.trips_id = trips_id;
                    data.days_id = days_id;
                    return db.day.getCountryDetails(trips_id)
                })
                .then((results) => {
                    data.countryDetails = results.rows
                    response.render('day', data);
                })
                .catch((err) => console.error(err.stack))

        }
        else{
            // Go to login and registration page
            response.redirect('/login');
        }
    };

    let addActivity = (request, response) => {
        console.log(request.body);

        // Get activity details
        const title = request.body.title;
        const time_start = request.body.time_start;
        const time_end = request.body.time_end;
        const location = request.body.location;
        const notes = request.body.notes;
        const days_id = request.cookies.days_id;
        const trips_id = request.cookies.trips_id;

        db.day.addActivity(title, time_start, time_end, location, notes, days_id, trips_id)
            .then(results => {
                response.send(results.rows[0]);
            })
    };

    let deleteActivity = (request, response) => {
        const id = request.params.id;

        // delete from database
        db.day.deleteActivity(id)
            .then(() => response.send('deleted from database'));
    }

    let updateActivity = (request, response) => {
        console.log(request.body)
        const title = request.body.title;
        const location = request.body.location;
        const time_start = request.body.time_start;
        const time_end = request.body.time_end;
        const notes = request.body.notes;
        const id = request.params.id;
        console.log(notes);

        db.day.updateActivity(id, title, location, time_start, time_end, notes)
            .then((results) => {
                return db.day.singleActivity(id)
            })
            .then(results => {
                response.send(results.rows);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return{
        dayPage: dayPage,
        addActivity: addActivity,
        deleteActivity: deleteActivity,
        updateActivity: updateActivity
    }
}