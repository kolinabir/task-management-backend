# Task Management API

## Overview

This Task Management API allows users to create, view, update, and delete tasks. Below are the detailed endpoints for handling tasks and authentication.

The API is hosted on Vercel and can be accessed using the following
live link: https://task-management-backend-six-sigma.vercel.app/

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/kolinabir/task-management-backend
   ```
2. Navigate to the project directory:
   ```sh
   cd <repository-directory>
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

## API Endpoints
## Full POSTMAN Documentation: https://documenter.getpostman.com/view/27392607/2sA3dxEriE

### Tasks

#### Create New Task

- **Endpoint**: `POST https://task-management-backend-six-sigma.vercel.app/tasks`
- **Body**:
  ```json
  {
    "title": "Complete the Project asdadasd",
    "description": "Finish the remaining tasks for the project"
  }
  ```

#### Get All Tasks

- **Endpoint**: `GET https://task-management-backend-six-sigma.vercel.app/tasks/`

#### Get a Task

- **Endpoint**: `GET https://task-management-backend-six-sigma.vercel.app/tasks/:taskId`

#### Delete a Task

- **Endpoint**: `DELETE https://task-management-backend-six-sigma.vercel.app/tasks/:taskId`

#### Update Task Details

- **Endpoint**: `PUT https://task-management-backend-six-sigma.vercel.app/tasks/:taskId`
- **Body**:
  ```json
  {
    "status": "completed"
  }
  ```

### Extra Features

#### Authentication

##### Register New User

- **Endpoint**: `POST http://localhost:5000/auth/register`
- **Body**:
  ```json
  {
    "userId": "12d45",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword",
    "role": "admin"
  }
  ```

##### Login New User

- **Endpoint**: `POST http://localhost:5000/auth/login`
- **Body**:
  ```json
  {
    "userId": "12d45",
    "password": "securepassword"
  }
  ```

##### Check Login

- **Endpoint**: `GET http://localhost:5000/auth/check-auth`
- **Request Headers**:
  ```http
  Authorization: Bearer <token>
  ```

##### Change Password

- **Endpoint**: `POST http://localhost:5000/auth/change-password`
- **Request Headers**:
  ```http
  Authorization: Bearer <token>
  ```
- **Body**:
  ```json
  {
    "oldPassword": "securepassword1",
    "newPassword": "securepassword"
  }
  ```

### frontend live: https://taskmanager-lyart.vercel.app/

### frontend repo: https://github.com/kolinabir/taskmanager--frontend
