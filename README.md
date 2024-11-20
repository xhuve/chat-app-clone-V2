# EasyChat

EasyChat is a real-time chat application that allows users to communicate instantly through a web interface.

## Purpose

The project aims to provide a seamless and user-friendly platform for real-time communication, solving the problem of instant messaging and online user interaction.

## Key Features

- User authentication and authorization
- Real-time messaging with Socket.io
- Online user tracking
- Responsive UI built with React and Tailwind CSS
- RESTful API for user and message management

## Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS
- DaisyUI
- React Router
- Axios
- Zustand

### Backend
- Node.js
- Express
- Mongoose
- Socket.io

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure Node.js is installed on your machine.
- **MongoDB**: A running instance of MongoDB is required.
- **Environment Variables**: You'll need to set up environment variables (see Installation section).

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/xhuve/chat-app-clone-V2
   ```

2. Navigate to the project directory:
   ```
   cd chat_app
   ```

3. Install backend dependencies:
   ```
   npm install
   ```

4. Navigate to the client directory and install frontend dependencies:
   ```
   cd client
   npm install
   ```

5. Create a `.env` file in the root directory and add the necessary environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Usage

1. Start the backend server:
   ```
   npm run server
   ```

2. In a new terminal, start the frontend development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.
