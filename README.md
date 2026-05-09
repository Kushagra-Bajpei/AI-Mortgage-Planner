# ✨ QuickRaina: AI Dream Visualization Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**QuickRaina** is a premium full-stack MERN application that transforms the ethereal world of dreams into vivid visual and poetic interpretations. Leveraging AI-driven logic and a futuristic interface, users can explore their subconscious through a sophisticated chat experience.

---

## 🖼️ Project Showcases

| Home Page | AI Chat Interface |
| :---: | :---: |
| ![Home Page](./assets/Home.png) | ![Chat Interface](./assets/Chat.png) |

| Authentication |
| :---: |
| ![Auth Page](./assets/Auth.png) |

---

## 🚀 Key Features

- **🧠 AI Dream Visualization**: Enter your dream descriptions and receive a matched high-quality visualization along with a poetic interpretation of your symbols.
- **💬 Persistent Chat History**: Integrated with MongoDB to save, rename, and manage your entire conversation history.
- **🔐 Secure Authentication**: Robust JWT-based system with protected routes and persistent user sessions.
- **🎨 Premium UI/UX**:
  - Futuristic dark-themed aesthetic with **Glassmorphism**.
  - Smooth micro-animations powered by **Framer Motion**.
  - Responsive layout with a collapsible sidebar and intuitive navigation.
- **🌗 Theme Intelligence**: Supports dynamic theme switching and real-time UI updates.
- **🛡️ Full-Featured Pages**: Includes Home, About, How It Works, Testimonials, Contact, Pricing, and a comprehensive Blog.

---

## 🛠️ Technology Stack

### **Frontend**
- **React (Vite)**: Lightning-fast development and optimized production builds.
- **Tailwind CSS v4**: Advanced utility-first styling for a sleek, modern look.
- **Framer Motion**: High-performance animations and transitions.
- **React Router Dom**: Client-side routing for a seamless SPA experience.
- **Lucide React**: Premium iconography.

### **Backend**
- **Node.js & Express**: High-performance server-side logic.
- **MongoDB & Mongoose**: Scalable NoSQL database for users and chat data.
- **JSON Web Token (JWT)**: Secure, stateless authentication via Bearer tokens.
- **BcryptJS**: Industry-standard password hashing.
- **CORS & Cookie Parser**: Secure cross-origin resource sharing and cookie handling.

---

## 📂 Project Structure

```bash
QuickRAINA/
├── client/              # Vite + React Frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components (Sidebar, Navbar, etc.)
│   │   ├── pages/       # Page components (Home, Chat, Login, Blog, etc.)
│   │   ├── hooks/       # Custom hooks (Auth, Theme)
│   │   └── App.jsx      # Main application routing
│   └── public/          # Static assets and dream images
└── server/              # Node.js + Express Backend
    ├── config/          # Database configuration
    ├── controllers/     # API business logic
    ├── models/          # Mongoose schemas (User, Chat, Dream)
    ├── routes/      # API endpoint definitions
    ├── middleware/      # JWT auth and error handling
    └── index.js         # Server entry point
```

---

## ⚙️ Setup & Installation

### **Prerequisites**
- **Node.js** (v18 or higher)
- **MongoDB** (Local or Atlas instance)

### **1. Clone & Install**
```bash
git clone <your-repo-url>
cd QuickRAINA

# Install Backend Dependencies
cd server
npm install

# Install Frontend Dependencies
cd ../client
npm install
```

### **2. Environment Configuration**
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
NODE_ENV=development
```

### **3. Run the Application**

**Start Backend (from `server` folder):**
```bash
npm run dev
```

**Start Frontend (from `client` folder):**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 🔗 API Endpoints (Quick Reference)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | User Registration |
| `POST` | `/api/auth/login` | User Login |
| `GET` | `/api/chat` | Fetch user chat history |
| `POST` | `/api/dream/analyze` | Submit dream for AI visualization |
| `GET` | `/api/user/profile` | Get logged-in user details |

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Developed with ❤️ for the Dreamers.
</p>
