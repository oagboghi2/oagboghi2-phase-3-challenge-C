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
              guests_id INTEGER REFERENCES guests(ID),
               rooms_id INTEGER REFERENCES rooms(ID),
               check_in DATE,
              check_out DATE
           );


 COPY rooms(id,number,capacity)
 FROM '/Users/obo/Desktop/phase-3-Challenge-C/Assets/rooms.csv' DELIMITER ',' CSV HEADER;

 COPY guests(id,name,email)
 FROM '/Users/obo/Desktop/phase-3-Challenge-C/Assets/guests.csv' DELIMITER ',' CSV HEADER;

 copy bookings (id, rooms_id, guests_id, check_in, check_out)
 FROM '/Users/obo/Desktop/phase-3-challenge-C/Assets/bookings.csv' DELIMITER ',' CSV HEADER;
