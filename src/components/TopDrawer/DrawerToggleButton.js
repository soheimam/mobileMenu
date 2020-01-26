import React from 'react';

import './DrawerToggleButton.css'

const DrawerToggleButton = props => {
    
    let drawerToggleClass = 'toggle-button_line';


    if (props.showMenu) {
        drawerToggleClass = 'toggle-button_line open';
    }

    return (
        <button className='toggle-button' onClick={props.click}>
        <div className={drawerToggleClass}></div>
        <div className={drawerToggleClass}></div>
        <div className={drawerToggleClass}></div>
    </button>
    )
}

export default DrawerToggleButton;