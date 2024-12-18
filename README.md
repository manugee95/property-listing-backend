# Backend for Property Listing App

This is the backend server for the Property Listing App, built using Express.js. It provides API endpoints to retrieve all properties and a single property by its ID. The server runs on port 3000.

## Features

- Get All Properties: Fetch a list of all properties.
- Get Single Property: Fetch details of a specific property by its ID.

## Tech Stack

- Backend Framework: Express.js
- Data Storage: Mock data or JSON file

## Installation

1. Clone the repository:
   git clone https://github.com/manugee95/property-listing-backend.git

2. Install dependencies:
   npm install

3. Run the server:
   node server.js

   The server will run on `http://localhost:3000`.

## API Endpoints

### Get All Properties

- **URL**: `/api/properties`
- **Method**: `GET`
- **Description**: Retrieve a list of all properties.

### Get Single Property

- **URL**: `/api/properties/:id`
- **Method**: `GET`
- **Description**: Retrieve details of a specific property by its ID.


## Dependencies

- Express.js

## License

This project is licensed under the [MIT License](LICENSE).

