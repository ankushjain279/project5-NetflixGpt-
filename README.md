You, 1 second ago | 1 author (You)
live link- https://netfix-gpt-7032e.web.app/

# Features
- Login/Sign Up
     Sign In /Sign up Form
     after sign in redirect to Browse Page

- Browse (after authentication)
     Header
     Main Movie
       Tailer in Background
       Title & Description
       MovieSuggestions
       MovieLists * N
- NetflixGPT
       Search Bar
       Movie Suggestion

Note 1-
for a very big form with so many fields and validation use a external lib like formik

Note 2-
useRef hook - ka kaam hota hai React me kisi DOM element ya mutable value ko directly access ya store karna bina re-render trigger kiye.

(The useRef hook in React is a built-in Hook that allows you to persist values between renders of a component without causing a re-render when those values are updated.)

🔧 useRef in Form: Kaam kya hai?
Agar aap form inputs (like email, password) me useRef use karte ho, to aap:
Directly input ka current value le sakte ho (without using useState)
React ko bar-bar re-render karne ki zarurat nahi hoti
Simple validation ya DOM manipulation ke liye useful hota hai

Note 3-
hositing with the help of firebase
npm i -g  firebase-tools - firebase Cli
firebase login
firebase init
firebase deploy


Note 4-
jsx always follow camel case 
means  frameborder this give warning but this does not  frameBorder