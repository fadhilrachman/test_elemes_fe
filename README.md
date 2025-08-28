# Vite React Movie App

A modern movie & TV show app built with **React**, **Tailwind CSS**, and **TanStack Query**. This project fetches data from **The Movie Database (TMDB)** API and allows users to browse, search, and add items to their watchlist.

## 🚀 Tech Stack

- **React 18**
- **Vite**
- **Tailwind CSS**
- **TanStack Query** (for data fetching & caching)
- **TypeScript**
- **TMDB API** for movie and TV show data
- **HeroUI** for UI components
- **React Router** for navigation

## ✨ Features

- **Browse Movies & TV Shows**: Discover trending, popular, and top-rated content
- **Search Functionality**: Search for specific movies and TV shows
- **Watchlist Management**: Add/remove items to/from your personal watchlist
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean and intuitive interface with HeroUI components

## ⚡ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, pnpm, or bun

### 1. Clone the repository

```bash
git clone https://github.com/fadhilrachman/test_elemes_fe_fadhilge
cd test_elemes_fe_fadhil
```

### 2. Install dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3. Environment Setup

The project uses TMDB API. The environment variables are already configured in the `.env` file:

```env
VITE_API_KEY_TMDB="your_tmdb_api_key"
VITE_API_URL="https://api.themoviedb.org/3/"
VITE_IMG_LINK="https://image.tmdb.org/t/p/w440_and_h660_face"
VITE_YT_LINK="https://www.youtube.com/results?search_query="
```

### 4. Run the development server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── movies/          # Movie-related components
│   ├── tv-show/         # TV show components
│   ├── search/          # Search components
│   ├── watchlist/       # Watchlist components
│   └── shared/          # Shared/reusable components
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries and providers
├── pages/               # Page components
├── types/               # TypeScript type definitions
├── layouts/             # Layout components
└── styles/              # Global styles
```
