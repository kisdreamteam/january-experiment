# Confetti App 🎉

A React + TypeScript + Tailwind CSS app with a Node.js backend. Features a blue background with a yellow button that shoots confetti when clicked!

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express, TypeScript
- **Confetti**: canvas-confetti library

## Getting Started

### Install Dependencies

```bash
npm run install:all
```

### Run Development Servers

```bash
npm run dev
```

This will start both:
- Frontend server on http://localhost:3000
- Backend server on http://localhost:5000

### Individual Commands

**Frontend only:**
```bash
npm run dev:client
```

**Backend only:**
```bash
npm run dev:server
```

## Project Structure

```
.
├── client/          # React frontend
│   ├── src/
│   │   ├── App.tsx  # Main component
│   │   └── main.tsx # Entry point
│   └── package.json
├── server/          # Node.js backend
│   ├── src/
│   │   └── index.ts # Express server
│   └── package.json
└── package.json     # Root package.json with scripts
```

## Features

- 🎨 Blue background with Tailwind CSS
- 🟡 Yellow button with hover effects
- 🎉 Confetti animation on button click
- 📊 Click counter
- ⚡ Fast development with Vite
- 🔄 Hot module replacement

Enjoy the confetti! 🎊
