#  School Management API

A Node.js + Express + MySQL based REST API to manage school data.  
It allows users to add schools and retrieve them sorted by proximity using latitude & longitude.

---

##  Live Demo

 Base URL:  
https://school-api-gvh7.onrender.com  

---

##  Features

-  Add new school  
-  Get schools sorted by distance  
-  MySQL database integration  
-  Deployed on Render  
-  Postman collection available  

---

##  Tech Stack

- Node.js  
- Express.js  
- MySQL  
- Railway (Database)  
- Render (Deployment)  

---

##  API Endpoints

### ➤ 1. Add School

- **URL:** `/addSchool`  
- **Method:** `POST`  
- **Body:**

```json
{
  "name": "Test School",
  "address": "Delhi",
  "latitude": 28.61,
  "longitude": 77.20
}
