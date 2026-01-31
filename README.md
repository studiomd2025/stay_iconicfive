# STAY Fan Site

A simple, interactive, **static** fan site for STAY with three pages:

- **Home** (`index.html`) — chronological updates (newest to oldest).
- **Members** (`members.html`) — member profiles with scheduled hero images, auto-updating ages, and photo link collections.
- **Discography** (`discography.html`) — release timeline with a form to add new entries.

All updates are stored locally in the browser via `localStorage` (no backend needed).

## Why you might see “Not Found”

If a preview tool returns **Not Found**, it usually means it’s looking for a server that isn’t running (or it’s pointing to a different folder). This project is static and **must be served** (not opened from a “preview” tab that expects a backend).

## Run locally

From the repository root:

```bash
python -m http.server 8000
```

Then open:

- <http://localhost:8000/index.html>
- <http://localhost:8000/members.html>
- <http://localhost:8000/discography.html>

## Connect the repo (free hosting)

Pick a free static host and connect the repository:

### GitHub Pages
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to the `main` branch (or `work`) and `/ (root)`.
4. Save — GitHub will publish the site at a `github.io` URL.

### Netlify
1. Create a Netlify account and choose **Add new site → Import an existing project**.
2. Connect your Git provider and select this repo.
3. Build settings: **no build command**, **publish directory = `/`**.
4. Deploy — Netlify will give you a live URL.

### Vercel
1. Import the repo in Vercel.
2. Framework preset: **Other**.
3. Build command: **none**, Output directory: **/**.
4. Deploy — Vercel provides the live URL.

### Cloudflare Pages
1. Create a Pages project and connect your repo.
2. Build settings: **no build command**, **output directory = /**.
3. Deploy — Cloudflare provides the live URL.

## Scheduling & automation (client-side)

Edit `script.js` to update schedules:

- `bannerSchedule` for the home hero banner.
- Each member’s `schedules` array for profile image changes.

Ages update automatically from each member’s `birth` date.
