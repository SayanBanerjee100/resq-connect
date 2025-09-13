# resq-connect
🌍 A real-time disaster management platform built with MERN stack, enabling SOS reporting, volunteer coordination, and AI-powered disaster prediction

# ResQ Connect 🚨  
*A MERN-powered Disaster Management Platform*

## 🌍 Overview
ResQ Connect is a **disaster management system** designed to provide real-time communication and coordination during natural calamities.  
It enables **citizens, volunteers, NGOs, and authorities** to connect seamlessly for effective rescue and relief operations.  

## ✨ Key Features
- 🆘 **SOS Reporting** – Citizens can raise emergency alerts with location details.  
- 🗺 **Interactive Map** – Real-time disaster zones & SOS pins visualized.  
- 🤝 **Volunteer & Resource Management** – Efficient allocation of people & resources.  
- 🤖 **AI-Powered Predictions** – Disaster risk forecasts integrated into the dashboard.  
- 📱 **PWA & Offline Mode** – Works even in low-network areas.  
- 🔔 **Real-Time Alerts** – Instant updates using WebSockets.  

## 🛠 Tech Stack
- **Frontend:** React, TailwindCSS, Leaflet.js (Maps)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Realtime:** Socket.io  
- **AI/ML Integration:** Python APIs (via Flask/FastAPI)  

## 🚀 How It Works
1. Citizen raises SOS → sent to backend (MongoDB).  
2. Data is broadcast via WebSockets → Map Dashboard updates in real time.  
3. Volunteers/Authorities can allocate resources or mark SOS as resolved.  
4. AI model predicts disaster risks → displayed in charts & alerts.  
5. PWA support → works offline & syncs when internet is restored.  

## 👥 Team Roles
- **MERN Team:** Backend, APIs, real-time updates, PWA integration.  
- **Web Dev Team:** UI/UX design, static frontend, responsive layouts.  
- **AI/ML Team:** Predictive analytics, risk modeling, data insights.  

## 📸 Screenshots / Demo


## 🏆 Hackathon Note
This project was built for **[ SIH 2025]** and aims to demonstrate the power of technology in **disaster response & management**.

 

## 📂 Project Structure
resq-connect/                  # Root folder (your repo name)
│
├── client/                    # React frontend
│   ├── public/                # Public assets (favicon, manifest.json for PWA)
│   ├── src/                   # Source code
│   │   ├── components/        # Reusable UI components (Navbar, Buttons, Cards)
│   │   ├── pages/             # Full pages (Login, SOSForm, Dashboard, MapView)
│   │   ├── services/          # API calls (axios functions for backend)
│   │   ├── context/           # Context API / state management
│   │   ├── App.js             # Root React component
│   │   └── index.js           # Entry point
│   ├── package.json
│   └── tailwind.config.js
│
├── server/                    # Node.js + Express backend
│   ├── config/                # DB connection, environment config
│   ├── controllers/           # Business logic (SOS, Users, Disaster APIs)
│   ├── models/                # MongoDB schemas (User, SOS, Disaster, Resource)
│   ├── routes/                # Express routes
│   ├── middleware/            # Auth, role-based access, error handling
│   ├── utils/                 # Helper functions (e.g., geo-calculations)
│   ├── server.js              # Entry point for backend
│   └── package.json
│
├── ai-api/ (optional)         # AI/ML Team’s Python API (Flask/FastAPI)
│   ├── app.py                 # Exposes predictions to MERN backend
│   └── requirements.txt
│
├── docs/                      # Documentation (presentation, diagrams, reports)
│   ├── flowchart.png
│   ├── architecture-diagram.png
│   └── README.md (short overview for docs)
│
├── README.md                  # Project description (main entry for judges)
├── .gitignore
└── package.json (optional root if using monorepo setup)


