# Grocery Booking Application

This project is a full-stack web application for managing and booking grocery items. It includes features for both admin and user roles, with a RESTful API backend built with Node.js, Express, and MongoDB, and a frontend built with React.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Docker Setup](#docker-setup)
- [Usage](#usage)
  - [Admin](#admin)
  - [User](#user)
- [API Endpoints](#api-endpoints)
  - [Admin Endpoints](#admin-endpoints)
  - [User Endpoints](#user-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

### Admin
- Add new grocery items
- View existing grocery items
- Update grocery item details
- Remove grocery items
- Manage inventory levels

### User
- View available grocery items
- Book multiple grocery items in a single order

## Technologies

- **Backend:** Node.js, Express, MongoDB, TypeScript
- **Frontend:** React, React Router, Fetch API
- **Containerization:** Docker, Docker Compose

## Setup

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/howebo/qp-assessment.git
   cd qp-assessment/backend

2. **Install dependencies:**
   ```bash
    npm install
3.  **Set up environment variables:**
     Create a .env file in the backend directory and add the following:
      ```bash
      PORT=3000
      MONGO_URI=mongodb://localhost:27017/grocery
4. **Run the Server**
   ```bash 
    npm start

### Frontend Setup

1. **Navigate to the frontend directory:**
    ```bash
      cd qp-assessment/frontend
2. **Install dependencies:**
   ```bash
    npm install
3. **Run the frontend:**
   ```bash
    npm start

### Docker Setup
 1. **Navigate to the frontend directory:**
    ```bash
      cd ..
2. **Build and start the containers:**
   ```bash
    docker-compose up --build

### Usage
  **Admin**
    Admins can manage grocery items and inventory through the Admin Dashboard.
  **User**
    Users can view and book grocery items through the User Dashboard.



### API Endpoints
**Admin Endpoints:**
  
  Add Grocery Item:
  
    POST /admin/add
Body:

    { "name": "string", "price": "number", "inventory": "number" }

View Grocery Items:

    GET /admin/view

Update Grocery Item:

    PUT /admin/update/:id

Body:

    { "name": "string", "price": "number", "inventory": "number" }

Remove Grocery Item:

    DELETE /admin/remove/:id

Update Inventory:

    PATCH /admin/manage/:id

Body:

    { "inventory": "number" }

### User Endpoints
 
View Grocery Items

    GET /user/view
    
Book Grocery Items:

    POST /user/book

Body:

    { "items": [{ "id": "string", "quantity": "number" }] }

### Environment Variables
  
  The application uses environment variables for configuration. Create a .env file in the backend directory and add the following:

    PORT=3000
    MONGO_URI=mongodb://localhost:27017/grocery

### Contributing
  
  Contributions are welcome! Please fork the repository and create a pull request to contribute.

### License
  
  This project is licensed under the MIT License.

    This updated `README.md` file includes code blocks for easier copying and provides a comprehensive guide for setting up, using, and contributing to the project.





