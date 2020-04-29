CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS trips(
	id SERIAL PRIMARY KEY,
	name TEXT,
	date_start DATE,
	date_end DATE,
	country TEXT,
	users_id INTEGER
);

CREATE TABLE IF NOT EXISTS days(
	day_num INTEGER,
	trips_id INTEGER,
	date TEXT
);

CREATE TABLE IF NOT EXISTS activities(
	title TEXT,
	time_start TIME,
	time_end TIME,
	location TEXT,
	notes TEXT,
	days_id INTEGER
)