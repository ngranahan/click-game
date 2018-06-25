import React, { Component } from 'react';
import Header from './components/Header';
import images from './images/images.json'
import ImageCard from './components/ImageCard';
import Footer from './components/Footer'
import './styles/footer.css';

// This function shuffles images but need to figure out how to do this using state on click
const shuffleArray = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const shuffledImages = shuffleArray(images);

class App extends Component {
  state = {
    wins: 0
  };

  // When image is clicked, check to see if it has already been clicked (need to figure out how to do that!). 
  // If image hasn't been clicked, increment score by 1.
  // If image has been clicked reset game
  // When image is clicked add it to an array of clicked images
  incrementWins = () => {
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
              {shuffledImages.map(image => (
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
