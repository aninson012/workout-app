# Workout App

A React Native (Expo) app with a workout list screen and a workout details
screen, built around reusable components driven by props and interactive
elements driven by state.

## Features

- Reusable `WorkoutCard` component (image, title, duration, calories via props)
- Workout list screen rendering multiple cards from a data array
- Per-card favourite toggle (filled / unfilled heart) using state
- Stack navigation from the list screen to a Workout Details screen, passing
  the selected workout through route params
- "Start Workout" / "Completed" toggle button on the details screen using state

## Project structure

```
App.js
src/
  components/
    WorkoutCard.js
  screens/
    WorkoutListScreen.js
    WorkoutDetailsScreen.js
  data/
    workouts.js
```

## Getting started

1. Install dependencies:

   ```
   npm install
   ```

2. Start the project:

   ```
   npx expo start
   ```

3. Scan the QR code with the Expo Go app (Android/iOS), or press `a` / `i`
   to open an Android/iOS simulator, or `w` for web.

## Notes

- Workout images are stored locally in `assets/`, so the app does not depend
  on an internet connection for workout images.
- Workout cards are rendered by mapping over the workouts array with `.map()`.
