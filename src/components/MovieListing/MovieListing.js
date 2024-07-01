import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getAllMovies,
  getAllShows,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";
import { settings } from "../../common/apis/setting";

const MovieListing = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  useEffect(() => {
    if (!movies.Search && !shows.Search) {
      dispatch(fetchAsyncMovies("avengers"));
      dispatch(fetchAsyncShows("avengers"));
    }
  }, [dispatch, movies, shows]);

  let renderMovies, renderShows;

  if (movies && movies.Response === "True" && movies.Search) {
    renderMovies = movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ));
  } else {
    renderMovies = (
      <div className="movies-error">
        <h3>{movies && movies.Error}</h3>
      </div>
    );
  }

  if (shows && shows.Response === "True" && shows.Search) {
    renderShows = shows.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ));
  } else {
    renderMovies = (
      <div className="movies-error">
        <h3>{shows && shows.Error}</h3>
      </div>
    );
  }

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
