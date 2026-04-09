#  School Management API

A Node.js + Express + MySQL based API to manage schools and sort them based on proximity to a user location.

---

##  Features

-  Add new school
-  Get schools sorted by distance
-  Distance calculated using Haversine formula
-  MySQL database integration
-  Clean and modular backend structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- Postman (for testing)

---

##  Project Structure

school-api/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   └── app.js
│
├── server.js
├── .env
├── package.json

---

##  API Endpoints

###  1. Add School

- **Endpoint:** `/addSchool`
- **Method:** POST

####  Request Body
```json
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.61,
  "longitude": 77.20
}
