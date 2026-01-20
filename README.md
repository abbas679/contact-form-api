````markdown
# Contact Form API

A simple REST API for handling website contact form submissions. Built with **Node.js**, **Express**, and **MongoDB**.

---

## Features

- Submit contact form messages via POST request
- Retrieve all submissions via GET request
- Input validation:
  - Name: minimum 2 characters
  - Email: valid email format
  - Message: minimum 10 characters
- Submissions returned in reverse chronological order
- Centralized error handling
- JSON request/response format

---

## Technologies Used

- Node.js (v24+)
- Express.js
- MongoDB (local or Atlas)
- Mongoose
- dotenv
- Nodemon (for development)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/contact-form-api.git
cd contact-form-api
```
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/contact_form_db
```

> ⚠️ Make sure `.env` is in `.gitignore` to keep credentials safe.

### 4. Start the server

```bash
npm run dev
```

Server will run at `http://localhost:5000`

---

## API Endpoints

### Submit Contact Form

**POST** `/api/v1/contacts`

**Request Body:**

```json
{
  "name": "Ali Khan",
  "email": "ali.khan@example.com",
  "message": "I want to know more about your services."
}
```

**Success Response (201):**

```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "_id": "696f60270c8d4d4dd8e0f11d",
    "name": "Ali Khan",
    "email": "ali.khan@example.com",
    "message": "I want to know more about your services.",
    "createdAt": "2026-01-20T10:59:51.711Z",
    "updatedAt": "2026-01-20T10:59:51.711Z",
    "__v": 0
  }
}
```

**Validation Error (400):**

```json
{
  "success": false,
  "errors": {
    "name": "Name must be at least 2 characters",
    "email": "Invalid email format",
    "message": "Message must be at least 10 characters"
  }
}
```

---

### Retrieve All Submissions

**GET** `/api/v1/contacts`

**Success Response (200):**

```json
{
  "success": true,
  "data": [
    {
      "_id": "696f60270c8d4d4dd8e0f11d",
      "name": "Ali Khan",
      "email": "ali.khan@example.com",
      "message": "I want to know more about your services.",
      "createdAt": "2026-01-20T10:59:51.711Z",
      "updatedAt": "2026-01-20T10:59:51.711Z",
      "__v": 0
    }
  ]
}
```

---

## Project Structure

```
contact-form-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── contact.controller.js
│   ├── models/
│   │   └── contact.model.js
│   ├── routes/
│   │   └── contact.routes.js
│   ├── middleware/
│   │   ├── error.middleware.js
│   │   └── validate.middleware.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## License

This project is open-source and free to use.

---

## Notes

- Ensure MongoDB is running locally or use a MongoDB Atlas URI.
- All errors are handled by a centralized error middleware.
- Submissions are returned in reverse chronological order (`createdAt: -1`).

```

```
