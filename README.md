# FitLog — Workout Library

FitLog is a responsive workout library and workout planning application.
Users can explore different exercises, view detailed workout information,
add exercises to today's plan, save workouts for later, and track their
workout progress.

---

## 🔗 Project Links

- **Live Website:** [Visit Live Website](YOUR_LIVE_LINK)
- **GitHub Repository:** [View GitHub Repository](YOUR_GITHUB_LINK)

> Replace `YOUR_LIVE_LINK` and `YOUR_GITHUB_LINK` with your actual project links.

---

## 📖 About The Project

FitLog is a simple and modern workout companion with a dark-themed
interface.

Users can browse a collection of workouts, check detailed exercise
information, organize exercises into today's workout plan, and save
workouts for later.

The application uses workout data from a REST API and LocalStorage to
keep the user's selected workouts available after refreshing the page.

---

## ✨ Features

### 🏋️ Workout Library

- Browse all available workouts from the API
- Responsive workout card layout
- Workout images
- Muscle group tags
- Equipment information
- Workout duration
- Estimated calories
- Workout rating
- Sort workouts by duration
- Sort workouts by calories
- Sort workouts by rating

### 📋 Workout Details

- View detailed information about each workout
- Workout description
- Muscle groups
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step workout instructions
- Add workout to today's plan
- Save workout for later

### 📝 My Plan

- View workouts added to today's plan
- View saved workouts
- Live exercise count
- Total workout duration
- Total estimated calories
- Mark workouts as completed
- Remove workouts from today's plan
- Remove workouts from saved list
- View workout details directly from My Plan

### 💾 LocalStorage

FitLog uses browser LocalStorage to preserve:

- Today's workout plan
- Saved workouts
- Completed workouts

The selected data remains available after refreshing the browser.

### 🔔 Notifications

Toast notifications are shown when users:

- Add a workout
- Save a workout
- Remove a workout
- Mark a workout as completed
- Try to add a duplicate workout
- Reach the maximum plan limit

### 📱 Responsive Design

The application is responsive and works across:

- Mobile devices
- Tablets
- Desktop screens

---

## 🛠️ Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- Lucide React
- Sonner
- REST API
- LocalStorage
- Next.js App Router

---

## 🔌 API

FitLog uses the following REST API to load workout data.

### All Workouts

[https://api.abcz.workers.dev/api/fitlog](https://api.abcz.workers.dev/api/fitlog)

### Single Workout

[https://api.abcz.workers.dev/api/fitlog/:id](https://api.abcz.workers.dev/api/fitlog/:id)

---

## 📂 Project Structure

```text
b14-a06-fit/
│
├── public/
│   ├── banner.png
│   ├── favicon.ico
│   ├── logo.png
│   └── robots.txt
│
├── src/
│   │
│   ├── app/
│   │   ├── workout/
│   │   │   └── [id]/
│   │   │       └── page.js
│   │   │
│   │   ├── my-plan/
│   │   │   └── page.js
│   │   │
│   │   ├── error.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── loading.js
│   │   ├── not-found.js
│   │   └── page.js
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MyPlan.jsx
│   │   ├── Navbar.jsx
│   │   ├── WorkoutActions.jsx
│   │   ├── WorkoutCard.jsx
│   │   └── WorkoutLibrary.jsx
│   │
│   ├── context/
│   │   └── FitLogContext.jsx
│   │
│   └── lib/
│       └── api.js
│
├── next.config.mjs
├── package.json
├── README.md
└── ...
```
