/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

    let addActivity = (title, time_start, time_end, location, notes, days_id, trips_id) => {
        let queryString = 'insert into activities (title, time_start, time_end, location, notes, days_id, trips_id) values ($1, $2, $3, $4, $5, $6, $7) returning *';

        const values = [title, time_start, time_end, location, notes, days_id, trips_id]

        return dbPoolInstance.query(queryString, values);
    }

    let allActivities = (days_id, trips_id) => {
        let queryString = `select * from activities where days_id=${days_id} and trips_id=${trips_id}`;

        return dbPoolInstance.query(queryString);
    }

    let singleActivity = (id) => {
        let queryString = `select * from activities where id=${id}`;

        return dbPoolInstance.query(queryString);
    }

    let deleteActivity = (id) => {
        let queryString = `delete from activities where id=${id}`;

        return dbPoolInstance.query(queryString)
    }

    let updateActivity = (id, title, location, time_start, time_end, notes) => {
        let queryString = `
                        update
                            activities
                        set
                            title = '${title}',
                            location = '${location}',
                            time_start = '${time_start}',
                            time_end = '${time_end}',
                            notes = '${notes}'
                        where
                            id=${id}
                        `

        return dbPoolInstance.query(queryString);
    }

    let getCountryDetails = (trips_id) => {
        let queryString = `select country, lat, lng from trips where id=${trips_id}`

        return dbPoolInstance.query(queryString);
    }

    return {
        addActivity,
        allActivities,
        singleActivity,
        deleteActivity,
        updateActivity,
        getCountryDetails
    };
};