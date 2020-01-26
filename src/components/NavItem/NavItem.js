import React, {Component} from 'react';


class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
         
        };
        this.handleNavExpandClick = this.handleNavExpandClick.bind(this)

    }

    handleNavExpandClick = (e) => {
        e.preventDefault();
        this.setState({
            toggled: !this.state.toggled
        })       
    }
   render(){
       let className = ''
       if (this.props.items) {
          className ='arrow'
       }
        if (this.state.toggled && this.props.items){
            return (
                <div>
                <li><a href='/' className={className} onClick={((e) => this.handleNavExpandClick(e))}>{this.props.name}</a></li>
                <ul className='child_menu' >
                    {
                    this.props.items.map(item => <li><a href={`/${item.name}`}>{item.name}</a></li>)
                    }
                </ul>
                </div>
            )
        }
       return (
            <li><a href='/' className={className}onClick={((e) => this.handleNavExpandClick(e, this.props))}>{this.props.name}</a></li>
       )
   }
   
};

export default NavItem;