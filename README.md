# MovieBase App

## Overview

MovieBase is a web application designed to search for and display detailed information about movies and TV shows. It uses the [OMDb API](http://www.omdbapi.com/) to fetch data about various movies and shows.

Live URL: [https://moviebase-db.netlify.app/](https://moviebase-db.netlify.app/)  
Repository URL: [https://github.com/Abdul-Rahman-E/MovieBase](https://github.com/Abdul-Rahman-E/MovieBase)

## Features

- Search for movies and TV shows
- Display detailed information about selected movies and TV shows
- Responsive design
- Pagination for search results
- Error handling for invalid routes and API failures

## Technologies Used

- React
- Redux Toolkit
- React Router
- Axios
- OMDb API

## Project Structure

```bash
MovieBase/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   ├── Footer.js
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   ├── Header.js
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   ├── MovieCard/
│   │   │   ├── MovieCard.css
│   │   │   ├── MovieCard.js
│   │   ├── MovieDetail/
│   │   │   ├── MovieDetail.css
│   │   │   ├── MovieDetail.js
│   │   ├── MovieListing/
│   │   │   ├── MovieListing.css
│   │   │   ├── MovieListing.js
│   │   ├── PageNotFound/
│   │   │   ├── PageNotFound.css
│   │   │   ├── PageNotFound.js
│   ├── features/
│   │   ├── movies/
│   │   │   ├── movieSlice.js
│   ├── common/
│   │   ├── apis/
│   │   │   ├── MovieApi.js
│   │   │   ├── MovieApiKey.js
│   │   │   ├── settings.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── package.json
```

## Components

### `App.js`

The main component that sets up the routing for the application.

### `Header.js`

- Contains the logo and search bar.
- Dispatches search actions to fetch movies and TV shows based on user input.

### `Footer.js`

- Displays the footer content of the application.

### `Home.js`

- Displays the homepage content, including a banner and movie listings.

### `MovieCard.js`

- Displays individual movie or TV show information in a card format.

### `MovieDetail.js`

- Displays detailed information about a selected movie or TV show.

### `MovieListing.js`

- Displays lists of movies and TV shows fetched from the API.

### `PageNotFound.js`

- Displays a 404 error message for invalid routes.

## State Management

### `movieSlice.js`

- Uses Redux Toolkit to manage the state of movies and TV shows.
- Defines actions and reducers to fetch movies, TV shows, and details.

## API Configuration

### `MovieApi.js`

- Configures Axios to interact with the OMDb API.

### `MovieApiKey.js`

- Stores the API key for accessing the OMDb API.

### `settings.js`

- Configuration settings for the movie listing component.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdul-Rahman-E/MovieBase.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MovieBase
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your OMDb API key:
   ```env
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```

### Running the App

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
