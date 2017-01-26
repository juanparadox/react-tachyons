// React
import React, {Component} from "react";
import logo from "./logo.svg";
import tachyons from "tachyons";

// Layout
import LayoutExample from "./components/layout/LayoutExample";

class App extends Component {
  render() {
    return (
      <div>
        <div className="mw9 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb">
          <p className="f2">
            React.JS + Tachyons component library
          </p>
          <p>
            stateless react components and a whole lot of tachyons
          </p>
        </div>
        <LayoutExample/>
      </div>
    );
  }
}

export default App
