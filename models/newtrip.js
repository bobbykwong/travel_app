/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

    let addTrip = (name, date_start, date_end, country, lat, lng, users_id) => {
        let queryString = 'insert into trips (name, date_start, date_end, country, lat, lng, users_id) values ($1, $2, $3, $4, $5, $6, $7) returning *';

        const values = [name, date_start, date_end, country, lat, lng, users_id]

        return dbPoolInstance.query(queryString, values);
    }

    return {
        addTrip
    };
};