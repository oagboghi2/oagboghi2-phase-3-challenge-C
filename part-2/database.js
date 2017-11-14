const pgp = require('pg-promise')();
const print = require('node-print');
const connectionString = 'postgres://localhost:5432/hotels_db';
const db = pgp(connectionString);

function guests(){
  db.any(`SELECT * FROM guests`)
  .then(function(data){
    print.pt(data);
    return data
  })
}

function rooms(available){
  var available = true;
  db.any(`SELECT * FROM available WHERE available = $1`,available)
  .then(function(data){
    print.pt(data);
      return data
  })
}

function bookings(){
  db.any(` SELECT number, guests.name AS Guest_Name, check_in, check_out FROM bookings
            JOIN rooms ON rooms.id = bookings.rooms_id
            JOIN guests ON guests.id = bookings.guests_id
            WHERE check_out > CURRENT_DATE;`)
  .then(function(data){
    print.pt(data);
      return data
  })
}

function bookingsSelect(number){
  db.any(` SELECT number, guests.name AS Guest_Name, check_in, check_out FROM bookings
            JOIN rooms ON rooms.id = bookings.rooms_id
            JOIN guests ON guests.id = bookings.guests_id
            WHERE number = $1;`, number)
  .then(function(data){
    print.pt(data);
      return data
  })
}


module.exports = {guests, rooms, bookings, bookingsSelect};
