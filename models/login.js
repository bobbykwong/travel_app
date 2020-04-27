/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

    const authenticateLogin = (username, password) => {
        let queryString = `select * from users where username='${username}' and password='${password}'`;


        return dbPoolInstance.query(queryString)
    }

  return {
    authenticateLogin
  };
};