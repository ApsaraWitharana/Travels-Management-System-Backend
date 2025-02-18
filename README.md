# Travel Management System - Backend

<a href="https://git.io/typing-svg">     
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=50&pause=1000&center=true&vCenter=true&color=FFA500&width=1000&height=70&lines=TRAVEL+MANAGEMENT+BACKEND" alt="Orange Themed Backend" />
</a>

## Overview
The Travel Management System Backend is built using **Node.js, Express.js, and MongoDB**. It provides APIs for user authentication, travel booking management, and other essential functionalities required for a travel management system.

## Tech Stack
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB & Mongoose** - NoSQL database & ORM
- **JWT** - Authentication
- **Multer** - File handling
- **CORS** - Cross-Origin Resource Sharing

## Installation

### Prerequisites
- **Node.js** (v16 or later)
- **MongoDB** (Atlas or Local)

### Steps to Setup
```sh
# Clone the repository
https://github.com/ApsaraWitharana/Travels-Management-System-Backend.git

# Navigate to the project folder
cd tour-management-system-backend

# Install dependencies
npm install

# Create a .env file and configure environment variables
cp .env.example .env

# Start the server (Development Mode)
npm run start-dev

# Start the server (Production Mode)
npm start
```

## Environment Variables
Create a `.env` file in the root directory and add the following configurations:
```env
PORT = 8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | User login & token generation |

## Postman API Documentation 

```
https://documenter.getpostman.com/view/35385905/2sAYXFjJBV

```

## Running Tests
```sh
npm test
```

## 💜License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or collaboration:
- **Author:** [Sachini Apsara](https://github.com/ApsaraWitharana)

  
<div align="center">
    © 2025 All Rights Reserved, Designed By Sachini Apsara
</div>



⭐ **Feel free to contribute, star the repo, and explore more!**
