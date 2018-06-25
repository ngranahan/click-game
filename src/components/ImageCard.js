import React from 'react';
import '../styles/imagecard.css';

const ImageCard = props => (
    <div className="card image-card">
        <div className="card-image">
          <img onClick={() => props.incrementWins()} alt="Keith Haring" src={props.src} data-id={props.id}/>  
        </div>
    </div>
);

export default ImageCard;