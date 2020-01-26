import React from 'react';
import './Toolbar.css';
import Logo from './stoxlogo.png';
import DrawerToggleButton from '../TopDrawer/DrawerToggleButton.js';
import NavItems from '../NavItems/NavItems.js';


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} showMenu={props.showMenu}/>
            </div>
            <div className="toolbar_logo"> <img src={Logo}/> </div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <NavItems data={props.data} toolbar={props.toolbar}/>
            </div>
        </nav>
    </header>
);

export default Toolbar;

