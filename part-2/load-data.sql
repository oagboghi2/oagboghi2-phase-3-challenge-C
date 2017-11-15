/c

COPY rooms(id,number,capacity)
FROM '/Users/obo/Desktop/phase-3-Challenge-C/Assets/rooms.csv' DELIMITER ',' CSV HEADER;

COPY guests(id,name,email)
FROM '/Users/obo/Desktop/phase-3-Challenge-C/Assets/guests.csv' DELIMITER ',' CSV HEADER;

copy bookings (id, room_id, guest_id, check_in, check_out)
FROM '/Users/obo/Desktop/phase-3-challenge-C/Assets/bookings.csv' DELIMITER ',' CSV HEADER;
