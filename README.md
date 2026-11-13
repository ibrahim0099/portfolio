# 3D Developer Portfolio

A single-page, responsive 3D personal-branding and project-showcase site. Built with **React 19, TypeScript, Vite, Three.js (react-three-fiber + drei), Tailwind CSS v4 and Framer Motion**.

- Interactive 3D hero: a glowing AI "core" that follows the mouse, with your products orbiting it
- Sections: About, Products, Experience timeline, Skills, Case studies, Contact
- 3D-tilt project cards, animated SVG logo, mobile menu, responsive layout
- All content lives in one file, so you don't edit any components to make it yours

## Quick start

```bash
git clone https://github.com/ibrahim0099/portfolio.git
cd portfolio
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Requires Node 18+ (tested on Node 22).

## Make it yours

### 1. Personal details go in environment variables
Contact details, CV and photo are **not stored in the repo**. Copy the template and fill it in:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|---|---|
| `VITE_EMAIL` | Email shown in Contact |
| `VITE_PHONE` | Phone shown in Contact (leave empty to hide) |
| `VITE_LINKEDIN` | Full LinkedIn URL |
| `VITE_CV_URL` | URL of your CV PDF (the CV button is hidden if empty) |
| `VITE_PHOTO_URL` | URL of your photo (falls back to `public/avatar.svg`) |

For `VITE_CV_URL` and `VITE_PHOTO_URL` you can use a hosted URL, or drop files in `public/` and use `/your-file.pdf`. Note that `public/*.pdf` and `public/ibrahim.jpg` are git-ignored.

On **Vercel / Netlify**, add the same keys under *Project → Environment Variables*, then redeploy.

> `VITE_*` values are compiled into the public site, because they're displayed on it. They just stay out of git. Don't put real secrets in them.

### 2. Edit your content: `src/data.ts`
Everything else on the page comes from this file:

| Export | Controls |
|---|---|
| `profile` | Name, title, rotating hero roles, location, summary |
| `stats` | The stat cards in About |
| `projects` | Product cards **and** the orbiting labels in the 3D hero (colour per project) |
| `experience` | Timeline entries |
| `skills` | Skill groups |
| `caseStudies` | System-design cards |

### 3. Other tweaks
- **Name and title:** `index.html` (SEO title and description) and the navbar in `src/App.tsx`.
- **Photo placeholder:** `public/avatar.svg`.
- **Logo:** `src/components/Logo.tsx`, an inline SVG. Change the initials, or swap in your own.
- **Colours and fonts:** `src/index.css`, in the `@theme` block.
- **3D scene:** `src/components/Scene.tsx`. Change the core's colour, distortion and speed, the star count, or the orbit radius.
- **Nav links:** the `links` array in `src/App.tsx`.

## Project structure

```
src/
  App.tsx                 navbar + page assembly
  data.ts                 all your content
  index.css               Tailwind theme + globals
  components/
    Hero.tsx              hero text, lazy-loads the 3D scene
    Scene.tsx             react-three-fiber scene
    Logo.tsx              animated SVG logo
    Sections.tsx          About, Projects, Experience, Skills, CaseStudies, Contact
public/                   favicon, avatar placeholder (your photo/CV are git-ignored)
```

## Deploy

- **Vercel / Netlify / Cloudflare Pages:** import the repo, add the env vars above, and use build command `npm run build`, output directory `dist`.
- **GitHub Pages:** set `base: "/<repo-name>/"` in `vite.config.ts`, build, and publish `dist/`.

## Notes

- The 3D bundle (about 250 KB gzipped) is lazy-loaded, so the text appears first.
- The Three.js scene scales down on small screens.

## License

Code is released under the [MIT License](LICENSE). If you fork this, **replace the text in `src/data.ts` (it describes Ibrahim Ramzan's career and products) and set your own env vars.** That content is not covered by the license.

---
Built by [Ibrahim Ramzan](https://linkedin.com/in/ibrahim-ramzan). Stars and forks welcome.
