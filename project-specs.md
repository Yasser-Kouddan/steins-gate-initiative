📜 Project Specification: Operation STEINER-GATE
Version: 1.0
Codename: Reading Steiner
Lead Engineer: Yasser (Member 001)

1. Project Goal & Vision
To bridge the gap between human perception and the complex world lines of particle physics. This project aims to monitor real-time data from CERN (AD/ELENA and LHC) via their official Vistar systems, parse that "retro" visual data into structured telemetry, and display it in a modern, Steins;Gate-inspired interface for enthusiasts.

2. The Tech Stack (The "Future Gadget" Suite)
We are using a Monorepo (NX) to manage both the "Brain" and the "Face" in one place.
Backend (Divergence Meter)
Framework: NestJS (Fast, structured, and perfect for Cron jobs).
Processor: Sharp (Image manipulation) + Tesseract.js (Local OCR).
Platform: Render (Node.js Web Service) + Cron-job.org (To bypass free-tier sleep).
Database Admin: firebase-admin (The bridge to the Memory).
Frontend (Reading Steiner)
Framework: Expo (React Native) for Web and Android.
Styling: NativeWind (Tailwind CSS for a sleek, dark aesthetic).
Real-time: Firebase SDK (Firestore for live data, Auth for Lab Members).
Hosting: Firebase Hosting (For the static Expo web build).

3. Feature Set
A. The Divergence Meter (API)
Automated Observation: Every 2–5 minutes, fetch the latest .png from CERN Vistars.
Zonal Extraction: Precise cropping of images to target specific data tables (Momentum, Intensity, Status).
Data Normalization: Convert noisy OCR text into clean floating-point numbers and standardized enums.
Historical Logging: Store snapshots of data to allow for time-series charts.
B. Reading Steiner (App/Web)
Nixie Dashboard: Real-time telemetry displayed in glowing orange "Nixie Tube" fonts.
World Line Status: Visual themes that change based on the machine state (e.g., Gold for "Stable Beams," Ice Blue for "Cryo Intervention").
Lab Member System: Simple Firebase Auth to track "Member Numbers" and personalized settings.
CERN News Feed: Scraped headlines from official CERN sources to keep members informed.
Divergence Alerts: Push notifications for critical events like "Beam Dump" or "Stable Beams."

4. Monorepo (NX) Structure
Using NX allows us to share TypeScript interfaces between the Backend and Frontend.
Plaintext
/steiner-gate
├── apps
│   ├── divergence-meter (NestJS - Render)
│   └── reading-steiner  (Expo - Vercel/Android)
├── libs
│   └── shared-types (Interfaces for OCR results & Status Enums)
├── nx.json
└── package.json



5. Critical Guidelines & Best Practices
1. The "Anchor Point" Rule: > Vistars rarely move, but if they do, OCR fails. Always use a static visual anchor (like the "LHC Page 1" title) to calculate your crop coordinates rather than hardcoding absolute pixels.
2. Memory Management: > Tesseract.js is heavy. In your NestJS backend, ensure you terminate the Tesseract worker after each job or use a singleton worker to prevent Render's 512MB RAM limit from crashing the app.
3. The "CORS" Gate: > Since your API is on Render and your Web App is on Firebase Hosting, you must enable CORS in NestJS.
4. Invisible Fallbacks: > If the OCR confidence is low (< 70%), the app should gracefully show the "Raw Vistar Image" instead of a "0" or "Error" to maintain the user's trust.
5. Spin-up Sensitivity: > Remember that the Render free tier sleeps. Your Frontend should handle "Loading" states elegantly while the "Heartbeat" (Cron-job.org) wakes the backend up.

6. Checklist for Launch
[ ] NX Monorepo initialized.
[ ] Firebase project created and Service Account downloaded.
[ ] Dockerfile created for NestJS to include Tesseract binaries.
[ ] NativeWind configured for the Nixie/Dark theme.
[ ] Health Check endpoint verified by an external pinger.
[ ] Expo Web build successfully deployed to Firebase Hosting.

El Psy Kongroo. The world line is shifting in our favor. Your mission is clear—start with the shared-types library in NX so both apps speak the same language.

