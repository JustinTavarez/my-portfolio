# Justin Tavarez – Portfolio

My Personal site that highlights my current projects, skills, and contact info. The app is built with React + Vite and uses React Router to keep navigation smooth while staying within a single-page app.

## Features
- Router-driven layout with shared header/footer plus dedicated routes for Home, Projects, Skills, and Contact pages.
- Project cards that summarize tech stacks and the focus of each build.
- Skills grid grouped by category (languages, cloud/data, testing & tooling) so recruiters can quickly scan.
- Simple contact panel with email, GitHub, and LinkedIn entry points.

## Tech Stack
- React 19 with Vite for the development/build toolchain.
- React Router 7 for nested routing and layout composition.
- Vanilla CSS (`src/index.css` and `src/App.css`) for styling and layout primitives.

## Getting Started
```bash
# install dependencies
npm install

# run the dev server with hot reload
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview

# lint the project (ESLint + React recommended rules)
npm run lint
```

## Project Structure
```
src/
├─ App.jsx          # shared layout (nav + footer) and outlet for each page
├─ main.jsx         # React entry point with BrowserRouter routes
├─ pages/
│  ├─ Home.jsx      # hero text with quick calls to action
│  ├─ Projects.jsx  # hard-coded project list rendered as cards
│  ├─ Skills.jsx    # categorized skills grid
│  └─ Contact.jsx   # email/GitHub/LinkedIn block
└─ index.css        # global styles (App.css for layout tweaks)
```

Update the content in the page components as new experience, links, or contact details change. Static data (projects array, skill lists, etc.) lives directly in each component for now, which keeps editing lightweight.

## Deployment
The project outputs a static build (`dist/`) via `npm run build`. Host it on any static site provider (Vercel, Netlify, GitHub Pages, S3 + CloudFront, etc.). Remember to configure your host for single-page applications so all routes serve `index.html`.
