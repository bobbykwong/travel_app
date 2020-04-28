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
            const userID = request.cookies.userID;
            let data = {};

            // Get all trips from database
            db.home.getTrips(userID)
                .then(results => {
                    data['trips'] = results.rows;

                    data.trips.forEach(el => {
                        let startDate = new Date(el.date_start)
                        const yearStart = startDate.getFullYear();

                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
                        const monthStart = monthNames[startDate.getMonth()];

                        startDate = `${monthStart} ${yearStart}`
                        el.date_start = startDate;
                    })
                    data['username'] = username
                    console.log(data);
                    response.render('home', data)
                })
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