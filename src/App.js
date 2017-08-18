// React
import React, {Component} from "react";

// React Router
import {HashRouter, Route} from 'react-router-dom'

// eslint-disable-next-line
import tachyons from "tachyons"; // TODO: determine the best way to load tachyons in...

// Site
import Index from "./components/site/Index";
import Header from "./components/site/Header";
import Components from "./components/site/Components";;

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
        	<div>
            <Header/>
          	<Route exact={true} path="/" component={Index}/>
            <Route path="/components" component={Components}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
