/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

    let addActivity = (title, time_start, time_end, location, notes, days_id) => {
        let queryString = 'insert into activities (title, time_start, time_end, location, notes, days_id) values ($1, $2, $3, $4, $5, $6) returning *';

        const values = [title, time_start, time_end, location, notes, days_id]

        return dbPoolInstance.query(queryString, values);
    }

    return {
        addActivity,
    };
};