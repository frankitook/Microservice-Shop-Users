# Microservice E-commerce User

This project is a user management microservice designed for an e-commerce store, developed as part of a scalable microservices architecture. Built with Node.js and Express, this service provides essential functionalities such as user registration, authentication with JWT (JSON Web Token), and user profile management. It supports secure API endpoints for creating, updating, and managing user data, following RESTful principles.

With a focus on security, efficiency, and scalability, this microservice integrates seamlessly with other e-commerce services such as product catalog, order management, and payment processing.

Ideal for developers building online stores, this repository can be customized or expanded to support additional features like role-based access control, OAuth integration, and email verification.

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
