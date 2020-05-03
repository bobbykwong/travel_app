/**
* ===========================================
* Export model functions as a module
* ===========================================
*/

module.exports = (dbPoolInstance) => {

    let getTrip = (trips_id) => {
        let queryString = `select * from trips where id=${trips_id}`;

        return dbPoolInstance.query(queryString);
    }

    let getTripLength = (trips_id) => {
        let queryString = `select ((select date_end from trips where id=${trips_id})::date - (select date_start from trips where id=${trips_id})::date) as tripLength`;

        return dbPoolInstance.query(queryString);
    }

    let findFriend = (friendName) => {
        console.log('finding friend')
        let queryString = `select id from users where username='${friendName}'`;

        return dbPoolInstance.query(queryString)
    }

    let addFriend = (users_id, trips_id) => {
        let queryString = 'insert into users_trips (users_id, trips_id) values ($1, $2) returning *';

        const values = [users_id, trips_id]

        return dbPoolInstance.query(queryString, values);
    }

    let getTripFriends = (trips_id) => {
        let queryString =  `
                    select users.username
                    from users
                    inner join users_trips
                    on (users.id = users_trips.users_id)
                    where users_trips.trips_id = ${trips_id}
                    `

        return dbPoolInstance.query(queryString);
    }

    return {
        getTrip,
        getTripLength,
        findFriend,
        addFriend,
        getTripFriends
    };
};