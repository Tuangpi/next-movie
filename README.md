# Next Movies

A simple movie browser built with Next.js 14, Tailwind CSS, and data from The Movie Database (TMDB).

## Features

- Browse popular movies
- Browse trending movies
- Search movies by title
- Filter movies by genre
- View movie details and cast members

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui components
- TMDB API

## Project Structure

- `app/page.js` - home page with popular and trending movies
- `app/search/page.js` - search results page
- `app/movie/[id]/page.js` - movie details page
- `app/genres/[name]/[id]/page.js` - movies by genre
- `components/` - shared UI and movie components

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file:

```env
TMDB_TOKEN=your_tmdb_bearer_token
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Scripts

- `npm run dev` - start the development server
- `npm run build` - build the app for production
- `npm run start` - start the production server
- `npm run lint` - run linting

## Notes

- This project uses the TMDB API, so you need a valid TMDB bearer token.
- Images and movie data are loaded from TMDB.
