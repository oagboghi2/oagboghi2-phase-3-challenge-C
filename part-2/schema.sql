DROP DATABASE IF EXISTS hotels_db;
        CREATE DATABASE hotels_db;

\c hotels_db

           CREATE TABLE rooms(
                     ID  SERIAL PRIMARY KEY,
                 number VARCHAR(100),
               capacity INTEGER
          );

           CREATE TABLE guests(
                     ID SERIAL PRIMARY KEY,
                   name VARCHAR(100),
                  email TEXT
           );

           CREATE TABLE bookings(
                     ID SERIAL PRIMARY KEY,
              guests_id INTEGER REFERENCES guests(guests_id),
               rooms_id INTEGER REFERENCES rooms(rooms_id),
               check-in DATE,
              check-out DATE
           );
