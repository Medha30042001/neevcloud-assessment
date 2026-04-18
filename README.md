# 💸 Smart Expense Splitter

A lightweight tool I built to simplify shared expense tracking among groups.

---

## 🚀 Live Demo
👉 [https://your-vercel-link.vercel.app](https://neevcloud-assessment.vercel.app/)
- video demo : https://drive.google.com/file/d/1w6fqln4P6RkEuEvYKHodAaGXaju5CGFj/view?usp=sharing
---

## ✨ Features

- Create a group by adding members
- Add shared expenses
- Automatically split expenses equally
- Real-time balance calculation
- View who owes whom
- Simple and user-friendly UI

---

## 🧠 How It Works

Each expense stores:
- Amount
- Person who paid
- Participants involved

The app calculates:
- Individual balances
- Final settlements using a simplified debt algorithm

---

## 🏗️ Architecture

Frontend-only application built using React (Vite)

Structure:
src/
 ├── components/
 │    ├── GroupForm.jsx
 │    ├── ExpenseForm.jsx
 │    ├── Summary.jsx
 ├── utils.js
 ├── App.jsx

---

## ⚙️ Setup Instructions

Clone the repository:
git clone https://github.com/your-username/neevcloud-assessment.git
cd expense-splitter

Install dependencies:
npm install

Run locally:
npm run dev

---

## 📊 Core Logic

Balance Calculation:
Each participant shares expenses equally and balances are updated accordingly.

Debt Simplification:
Converts balances into minimal transactions like:
A pays B ₹200

---

## 🎯 Future Improvements

- Custom split
- Persistent storage
- Expense categories
- AI-based insights

---

## 📌 Submission Details

- GitHub Repository
- Deployed on Vercel
- Demo Video included

---

## 🙌 Author

Medha Adepu
