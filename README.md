# MERN Course Management System

A full-stack **Course Management System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This application allows users to perform complete CRUD (Create, Read, Update, Delete) operations on courses and search courses by name.

---

## Features

- Add a new course
- View all available courses
- Update existing course details
- Delete a course
- Search a course by its name
- Responsive user interface using Bootstrap
- RESTful API built with Express.js
- MongoDB database integration using Mongoose

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap 5

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## Project Structure

```text
mern_exam
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   └── db.js
│
├── frontend
│   ├── public
│   ├── screenshots
│   └── src
│
├── README.md
└── .gitignore
```

---

# Application Screenshots

## 1. Home Page

Displays all available courses.

![Home](frontend/screenshots/home.png)

---

## 2. Add Course

Course creation form.

![Add Course](frontend/screenshots/addcourse.png)

---

## 3. After Adding Course

Newly added course displayed on the home page.

![After Add](frontend/screenshots/afteradd.png)

---

## 4. Update Course

Course update form.

![Update Course](frontend/screenshots/updatecourse.png)

---

## 5. After Updating Course

Updated course information displayed successfully.

![After Update](frontend/screenshots/afterupdate.png)

---

## 6. After Deleting Course

Course removed successfully from the application.

![After Delete](frontend/screenshots/afterdelete.png)

---

## 7. Search Course

Searching for a course by its name.

![Before Search](frontend/screenshots/beforesearch.png)

---

## 8. Search Result

Course details displayed after a successful search.

![After Search](frontend/screenshots/aftersearch.png)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/harshgupta73/mern_eval.git
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
npm start
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/addCourse` | Add a new course |
| GET | `/getAllCourses` | Get all courses |
| GET | `/getCourseById/:id` | Get course by ID |
| GET | `/getCourseByName/:name` | Search course by name |
| PATCH | `/updateCourse/:id` | Update course details |
| DELETE | `/deleteCourse/:id` | Delete a course |

---

## Author

**Harshvardhan Gupta**