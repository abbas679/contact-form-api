# Contact Form API

Simple REST API to handle website contact form submissions using **Node.js**, **Express**, and **MongoDB**.

---

## Features

- Submit contact messages (Name, Email, Message)  
- View all submissions (newest first)  
- Input validation for Name, Email, and Message  
- JSON-based API  
- Error handling

---

## API Endpoints

**POST** `/api/v1/contacts` – Submit a contact form  
**GET** `/api/v1/contacts` – Retrieve all submissions

**Sample POST Request:**

```json
{
  "name": "Ali Khan",
  "email": "ali.khan@example.com",
  "message": "I want to know more about your services."
}
