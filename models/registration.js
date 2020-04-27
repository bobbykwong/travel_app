/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    const addUser = (username, password) => {
        let queryString = "insert into users (username, password) values ($1, $2) returning *";

        const values = [username, password];

        return dbPoolInstance.query(queryString, values)
    }

    return {
        addUser
    };
};