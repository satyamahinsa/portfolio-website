# Gede Satyamahinsa — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Motion**, and **Lenis** smooth scroll.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text lives in [`src/content/profile.ts`](src/content/profile.ts): profile, about, skills, education, achievements, experience, publications, and projects.

- **Photo:** put an image in `public/` (e.g. `public/profile.jpg`) and set `profile.photo = "/profile.jpg"`.
- **CV button:** put the PDF in `public/` (e.g. `public/cv.pdf`) and set `profile.cvUrl = "/cv.pdf"`.
- **GitHub / Scholar links:** fill `profile.socials.github` / `profile.socials.scholar`.
- **Projects:** replace the four placeholder entries in `projects`; each gets its own page at `/projects/<slug>`. Remove `placeholder: true` once real.

## Theme

The switch in the navbar offers **Auto** (follows the OS light/dark setting), **Day**, and **Night**. The choice is saved in `localStorage`, and an inline script in `src/app/layout.tsx` applies it before first paint. Colors are CSS variables in `src/app/globals.css` (navy primary accent, black/white secondary).

## Deploy (free)

1. Push this folder to a GitHub repository.
2. Import the repo at https://vercel.com/new (Hobby plan is free). Every push to `main` redeploys.
3. You get `your-project.vercel.app`. For a free custom subdomain, see https://is-a.dev.
