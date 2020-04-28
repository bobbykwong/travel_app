/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

    let getTrip = (users_id, trips_id) => {
        let queryString = `select * from trips where users_id=${users_id} and id=${trips_id}`;

        return dbPoolInstance.query(queryString);
    }

    let getTripLength = (users_id, trips_id) => {
        let queryString = `select ((select date_end from trips where users_id=${users_id} and id=${trips_id})::date - (select date_start from trips where users_id=${users_id} and id=${trips_id})::date) as tripLength`;

        return dbPoolInstance.query(queryString);
    }

    return {
        getTrip,
        getTripLength
    };
};