# Login App

A simple full-stack login application with user registration and authentication.

---

## Features

- User can **register** with email, username and password
- User can **login** using their credentials
- Built with **React** frontend, **Express** backend, and **MongoDB** (via Mongoose)

---

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose ODM

---
## Environment Variables

Create a `.env` file in the backend folder with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3001

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/alaa-awata/login.git
cd login


# For backend
cd server
npm install
npm run dev

# Open a new terminal window/tab

# For frontend
cd client
npm install
npm run dev
