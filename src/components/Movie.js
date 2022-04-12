import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

class Movie extends React.Component {
    render() {
        const { title, year, summary, poster, genres } = this.props;

        return (
            <div className='movie_data'>
                <div className='poster'>
                    <img src={poster} alt={title} title={title} />
                </div>
                <div className='data'>
                    <h3 className='movie_title'>{title}</h3>
                    <h5 className='movie_year_genres'>
                        {year} / {genres.map((genre, index) => {
                            return <span className="movie_genre" key={index}>{genre}</span>
                        })}
                    </h5>
                    <p className='movie_summary'>{summary ? summary : '* Sorry! No information!'}</p>
                    <button>Read More</button>
                </div>
            </div>
        )
    }
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;