# Instagram Clone

This project is an Instagram clone, structured with a backend and a planned frontend.

## Project Structure

- **backend/**: Contains all server-side code, APIs, and business logic.
- **frontend/**: Will be created for user interface and client-side logic.

---

## Backend Overview

The backend is built with Node.js and Express. It handles authentication, user management, posts, and follow functionality. The backend connects to a database (MongoDB) for data storage.

### Key Methods & Features Used in Backend

- **Authentication**
  - User registration and login
  - JWT token generation and verification
  - Middleware for protected routes

- **User Management**
  - Create, update, and delete user profiles
  - Follow/unfollow users

- **Post Management**
  - Create, update, delete, and fetch posts
  - Like and comment functionality (planned)

- **Database Integration**
  - MongoDB with Mongoose models for User, Post, Follow

- **Controllers**
  - `auth.controller.js`: Handles authentication logic
  - `post.controller.js`: Handles post-related operations

- **Middlewares**
  - `auth.middleware.js`: Protects routes, verifies JWT

- **Routes**
  - `auth.routes.js`: Authentication endpoints
  - `post.route.js`: Post endpoints

---

## Frontend (To Be Developed)

The frontend will be developed to provide a user interface for the Instagram clone. It will interact with the backend APIs for authentication, posts, and user actions. Technologies like React.js are recommended for building the frontend.

---

## How to Run

1. Navigate to the `backend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```

Frontend instructions will be added once development begins.

---

## Author

- Project by Tauseef

---

## Note

- The backend is fully functional for basic Instagram features.
- Frontend development is planned next.


