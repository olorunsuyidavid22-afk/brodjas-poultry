# BRODJAS POULTRY

A fully responsive multi-page website for **Brodjas Poultry**, a trusted poultry products supplier based in Ido Town, Ibadan, Oyo State.

## Tech Stack

- **Frontend:** React + Vite + TypeScript + Tailwind CSS
- **Routing:** React Router DOM
- **Notifications:** React Hot Toast
- **HTTP:** Axios
- **Backend:** Node.js + Express
- **Email:** Nodemailer (Gmail SMTP)
- **Icons:** Lucide React

## Folder Structure

```
.
├── src/                  # Frontend (React + Vite)
│   ├── App.tsx           # Routes, pages, layout
│   ├── main.tsx
│   └── index.css         # Tailwind + design system
├── server/               # Backend (Node + Express)
│   └── index.js          # API + Nodemailer
├── public/images/        # Logo & assets
├── .env.example          # Environment variable template
└── package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment setup

Copy `.env.example` to `.env` and fill in your Gmail credentials:

```bash
cp .env.example .env
```

- `EMAIL_USER` — the Gmail address that sends the emails.
- `EMAIL_PASS` — a Gmail **App Password** (not your regular password). Enable 2-Step Verification, then generate one at https://myaccount.google.com/apppasswords.

### 3. Run the frontend

```bash
npm run dev
```

The site runs on the Vite dev server (default http://localhost:5173).

### 4. Run the backend

In a separate terminal:

```bash
node server/index.js
```

The API runs on http://localhost:5000.

## API Endpoints

### `POST /api/contact`

Body: `{ name, email, phone, message }`

Sends a contact message to `brodjaspoultry@gmail.com`.

### `POST /api/order`

Body: `{ name, phone, address, service, details }`

Sends an order request to `brodjaspoultry@gmail.com`.

## Pages

| Route        | Description                          |
|--------------|--------------------------------------|
| `/`          | Home — hero, intro, highlights       |
| `/services`  | Our services — 5 service cards       |
| `/order`     | Order form + WhatsApp quick order    |
| `/contact`   | Contact form + info + Google Map     |

## Brand

- **Colors:** Green `#0a5c36`, Gold `#d4a017`, White
- **Font:** Poppins
- **Logo:** `public/images/WhatsApp_Image_2026-07-30_at_20.23.06.jpeg`

## Contact

- **Address:** Shop 1, Genesis Plaza, Ido-Eruwa Expressway, Ido Town, Ibadan, Oyo State.
- **Phones:** +234 708 166 4106, +234 812 826 8825, +234 803 412 9144
- **Email:** brodjaspoultry@gmail.com
- **Website:** brodjaspoultry.store

© 2026 BRODJAS POULTRY. All rights reserved.
