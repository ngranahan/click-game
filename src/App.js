import React, { Component } from 'react';
import Header from './components/Header';
import images from './images/images.json'
import ImageCard from './components/ImageCard';
import Footer from './components/Footer'
import './styles/footer.css';

const clickedImages = ["word"];

class App extends Component {
  state = {
    wins: 0,
    images,
    clickedImages
  };

  gamePlay = (id) => {
  console.log(id);
    if (!this.state.clickedImages.includes(id)) {
      this.setState({ wins: this.state.wins + 1 });
      const temp = [];
      temp.push(id);
      this.setState({ clickedImages: temp })
      console.log("added to array");
    } else {
      this.setState({ wins: 0, clickedImages: [] })
    }

    // Shuffle image cards
    let i = this.state.images.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.state.images[i];
      this.state.images[i] = this.state.images[j];
      this.state.images[j] = temp;
    }
    return this.setState({ images: this.state.images });
  }

  render() {
    return (
      <div className="App">
        <Header 
          wins={this.state.wins}
        />

        <main>
          <div className="container card-wrapper">
              {this.state.images.map(image => (
                <ImageCard
                  gamePlay={this.gamePlay}
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
