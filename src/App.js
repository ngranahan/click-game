import React, { Component } from 'react';
import Header from './components/Header';
import images from './images/images.json'
import ImageCard from './components/ImageCard';
import Footer from './components/Footer'
import './styles/footer.css';


class App extends Component {
  state = {
    wins: 0
  };

  // When image is clicked, check to see if it has already been clicked (need to figure out how to do that!). 
  // If image hasn't been clicked, increment score by 1.
  // If image has been clicked reset game
  // When image is clicked add it to an array of clicked images
  incrementWins = (images) => {
    this.setState({ wins: this.state.wins + 1 });
  };

  render() {
    return (
      <div className="App">
        <Header 
          wins={this.state.wins}
        />

        <main>
          <div className="container card-wrapper">
              {images.map(image => (
                <ImageCard
                  incrementWins={this.incrementWins}
                  id={image.id}
                  key={image.id}
                  src={image.src}
                />
              ))}
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
