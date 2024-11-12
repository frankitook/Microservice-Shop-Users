# Microservice User

This project is a microservice for user management that is part of a microservices architecture. The service handles user registration, authentication, and management, and is developed with Node.js for the backend.

## Server
http://localhost:3000/

### Create User
POST http://localhost:3000/usuarios

### Update User
PUT http://localhost:3000/usuarios/:nroDni (Require a token)

### Get User
- GET http://localhost:3000/usuarios (Require a token)
- GET http://localhost:3000/usuarios/:nroDni (Require a token)

### Delete User
DELETE http://localhost:3000/usuarios/:nroDni (Require a token)

### Login
POST http://localhost:3000/autenticacion/login


## Installation

### Prerequisites
- Node.js
- npm


### Installation Steps
1. Clone the repository.
2. Set up the .env file (JWT_SECRET , DB_NAME , DB_USER ,DB_PASSWORD , DB_HOST)
3. Run `npm install`.


## Usage

To start the project:
```bash
npm start



