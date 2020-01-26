import React from 'react';
import './image.css';
import Image from './Image.js';
import Dagelijks from './images/pink.jpg';
import Reizen from './images/suitcase.jpg';
import Sport from './images/sport.jpg';
import Medisch from './images/medisch.jpg';

const images = [
    {'title':'Dagelijks', 'src':Dagelijks},
    {'title':'Reizen', 'src':Reizen},
    {'title':'Sport', 'src':Sport},
    {'title':'Medisch', 'src':Medisch}
]

const ImageSlide = props => (
    <div className='photos'>
        {images.map(image => <Image title={image.title} src={image.src} />)}
    </div> 
);

export default ImageSlide;