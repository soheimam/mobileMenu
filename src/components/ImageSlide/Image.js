import React from 'react';
import './image.css';

const Image = props => (
 <div className="photo">
    <div className="overlay">
      <h2>
       {props.title}
      </h2>
    </div>
    <img src={props.src} />
</div>
        
);

export default Image;