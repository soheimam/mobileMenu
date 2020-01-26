import React from 'react';
import './TopDrawer.css';
import NavItems from '../NavItems/NavItems.js';
import ImageSlide from '../ImageSlide/ImageSlide.js';
import Footer from '../Footer/Footer.js';

const topDrawer = props => (
    <nav className='top-drawer'>
        <ImageSlide />
     
        <NavItems data={props.data}/>
        <Footer />
    </nav>
)

export default topDrawer;