const pgp = require("pg-promise");
const print = require("node-print");
const db = require("./database");

console.log(process.argv);
var argument = process.argv[3];

switch (process.argv[2]){
  case 'guests':
    console.log("guests");
    db.guests()
    .then(function(data){
      print.pt(data);
      console.log(data.length);
      return data
    })
    break;
  case "rooms":
    console.log("rooms");
    db.rooms()
    .then(function(data){
      print.pt(data);
      console.log(data.length);

        return data
    })
    break;
    case "roomsSelect":
      console.log("rooms");
      db.roomsSelect(argument)
      .then(function(data){
        print.pt(data);
        console.log(data.length);

          return data
    })
      break;
  case 'bookings':
    console.log("booking");
    db.bookings()
    .then(function(data){
      print.pt(data);
      console.log(data.length);
        return data
    })
    break;
  case 'bookingsSelect':
    console.log("Select a room");
    db.bookingsSelect(argument)
    .then(function(data){
      print.pt(data);
      console.log(data.length);

        return data
    })
    break;
  default:
    console.log("Enter input");
}
