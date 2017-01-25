// React
import React, {Component} from "react";
import logo from "./logo.svg";
import tachyons from "tachyons";

// Components
import Button from "./components/Button.js";

// Text
import LargeParagraph from "./components/text/LargeParagraph.js";
import NarrowParagraph from "./components/text/NarrowParagraph.js";
import Paragraph from "./components/text/Paragraph.js";
import SmallNarrowParagraph from "./components/text/SmallNarrowParagraph.js";
import SmallParagraph from "./components/text/SmallParagraph.js";
import WideParagraph from "./components/text/WideParagraph.js";
import TitleSubtitleCentered from "./components/text/TitleSubtitleCentered.js";

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
          <div className="pv4 center mw9">
            <p className="f3">Buttons</p>
            <Button text="Click Me"/>
          </div>
          <div className="pv4 center mw9">
            <p className="f3">Text</p>
            Large Paragraph
            <LargeParagraph/>
            Narrow Paragraph
            <NarrowParagraph/>
            Paragraph
            <Paragraph/>
            Small Narrow Paragraph
            <SmallNarrowParagraph/>
            Small Paragraph
            <SmallParagraph/>
            Wide Paragraph
            <WideParagraph/>
            Title Subtitle Centered
            <TitleSubtitleCentered/>
          </div>
        </section>
      </div>
    );
  }
}

export default App
