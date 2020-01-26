import React from 'react';
import NavItem from '../NavItem/NavItem'

const NavItems = props => (
    <ul>
    {
         props.data.map(menuItemData => <NavItem {...menuItemData} />)
    }
    </ul>
        
);

export default NavItems;