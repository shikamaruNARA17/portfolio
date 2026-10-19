# Devender Singh — Portfolio

A React portfolio with a responsive profile and career timeline, expandable role details, and a scroll-linked progress indicator. It is built with Vite and uses fonts bundled locally through Fontsource.

## Run locally

From `/workspace/portfolio`:

```sh
npm ci
npm run dev -- --port 3000
```

Build a production version with `npm run build`. Preview it locally with `npm run preview`.

## Personalize

- Add a portrait at `public/assets/portrait.jpg`, then update the image source and alt text in `src/portfolio.jsx`. The initials illustration is temporary.
- Edit profile copy, work history, skills, and links in `src/portfolio.jsx`.
- Replace `public/assets/Devender-Singh-Resume.pdf` to update the downloadable résumé.
- Adjust layout and styling in `src/portfolio.css`.
- The supplied LinkedIn profile could not be accessed during development, so no additional profile details were assumed.

The portfolio deploys as a GitHub Pages project site. The Vite build reads the GitHub Actions repository name to set the correct asset paths automatically.
