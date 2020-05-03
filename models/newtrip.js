/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

    let addTrip = (name, date_start, date_end, country, lat, lng) => {
        let queryString = 'insert into trips (name, date_start, date_end, country, lat, lng) values ($1, $2, $3, $4, $5, $6) returning *';

        const values = [name, date_start, date_end, country, lat, lng]

        return dbPoolInstance.query(queryString, values);
    }

    let addTripUser = (users_id, trips_id) => {
        console.log('adding trip user relationship');
        let queryString = 'insert into users_trips (users_id, trips_id) values ($1, $2) returning *';

        const values = [users_id, trips_id];

        return dbPoolInstance.query(queryString, values);
    }

    return {
        addTrip,
        addTripUser
    }
};