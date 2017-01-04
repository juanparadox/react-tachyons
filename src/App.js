// React
import React, { Component } from 'react';
import logo from './logo.svg';
import tachyons from 'tachyons';
class App extends Component {

  render() {
    return (
    	<div className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb mt5">
    		<p class="f2">
        		React.JS + Tachyons component library
    		</p>
    		<p>
    			stateless react components and a whole lot of tachyons
    		</p>	
    	</div>
    );
  }
}

export default App;
