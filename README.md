# FitLog

FitLog is a responsive workout library where users can explore exercises,
view workout details, build a daily workout plan, and save workouts for later.

## Technologies

- Next.js
- React
- JavaScript
- Tailwind CSS
- Lucide React
- Sonner
- REST API
- LocalStorage

## Features

- Responsive workout library
- Workout details page
- Add workouts to today's plan
- Save workouts for later
- Live plan and saved counters
- My Plan dashboard with workout metrics
- Sort workouts by duration, calories, and rating
- Mark workouts as done
- Remove workouts from the plan
- Toast notifications
- LocalStorage support
- Custom 404 page
- Loading state

## Project Structure

- `src/app` - Application routes
- `src/components` - Reusable UI components
- `src/context` - Plan and saved workout state
- `src/lib` - API functions
- `public` - Local images and assets

## API

All workouts:

https://api.abcz.workers.dev/api/fitlog

Single workout:

https://api.abcz.workers.dev/api/fitlog/:id
