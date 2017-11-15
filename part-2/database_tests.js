const expect = require('chai').expect;
var pgp = require('pg-promise');
var db = require("./database");

  describe('guests()', () => {
      it('retreives the list of guests from the hotel_db', function(){
        //Set the goal
            return db.guests().then((data) => {
              //test the promise
               expect(data.length).to.eql(20);
          });
      });
  });

  describe('guests()', () => {
      it('expect name to be Charlton Milton', function(){
        //Test the promise
            return db.guests().then((data) => {
              expect(data[3]["name"]).to.eql('Charlton Millson');
          });
      });
  });

  describe('guests()', () => {
      it('retreives the list of guests from the hotel_db', function(){
            return db.guests().then((data) => {
              expect(data[1]["email"]).to.eql('kpougher1@oakley.com');
          });
      });
  });

  describe('rooms()', () => {
      it('retreives the list of rooms from the hotel_db', function(){
        //Set the goal
            return db.rooms().then((data) => {
              //test the promise
               expect(data.length).to.eql(40);
          });
      });
  });

  describe('rooms()', () => {
      it('expect room number to be 3B', function(){
        //Test the promise
            return db.rooms().then((data) => {
              expect(data[1]["number"]).to.eql("3C");
          });
      });
  });

  describe('bookings()', () => {
      it('retreives a list of rooms from the hotel_db that match specifications', function(){
        //Set the goal
            return db.bookings().then((data) => {
              //test the promise
               expect(data.length).to.eql(32);
          });
      });
  });

  describe('bookings()', () => {
      it('expect name to be Natty Linnard', function(){
        //Test the promise
            return db.bookings().then((data) => {
              expect(data[3]["guest_name"]).to.eql("Natty Linnard");
          });
      });
  });
