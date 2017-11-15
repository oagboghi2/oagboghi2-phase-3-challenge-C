const pgp = require('pg-promise')();
const print = require('node-print');
const connectionString = 'postgres://localhost:5432/hotels_db';
const db = pgp(connectionString);

function guests(){
  return db.any(`SELECT * FROM guests`)
}

function rooms(){
  return db.any(`SELECT * FROM available`)
}

function roomsSelect(available){
  var available = true;
  return db.any(`SELECT * FROM available WHERE available = $1`,available)

}

function bookings(){
  return db.any(` SELECT number, guests.name AS Guest_Name, check_in, check_out FROM bookings
            JOIN rooms ON rooms.id = bookings.rooms_id
            JOIN guests ON guests.id = bookings.guests_id
            WHERE check_out > CURRENT_DATE;`)
}

function bookingsSelect(number){
  return db.any(` SELECT number, guests.name AS Guest_Name, check_in, check_out FROM bookings
            JOIN rooms ON rooms.id = bookings.rooms_id
            JOIN guests ON guests.id = bookings.guests_id
            WHERE number = $1;`, number)
}


module.exports = {guests, rooms,roomsSelect, bookings, bookingsSelect};
