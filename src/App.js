import React, { Component } from 'react'
import Toolbar from './components/Toolbar/Toolbar';
import TopDrawer from './components/TopDrawer/TopDrawer';
import menuData from './data/menuData';

class App extends Component{
  state = {
    topDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {topDrawerOpen: !prevState.topDrawerOpen}
    })
  };
  
  render () {
    let topDrawer;
    if (this.state.topDrawerOpen){
      topDrawer = <TopDrawer data={menuData} />;
    };

  return (
    <div style={{height:'100vh'}} className="App">
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} showMenu={this.state.topDrawerOpen} data={menuData.filter(item => item.topMenu)}/>
      {topDrawer}
      <main style={{marginTop:'64px'}}>
      </main>
    </div>
  );
  }
}

export default App;
