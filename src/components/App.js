import React from 'react';
import SearchArea from './SearchArea';
import Nav from './Nav';

export default class App extends React.Component {
  state = {
    movie: null,
  };

  setMovie = x => this.setState({ movie: x });

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Movie Search</h1>
          <h3>Search about whatever movie you want</h3>
        </header>
        <SearchArea movie={this.setMovie} />
        <main>
          <Nav movie={this.state.movie} />
        </main>
      </div>
    );
  }
}
