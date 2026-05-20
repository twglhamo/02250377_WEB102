# TikTok REST API Design and Implementation

## Overview

This practical focuses on designing and implementing a RESTful API for a TikTok-style application using Node.js and Express.js. The project demonstrates how backend APIs communicate with frontend applications through properly structured endpoints and HTTP methods.

The API includes resources such as videos, users, and comments, along with related operations like likes, followers, and video comments.

---

## Objectives

- Understand RESTful API design principles
- Build backend APIs using Express.js
- Implement CRUD operations
- Create controllers and routes
- Handle HTTP requests and responses
- Test APIs using Postman or curl

---

## Technologies Used

- Node.js
- Express.js
- CORS
- Morgan
- Body-parser
- Dotenv
- Nodemon

---

## Project Structure

```bash
server/
│
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── index.js
│
├── .env
├── package.json
└── node_modules/

# Installation
1. Create Project Directory
- mkdir -p server
cd server
2. Initialize Node.js Project
- npm init -y
3. Install Dependencies
- npm install express cors morgan body-parser dotenv
4. Install Development Dependency
- npm install --save-dev nodemon
- Environment Variables

# Create a .env file:
PORT=3000

# Development Mode
npm run dev

# Production Mode
npm start

# Features Implemented
- Express server setup
- RESTful API architecture
- CRUD operations
- Route handling
- Controllers implementation
- In-memory data storage
- Middleware integration
- Environment variable configuration
- API testing support

# Middleware Used
CORS
- Allows communication between frontend and backend applications.

Morgan
- Logs incoming HTTP requests.

Body-parser
- Parses JSON request bodies.

Dotenv
- Loads environment variables securely.

# The API was tested using:

- Postman
- curl commands

Example Requests

Get all users:

curl -X GET http://localhost:3000/api/users

Get all videos:

curl -X GET http://localhost:3000/api/videos

Get user by ID:

curl -X GET http://localhost:3000/api/users/1

Get video comments:

curl -X GET http://localhost:3000/api/videos/1/comments
 
 # Learning Outcomes

- Through this practical, the following concepts were learned:

- RESTful API development
- Express.js application setup
- Route and controller creation
- CRUD operations
- Backend project organization
- Handling API requests and responses
- Testing APIs using Postman and curl

#Conclusion
- This practical successfully demonstrated the implementation of a RESTful API using Node.js and Express.js. It provided hands-on experience in backend development, API routing, and request handling while improving understanding of how frontend and backend systems communicate in modern web applications.