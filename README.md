# Fruit.Ai

Fruit.ai
Fruit.ai is a health manager product designed to provide users with a mobile-friendly interface to explore various fruit-related services such as a chatbot for fruit information, a translator, FAQs, and more. The project includes basic CRUD functionality for managing fruit-related FAQs and is built with React for the frontend and Flask/FastAPI/Django for the backend.

Features
Login Page: A simple login interface with dummy credentials that redirects to the homepage.
Home Page: Contains links to different services:
Chatbot: Lists fruits as cards and displays individual fruit details.
Translator: A regional language translator tool.
FAQ Page: Create, read, update, and delete FAQs related to fruits.
About Page: Information about the product.

Tech Stack
Frontend
React
CSS for styling
API Interaction with async/await

Backend
Flask/FastAPI/Django
RESTful API with CRUD operations for FAQs

API Endpoints
GET /faqs: Fetch all FAQs
GET /faqs/:id: Fetch a single FAQ by ID
POST /faqs: Create a new FAQ
PUT /faqs/:id: Update an FAQ by ID
DELETE /faqs/:id: Delete an FAQ by ID

Deployment
Frontend and backend: Deployed on Render.

Getting Started
Frontend
Clone the repository: git clone https://github.com/your-username/fruit-ai-frontend.git
Install dependencies: npm install
Run the app: npm start
The app will run at http://localhost:3000

Backend
Clone the repository: git clone https://github.com/your-username/fruit-ai-backend.git
Install dependencies: pip install -r requirements.txt
Run the backend: python app.py
The API will run at http://localhost:5000

Environment Variables
Frontend: REACT_APP_API_URL to point to the backend API.
Backend: Configuration for database, if needed.

Live Demo
Frontend and Backend: https://fruit-ai-kzcm.onrender.com

