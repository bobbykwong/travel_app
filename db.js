/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: { rejectUnauthorized: false }
    };

}else{
    configs = {
    user: 'postgres',
    host: '127.0.0.1',
    database: 'travelapp',
    port: 5432
    };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


// Login files
const allLoginModelsFunction = require('./models/login');

const loginModelsObject = allLoginModelsFunction(pool);


// Registration files
const allRegistrationModelsFunction = require('./models/registration');

const registrationModelsObject = allRegistrationModelsFunction(pool);


// Home files
const allHomeModelsFunction = require('./models/home');

const homeModelsObject = allHomeModelsFunction(pool);

// New trip files
const allNewTripModelsFunction = require('./models/newtrip');

const newTripModelsObject = allNewTripModelsFunction(pool);

// Trip files
const allTripModelsFunction = require('./models/trip');

const tripModelsObject = allTripModelsFunction(pool);

// Day files
const allDayModelsFunction = require('./models/day');

const dayModelsObject = allDayModelsFunction(pool);

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


module.exports = {
    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool:pool,

    /*
    * ADD APP MODELS HERE
    */

    // users: userModelsObject,
    login: loginModelsObject,
    home: homeModelsObject,
    registration: registrationModelsObject,
    newTrip: newTripModelsObject,
    trip: tripModelsObject,
    day: dayModelsObject
};