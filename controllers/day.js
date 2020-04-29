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

            // Update day num to cookies
            response.cookie('daynum', dayNum);

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

        // Get activity details
        const title = request.body.title;
        const time_start = request.body.time_start;
        const time_end = request.body.time_end;
        const location = request.body.location;
        const notes = request.body.notes;
        const days_id = request.cookies.daynum;

        db.day.addActivity(title, time_start, time_end, location, notes, days_id)
            .then(results => {
                response.send(results.rows[0]);
            })
    }


    return{
        dayPage: dayPage,
        addActivity: addActivity
    }
}