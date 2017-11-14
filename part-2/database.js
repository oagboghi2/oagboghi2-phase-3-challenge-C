const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/drinks';
const db = pgp(connectionString);


var options = {
  //Initialization options
  promiseLib: promise
};
