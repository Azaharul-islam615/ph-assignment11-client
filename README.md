# ContestHub

**Live Site URL:** [https://fastidious-centaur-cc9cf4.netlify.app/](https://fastidious-centaur-cc9cf4.netlify.app/)

## Project Overview
ContestHub is a contest management platform where users can participate in various contests, create new contests, and announce winners. The platform provides different roles and features for users to enhance their experience.

## Technologies Used
- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Firebase Authentication
- **Payment Integration:** Stripe
- **Charts & Animations:** Recharts, AOS

## Key Features
✅ User Registration & Login (Firebase Authentication)
✅ Roles: Admin, Contest Creator, Normal User
✅ Admin Panel: Approve/reject contests, change user roles
✅ Contest Creator: Create and edit contests
✅ Participation: Users can join contests and register via payment
✅ Deadline Countdown: Live contest countdown timer
✅ Submission: Participants can submit contest tasks
✅ Winners Display: Show winners' names and photos after contest ends
✅ Real-Time Leaderboard
✅ Search & Filter: By category like Design, Coding, Writing, etc.
✅ Responsive Design: Mobile, Tablet, Desktop (TailwindCSS)
✅ Animations & Charts: Using AOS and Recharts

## Dependencies
- **Frontend:** react, react-dom, react-router-dom, tailwindcss
- **Backend:** express, mongoose, cors, dotenv
- **Integrations:** firebase, stripe, react-toastify, axios
- **UI/UX:** aos, recharts

## Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Azaharul-islam615/ph-assignment11-client.git
   ```

2. **Install dependencies:**
   ```bash
   cd ph-assignment11-client && npm install
   ```

3. **Setup .env file** with Firebase, Stripe & MongoDB credentials.

4. **Run the project:**
   ```bash
   npm run dev   # Frontend
   ```

5. **Open** http://localhost:5173 in your browser.