# 🚗 Car Type Classifier with Azure AI

This project is a prototype web app that classifies car images into different types using **Azure Custom Vision AI**. It was built as part of a demo mission to explore how AI can be integrated into a full-stack web app hosted on **Azure**.

---

## 🌐 Overview

The app shows how the **frontend**, **backend**, and **Azure AI** work together:
- **Frontend:** React – upload an image and view results  
- **Backend:** Node.js/Express – handle routes and API calls  
- **AI:** Azure Custom Vision – classify car images  

---

## 🧱 Architecture

**Frontend (React)** → **Backend (Express API)** → **Azure AI (Custom Vision Model)**  

The frontend sends requests to the backend, which validates them using a middleware API key check and then connects to Azure AI for predictions.

---

## ⚙️ Tech Stack

- **Frontend:** React  
- **Backend:** Node.js, Express  
- **AI Service:** Azure Custom Vision  
- **Hosting:** Azure App Service & Static Web Apps  
- **Security:** Middleware for API key validation  

---

## 🧠 AI Model

- **Platform:** Azure Custom Vision  
- **Dataset:** Kaggle car dataset  
- **Categories:** Convertible, Coupe, Sedan, SUV, Van  
- **Training Size:** ~30 images per category (prototype scale)  
- **Goal:** Identify the car type from an uploaded image  

---

## 🔐 Backend Highlights

- Routes for AI communication and predictions  
- Middleware for validating **`x-api-key`**  
- Calls Azure Custom Vision for inference results  

---

## 🧩 Frontend Highlights

- Simple upload interface  
- Displays prediction results clearly  
- Clean layout made for quick testing  

---

## 💭 Reflection & Future Plans

### **Reflection**
- Didn’t get to add everything I planned due to time limits  
- Struggled with setting up and training the AI (GPT helped with that 😅)  
- Learned a lot about API key validation and connecting AI services  
- Fun experience seeing everything come together  

### **Future Improvements**
- Add more features and improve the UI  
- Train with a larger dataset for better accuracy  
- Try using Google or AWS for comparison  
- Store prediction results in a database  

---

## 🙏 Acknowledgements

- [Azure Custom Vision](https://azure.microsoft.com/en-us/products/ai-services/custom-vision-service)  
- [Kaggle Car Dataset](https://www.kaggle.com/)  
- [Best README Template](https://github.com/othneildrew/Best-README-Template)  

---

## 👋 Thanks!

This was a great learning project and a fun way to explore AI integration with full-stack development.
