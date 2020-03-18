import React from 'react';

export default class display extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    this.fetchData(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=7cdf7d7de96673cdc912e661988a1435'
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movie !== this.state.movie) {
      const url = this.props.movie
        ? `https://api.themoviedb.org/3/search/movie?api_key=7cdf7d7de96673cdc912e661988a1435&language=en-US&query=${this.props.movie}&page=1&include_adult=false`
        : 'https://api.themoviedb.org/3/trending/movie/day?api_key=7cdf7d7de96673cdc912e661988a1435';
      this.fetchData(url);
    }
  }

  fetchData = url => {
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul>
          <h3>Movies</h3>
          {items.map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                alt={item.title}
                className="poster"
              />
              <div>
                <span>{item.vote_average}</span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.overview}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
