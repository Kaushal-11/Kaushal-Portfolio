# Kaushal Bhanderi — Portfolio

A single-page portfolio built with React + Vite + Tailwind + Framer Motion, with a working
contact form powered by Nodemailer on Vercel serverless functions.

## What's inside

- **Section-by-section scroll** — CSS scroll-snap (`mandatory` + `scroll-snap-stop: always`)
  so each scroll gesture settles cleanly on a section, plus Framer Motion reveal-on-scroll
  and a waveform-style progress rail on the right edge (desktop) tracking your position.
- **Landing-page-only cursor glow** — a soft cyan → violet → amber glow trails your cursor
  inside the hero only, and fades out the moment the pointer (or the scroll) leaves it.
- **Floating 3D photo cutout** — your background-removed photo floats with mouse-driven
  tilt/parallax, an ambient bob animation, and layered domain chips (ML / CV / NLP / DL)
  at different depths — no rectangular frame, no neural-network flip.
- **01 About** — intro / journey / passion copy, a languages panel (Gujarati, Hindi, English,
  German), and 4 education cards on the right, including a "Goal" card for a planned
  Master's in Germany.
- **02 Experience** — a centered timeline with alternating left/right cards. Each card shows
  only the role, org and domain; click any card to open a detail modal with the full
  writeup, tags and dates.
- **03 Projects** — a grid of all 19 projects, each card cycling through 4 visual
  treatments (tilt, blur, scale, inverse-tilt) so the grid doesn't feel repetitive, with
  tech tags, GitHub/demo links, and a featured-star badge.
- **04 Skills** — horizontal category rows (not vertical cards), each with its own accent
  color and hover glow.
- **05 Achievements** — a tabbed section: Publications, Certifications, Hackathons, and
  Leadership.
- **06 Contact** — the working form.
- **Fully responsive** — mobile nav, stacked grids, and touch-friendly spacing down to
  ~360px wide.

## 1. Add your photo (cutout) and project images

Two image sources still need real files — none came through in our chat, so both fall
back to elegant placeholders until you add them:

**Hero photo** — your background-removed cutout PNG:
1. Save it as `public/profile-cutout.png` (exact filename).
2. Use a transparent-background PNG, portrait orientation works best.
3. The tilt card picks it up automatically — no code changes needed.

**Project thumbnails** — `src/data/projects.js` already points each of the 19 projects
at a path like `/images/projects/voice-assistant.jpg`. Drop matching image files into
`public/images/projects/` using those exact filenames and they'll appear automatically.
Any project without a matching image just shows a clean gradient card with its title —
nothing breaks either way.

## 2. Resume download

Your CV (as uploaded) is already wired in at `public/resume.pdf`, linked from the navbar,
hero, and footer. To update it later, just replace that file with a new export — same
filename, no code changes needed.

## 3. Install & run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

> The contact form calls `/api/contact`, a **Vercel serverless function** — plain
> `vite dev` won't run it. To test the contact form locally, use the Vercel CLI instead:
> ```bash
> npm i -g vercel
> vercel dev
> ```

## 4. Set up the mailer (Gmail + App Password)

The contact form sends two emails through Nodemailer using your Gmail account: one
notifying you of the new message, and one auto-reply confirming receipt to whoever wrote in.

1. Turn on **2-Step Verification**: https://myaccount.google.com/security
2. Generate an **App Password**: https://myaccount.google.com/apppasswords
   (choose "Mail"). Copy the 16-character password.
3. Copy `.env.example` to `.env` and fill it in:

```bash
cp .env.example .env
```

```
GMAIL_USER=youraddress@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
CONTACT_RECEIVER=youraddress@gmail.com   # optional, defaults to GMAIL_USER
SITE_OWNER_NAME=Kaushal Bhanderi         # optional, used in the auto-reply
```

`.env` is git-ignored — never commit real credentials.

## 5. Deploy to Vercel (free)

1. Push this project to a GitHub repo.
2. Go to https://vercel.com → **Add New… → Project** → import that repo.
3. Vercel auto-detects Vite (build command `npm run build`, output `dist`) — leave the
   defaults.
4. Before (or right after) the first deploy, add the same environment variables from
   `.env` under **Project → Settings → Environment Variables**:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `CONTACT_RECEIVER` (optional)
   - `SITE_OWNER_NAME` (optional)
5. Click **Deploy**. Vercel builds the static site *and* automatically turns
   `api/contact.js` into a serverless function at `/api/contact` — no extra config needed.
6. Once live, submit a test message through the contact form to confirm both emails arrive.

Your site will be live at `your-project.vercel.app` (free tier); attach a custom domain
later from the same project settings.

## Project structure

```
├── api/
│   └── contact.js            # Nodemailer serverless function (Vercel)
├── public/
│   ├── favicon.svg
│   ├── resume.pdf            # your CV — already included, replace anytime
│   ├── profile-cutout.png    # ← add your background-removed cutout here
│   └── images/projects/      # ← add project thumbnails here (see projects.js for names)
├── src/
│   ├── components/           # Navbar, Hero, PhotoCard, About, Experience,
│   │                          # Projects, Skills, Achievements, Contact, Footer, etc.
│   ├── data/
│   │   ├── portfolioData.js  # profile, about, education, languages, experience,
│   │   │                       skills, publications, certifications, hackathons, leadership
│   │   └── projects.js       # all 19 projects
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

described the same "skin condition diagnostic tool," which didn't match their tech tags
or event names). I wrote short, neutral descriptions from the event name and tech tags
instead of reusing that mismatched text — worth double-checking those three blurbs in
`src/data/portfolioData.js` (`hackathons` array) and swapping in the real project details.
