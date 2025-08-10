# Chef-Claude — AI-Powered Recipe Generator

Deplyed using Render: https://chef-claude-btmv.onrender.com/
---

Generate personalized recipes using the ingredients you have, powered by Mistral AI from Hugging Face.
Built with **React + Vite** on the frontend and **Express** on the backend for secure API handling.

---

## 📖 Overview

Chef-Claude is an interactive full-stack application where users can input ingredients and receive creative, detailed recipes.
The **frontend** provides a clean, responsive interface built with React, while the **backend** uses Express to make secure calls to the Hugging Face API (Mistral model), keeping API keys hidden from the client.

---

## ✨ Features

* 📝 **Ingredient Input**: Add one or more ingredients to get tailored recipe suggestions.
* 🤖 **AI-Generated Recipes**: Recipes are generated using the **Mistral model** from Hugging Face.
* 🔒 **Secure Backend**: API keys and requests are handled server-side via Express to prevent exposure.
* ⚡ **Fast Development Setup**: Powered by Vite for rapid builds and hot reloads.

---

## 🛠 Tech Stack

**Frontend**

* React (with Hooks & props)
* Vite bundler
* CSS

**Backend**

* Node.js
* Express.js
* Hugging Face Inference API (Mistral model)

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/lifesoharsh/Chef-Claude.git
cd Chef-Claude
```

### 2️⃣ Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the **server** directory:

```env
HF_ACCESS_TOKEN=your_huggingface_api_key_here
```

### 4️⃣ Run the Project

```bash
# Run backend (server directory)
npm run start

# In a new terminal, run frontend (client directory)
npm run dev
```

The frontend will run (e.g., on `http://localhost:5173`) and communicate with the backend API at `http://localhost:3000`.

---

## 📌 How It Works

1. **User Input**: Ingredients are entered in the React UI.
2. **Frontend Request**: The client sends the ingredient list to the Express backend.
3. **Secure AI Call**: The backend uses your Hugging Face API key to send a request to the Mistral model.
4. **AI Response**: The generated recipe is sent back to the frontend and displayed to the user.

---

## 🔮 Future Enhancements

* Save favorite recipes in a database.
* Add user authentication for personalized experiences.
* Allow exporting recipes as PDF or sharing via social media.

---

## 🤝 Contributing

Pull requests and suggestions are welcome!
If you find a bug or have an improvement idea, open an issue.

---
