// React
import React, {Component} from "react";
// eslint-disable-next-line
import tachyons from "tachyons"; // TODO: determine the best way to load tachyons in...

// Text
import TextExample from "./components/text/TextExample";

// Links
import LinksExample from "./components/links/LinksExample";

// Layout
import LayoutExample from "./components/layout/LayoutExample";

// Buttons
import ButtonExample from "./components/buttons/ButtonExample";

// Forms
import FormExample from "./components/forms/FormsExample";

// Lists
import ListsExample from "./components/lists/ListsExample";

// Error Pages
import ErrorPagesExample from "./components/errorpages/ErrorPagesExample";

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
        <section className="ph5">
          <TextExample/>
          <LinksExample/>
          <ButtonExample/>
          <FormExample/>
          <LayoutExample/>
          <ListsExample/>
          <ErrorPagesExample/>
        </section>
      </div>
    );
  }
}

export default App
