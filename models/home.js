/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

    let getTrips = (userID) => {
        let queryString = `select * from trips where users_id=${userID}`

        return dbPoolInstance.query(queryString);
    }


    return {
        getTrips
    };
};