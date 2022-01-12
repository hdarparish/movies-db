function MovieCard({ movie }) {
  return (
    <div className="card">
      <div>
        <img src={movie.poster} alt="" />
      </div>
      <div className="overlay">
        <div className="details">
          <p>
            {movie.title} {movie.released}
          </p>
          <div className="details__button">
            <button>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
