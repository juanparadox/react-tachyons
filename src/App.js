// React
import React, {Component} from "react";
import logo from "./logo.svg";
import tachyons from "tachyons";

// Components
import Button from "./components/Button.js";
class App extends Component {
  render() {
    return (
      <div>
        <div className="mw9 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb mt5">
          <p className="f2">
            React.JS + Tachyons component library
          </p>
          <p>
            stateless react components and a whole lot of tachyons
          </p>
        </div>
        <div className="pv5 center mw9">
          <p>Buttons</p>
          <div className="fl w-25 pv3">
            <Button text="regular" />
          </div>
          <div className="fl w-25 pv3">
            <Button text="long" type="long" />
          </div>
          <div className="fl w-25 pv3">
            <Button text="disabled" type="disabled" />
          </div>
          <div className="fl w-25 pv3">
            <Button text="long-disabled" type="long-disabled" />
          </div>
          <div className="fl w-25 pv3">
            <Button text="cancel" type="cancel" />
          </div>
          <div className="fl w-25 pv3">
            <Button text="long-cancel" type="long-cancel" />
          </div>
        </div>
      </div>
    );
  }
}

export default App
