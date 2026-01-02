# AI Art Generator

A full-stack project that allows users to generate AI-powered art using Hugging Face models.

---

## 🗂️ Project Structure

AI-Art-Generator/  
├── frontend/  
│   ├── index.html  
│   ├── script.js  
│   └── style.css  
├── backend/  
│   ├── server.js  
│   ├── package.json  
│   └── package-lock.json  
├── .gitignore  
├── README.md  
└── .env.example  

---

## ⚙️ Setup Instructions

### 1. Create `.env` file in `backend/`

HF_TOKEN=your_huggingface_token_here  
PORT=5000  

### 2. Install dependencies

cd backend  
npm install  

### 3. Run the server

node server.js  

### 4. Open frontend

Open `frontend/index.html` in your browser.

---

## 💡 Features

- AI-powered image generation  
- Simple and interactive frontend  
- Secure backend using environment variables  
- Easy to deploy and extend  
