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

function rooms(){
  db.any(`SELECT * FROM rooms`)
  .then(function(data){
    print.pt(data);
    return data
  })
}
module.exports = {guests, rooms};
