# Keypad lock excercise

This is a simple (and very unsecure) keypad that opens a lock when the correct combination is given.

## Requirements

Running the project requires npm to be installed. Also run `npm install` in both the project root directory and `server` directory.

## Server

Server is located in the `server` directory. It can be started by changing to the server directory and running:

### `npm start`

The server runs in port 3001. It has one REST endpoint, GET /check/:code
The server logs results for each check to the console.

## Client

Client has a simple UI consisting of the keypad and a lock state indicator. Keypad is used to input codes and clear the code array. Lock state indicator shows the status (locked/open) with text and background color (red/green). Clicking the lock indicator toggles the lock state to locked (regardless the previous state).

The client has a middleware that checks the code against the server when the user has given four numbers. If the server returns OK, it opens the lock. It then clears the code array.

To start the UI, cd to the project directory and run:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
