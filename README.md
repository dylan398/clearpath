# Clearpath Site Consulting — Website

Static HTML/CSS/JS site hosted on GitHub Pages. Firebase Firestore backend for contact form submissions. No build step, no dependencies, no frameworks — open any file in a browser.

---

## Repository Structure

```
clearpath-site/
├── index.html              Homepage
├── services.html           The Process — 5 phases in full detail + FAQ
├── about.html              The Firm — methodology, principles, what we are not
├── contact.html            Project inquiry form → Firebase Firestore
├── 404.html                Custom 404 page
├── CNAME                   Custom domain for GitHub Pages
├── README.md               This file
├── css/
│   └── styles.css          Full design system (~1,800 lines)
└── js/
    ├── main.js             Nav scroll, hamburger menu, scroll reveal animations
    ├── contact.js          Firebase form submission handler
    └── firebase-config.js  Firebase credentials — already filled in
```

---

## Before Going Live

Two placeholders to replace across all HTML files. Do a find-and-replace in your editor:

| Find | Replace With |
|---|---|
| `(817) 000-0000` | Your Google Voice number |
| `estimating@clearpathsiteconsulting.com` | Your Google Workspace email |

Both appear in the top bar, footer, and contact page of every HTML file (5 files total).

Firebase credentials are already set in `js/firebase-config.js` — no changes needed there.

---

## Firebase Setup

### What It Uses

The contact form on `contact.html` writes to the `clearpath_inquiries` collection in the `sfs-scheduler` Firebase project. This is the same Firebase project as the SFS Crew Scheduler. The scheduler uses Realtime Database (`/sched`, `/sched-dev`). Clearpath uses Firestore. They do not touch each other.

### First-Time Firestore Setup (one time only)

If Firestore hasn't been enabled on the `sfs-scheduler` project yet:

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Select the **sfs-scheduler** project
3. In the left nav: **Build → Firestore Database → Create database**
4. Choose **Production mode**
5. Region: **us-central1** (recommended)
6. Click **Enable**

### Set Security Rules

In Firestore Database → Rules tab, replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /clearpath_inquiries/{doc} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

This allows anyone to submit a form (create) but prevents anyone from reading or modifying existing submissions. You view submissions in the Firebase Console.

### Viewing Submissions

Firebase Console → sfs-scheduler project → Firestore Database → `clearpath_inquiries` collection.

Each submission includes: name, company, email, phone, projectType, location, budget, timeline, description, submittedAt (server timestamp), source URL.

---

## GitHub Pages Deployment

### Initial Setup

1. Create a new GitHub repository (e.g., `dylan398/clearpath-site`)
2. Push all files to the `main` branch
3. Go to repo **Settings → Pages**
4. Source: **Deploy from branch**
5. Branch: **main** · Folder: **/ (root)**
6. Click **Save**

The site goes live at `dylan398.github.io/clearpath-site` within about 60 seconds.

### Pushing Updates

The simplest method — no Git required:

1. Go to the file in GitHub (e.g., `index.html`)
2. Click the pencil icon (Edit)
3. Make changes or paste new content
4. Click **Commit changes**
5. Live in ~60 seconds

Via command line:

```bash
git add .
git commit -m "describe what changed"
git push origin main
```

---

## Custom Domain Setup

### Step 1 — DNS Records

In your domain registrar (wherever you registered `clearpathsite.com`), add these DNS records:

```
Type    Host    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     dylan398.github.io
```

DNS propagation typically takes a few minutes to an hour.

### Step 2 — GitHub Pages Custom Domain

1. Go to repo **Settings → Pages**
2. Under **Custom domain**, enter: `clearpathsite.com`
3. Click **Save**
4. Wait for DNS check to pass (green checkmark)
5. Check **Enforce HTTPS** once it appears

The `CNAME` file in the repo root is already set to `clearpathsite.com`. If you use a different domain, update that file to match.

---

## Wix DNS (if domain is through Wix)

If `clearpathsite.com` is registered or managed through Wix:

1. Log into manage.wix.com
2. Settings → Domains → your domain → Manage DNS Records
3. Add the four A records and CNAME above

---

## Go-Live Checklist

### Content
- [ ] Replace `(817) 000-0000` with real number in all 5 HTML files
- [ ] Replace `estimating@clearpathsiteconsulting.com` with real email in all 5 HTML files
- [ ] Review all placeholder testimonial names/roles and update if desired
- [ ] Confirm TEXO and AGC of Texas references are accurate to actual membership status
- [ ] Update copyright year in footer if needed (`© 2025`)

### Firebase
- [ ] Enable Firestore in sfs-scheduler Firebase project (if not already done)
- [ ] Set Firestore security rules (see above)
- [ ] Submit a test form on `contact.html` and confirm the submission appears in Firestore

### Domain & Hosting
- [ ] Register `clearpathsite.com` (or confirm it's registered)
- [ ] Add DNS records to registrar
- [ ] Push repo to GitHub
- [ ] Enable GitHub Pages (main branch / root)
- [ ] Add custom domain in GitHub Pages settings
- [ ] Confirm HTTPS is enforced
- [ ] Open `clearpathsite.com` in a browser and verify all pages load correctly

### Final Check
- [ ] Test all nav links (desktop and mobile hamburger menu)
- [ ] Test contact form end-to-end (submission → Firebase)
- [ ] Check on mobile (iPhone Safari and Android Chrome)
- [ ] Confirm top bar phone and email links work

---

## Design System Quick Reference

All design tokens are CSS variables in `css/styles.css` under `:root`. Key ones:

```css
--orange:    #e07c38   /* Primary accent — buttons, highlights */
--bg:        #090c14   /* Page background */
--bg-2:      #0e1220   /* Section alternate background */
--bg-3:      #141929   /* Card/panel background */
--t1:        #eceef8   /* Primary text */
--t2:        #8794ab   /* Secondary text */
--font-d:    'Syne'    /* Display/heading font */
--font-b:    'DM Sans' /* Body font */
```

To change the accent color site-wide, update `--orange` and `--orange-dim`.

---

## Notes

- The SFS Crew Scheduler and Clearpath Site use the same Firebase project (`sfs-scheduler`) but completely different services — Realtime Database vs. Firestore. They cannot interfere with each other.
- The site has no analytics by default. Add Google Analytics or similar by dropping a script tag in the `<head>` of each HTML file if desired.
- The FAQ accordion on `services.html` is pure JS — no external libraries.
- Scroll reveal animations use `IntersectionObserver` with a graceful fallback for older browsers.
- All fonts load from Google Fonts CDN. The site degrades gracefully if the CDN is unavailable.
