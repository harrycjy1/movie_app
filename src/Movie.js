import React, { Component } from "react";
import "./Movie.css";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   };

//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

// class MoviePoster extends Component {
//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   };

//   render() {
//     return <img src={this.props.poster} />;
//   }
// }

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => {
            return <MovieGenre genre={genre} key={index} />;
          })}
        </div>
        <p className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </p>
      </div>
    </div>
  );
}

//state가 필요없으니가 functional component 하면 된다.
function MoviePoster({ poster, alt }) {
  return <img className="Movie__Poster" src={poster} alt={alt} title={alt} />;
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  alt: PropTypes.string
};

MovieGenre.propTypes = {
  genre: PropTypes.string
};

export default Movie;
