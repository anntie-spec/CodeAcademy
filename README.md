# CodeAcademy — Pure HTML/CSS/JS Version

This is a simplified version of the CodeAcademy site with **no backend,
no server, no Node.js, no database** — just plain HTML, CSS, and
JavaScript files. Built for school assignments that require only these
three technologies.

## What's included

- `index.html` — Home page
- `courses.html` — All courses (grid)
- `course.html` — One course's details (works via a link like `course.html?id=html5`)
- `instructors.html` — All instructors (grid)
- `instructor.html` — One instructor's profile (works via a link like `instructor.html?id=sarah-chen`)
- `signup.html` / `login.html` — Forms, styled and validated, but **visual only**
- `css/style.css` — All the styling
- `js/courses.js` — Course data (the `COURSES` array near the top) + code that displays it
- `js/instructors.js` — Instructor data (the `INSTRUCTORS` array near the top) + code that displays it
- `js/auth.js` — Signup/login form behavior (see note below)

### About Signup/Login

There's no server here, so these forms **don't create real accounts or
check real passwords** — there's nowhere to save that information
without a backend. What they DO have:
- Basic checks (password length, passwords matching)
- A success message when those checks pass

This makes the forms feel complete without pretending to be something
they're not. If you ever add a real backend, `js/auth.js` is the only
file you'd need to rewrite.

## How to run it

No installation needed at all. Just double-click `index.html` and it
opens in your browser. Click around — Courses and Instructors both work
normally.

(If double-clicking shows a blank page in some browsers, right-click
`index.html` → Open With → your browser, or use VS Code's "Live Server"
extension if you have it.)

## How to add real photos

1. Make a folder called `images` next to `index.html`.
2. Put your photo files inside it (e.g. `images/sarah-chen.jpg`).
3. Open `js/instructors.js`, find the instructor you want, and change:
   ```js
   photo: ''
   ```
   to:
   ```js
   photo: 'images/sarah-chen.jpg'
   ```
4. Same idea in `js/courses.js` — find the `image: ''` line for a course
   and fill in the file path, e.g. `image: 'images/html5-course.jpg'`.
5. Save and refresh the browser.

## How the data works (for learning)

Each course/instructor is one JavaScript object inside an array —
`COURSES` in `js/courses.js`, `INSTRUCTORS` in `js/instructors.js`. A
small function reads that array and builds one HTML "card" per entry
(that's why you only see one `<img>` line in the code even though there
are 6 instructors — it's reused once per entry). To add a 7th
instructor, just copy one of the existing `{ ... }` blocks in the array,
paste it, and change the details.
