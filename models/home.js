/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

    let getTrips = (users_id, trips_id) => {
        let queryString = `select trips.id, trips.name, trips.date_start, trips.date_end, trips.country
                            from trips
                            inner join users_trips
                            on (trips.id = users_trips.trips_id)
                            where users_trips.users_id=${users_id}
                            `

        return dbPoolInstance.query(queryString);
    }


    return {
        getTrips
    };
};