const pgp = require("pg-promise");
const print = require("node-print");
const db = require("./database");

console.log(process.argv);
var argument = process.argv[3];

switch (process.argv[2]){
  case 'guests':
    console.log("guests");
    db.guests();
    break;
  case "rooms":
    console.log("rooms");
    db.rooms(argument);
    break;
  case 'bookings':
    console.log("booking");
    db.bookings();
    break;
  case 'bookingsSelect':
    console.log("Select a room");
    db.bookingsSelect(argument);
    break;
  default:
    console.log("Enter input");
}
