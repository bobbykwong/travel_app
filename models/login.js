/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  // const authenticateLogin = (username, password) => {
  //   let queryString = `select * from users where username='${username}' and password='${password}'`;

  //   let userID;


    // dbPoolInstance.query(queryString, (err, results) => {
    //   if(err){
    //     console.log(err);
    //   }
    //   else{
    //     userID = results.rows[0].id
    //     console.log("promise: " + userID);
    //   }
    // })

    // .then(() => {return userID});

    // return dbPoolInstance.query(queryString)
        // .then(res => {
        //     console.log(res.rows[0].id)
        //     return(res.rows[0].id)
        // })
        // .catch(e => console.error(e.stack))


  return {
    // authenticateLogin
  };
};