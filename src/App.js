// React
import React, {Component} from "react";

// React Router
import {BrowserRouter as Router, Route} from 'react-router-dom'

// eslint-disable-next-line
import tachyons from "tachyons"; // TODO: determine the best way to load tachyons in...

// Site
import Index from "./components/site/Index";
import Header from "./components/site/Header";
import Components from "./components/site/Components";

import ArticleLists from "./components/articlelists/ArticleLists";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
        	<div>
          	<Route exact={true} path="/" component={Index}/>
            <Route exact={true} path="/rt/components" component={Components}/>
            <Route path="/rt/components/article-lists/" component={ArticleLists}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App
