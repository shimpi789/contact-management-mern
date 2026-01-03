# 📇 Contact Management Web App (MERN Stack)

A simple **Contact Management Web Application** built using the **MERN stack** as part of a web developer interview task.  
The app allows users to submit contact details through a form, stores them in MongoDB, and displays all submitted contacts dynamically without page reload.

---

## 🚀 Live Demo
👉 <Add your deployed frontend link here>

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios
- useState & useEffect

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv

---

## ✨ Features

### 1. Contact Form
- Fields:
  - Name (required)
  - Email (validated)
  - Phone (required)
  - Message (optional)
- Client-side validation with error messages
- Submit button disabled until form is valid

### 2. Backend APIs
- `POST /api/contacts` → Store contact details
- `GET /api/contacts` → Fetch all submitted contacts
- RESTful API design

### 3. Database
- MongoDB used to store contact data
- Mongoose schema with required field validation

### 4. Display Contacts
- Contacts displayed dynamically after submission
- No page reload (React state-based rendering)
- Clean card-based UI

### 5. UI & UX
- Modern gradient background
- Card-based layout for form and contacts
- Responsive and user-friendly design
- Clear success and error feedback

---

## 📂 Project Structure

contact-management-app/
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── ContactForm.jsx
│ │ ├── ContactList.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ └── package.json
│
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── contactController.js
│ ├── routes/
│ │ └── contactRoutes.js
│ ├── models/
│ │ └── Contact.js
│ ├── server.js
│ └── .env
│
├── .gitignore
└── README.md



---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5004
MONGO_URI=your_mongodb_connection_string


▶️ How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/contact-management-mern.git
cd contact-management-mern

2️⃣ Start Backend
cd backend
npm install
node server.js


Backend will run on:

http://localhost:5004

3️⃣ Start Frontend
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173
