// React
import React, {Component} from "react";
import logo from "./logo.svg";
import tachyons from "tachyons";

// Text
import LargeParagraph from "./components/text/LargeParagraph.js";
import NarrowParagraph from "./components/text/NarrowParagraph.js";
import Paragraph from "./components/text/Paragraph.js";
import SmallNarrowParagraph from "./components/text/SmallNarrowParagraph.js";
import SmallParagraph from "./components/text/SmallParagraph.js";
import WideParagraph from "./components/text/WideParagraph.js";
import TitleSubtitleCentered from "./components/text/TitleSubtitleCentered.js";

// Links
import AnimateBackgroundColor from "./components/links/AnimateBackgroundColor.js";
import AnimateColor from "./components/links/AnimateColor.js";
import DimNoUnderline from "./components/links/DimNoUnderline.js";
import UnderlineOnHover from "./components/links/UnderlineOnHover.js";

// Buttons
import BasicPreviousNext from "./components/buttons/BasicPreviousNext.js";
import BasicRoundedExtraSmall from "./components/buttons/BasicRoundedExtraSmall.js";
import BasicRoundedSmall from "./components/buttons/BasicRoundedSmall.js";
import BasicRounded from "./components/buttons/BasicRounded.js";
import Basic from "./components/buttons/Basic.js";
import CenteredIcons from "./components/buttons/CenteredIcons.js";
import PillGrow from "./components/buttons/PillGrow.js";
import Pill from "./components/buttons/Pill.js";

// Forms
import CheckboxList from "./components/forms/CheckboxList.js";

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
            <p className="f3">Text</p>
            <p>Large Paragraph</p>
            <LargeParagraph/>
            <p>Narrow Paragraph</p>
            <NarrowParagraph/>
            <p>Paragraph</p>
            <Paragraph/>
            <p>Small Narrow Paragraph</p>
            <SmallNarrowParagraph/>
            <p>Small Paragraph</p>
            <SmallParagraph/>
            <p>Wide Paragraph</p>
            <WideParagraph/>
            <p>Title Subtitle Centered</p>
            <TitleSubtitleCentered/>
          </div>
          <div className="pv4 center mw9">
            <p className="f3">Links</p>
            <p>Animate Background Color</p>
            <AnimateBackgroundColor/>
            <p>Animate Color</p>
            <AnimateColor/>
            <p>Dim No Underline</p>
            <DimNoUnderline/>
            <p>Underline On Hover</p>
            <UnderlineOnHover/>
          </div>
          <div className="pv4 center mw9">
            <p className="f3">Buttons</p>
            <p>Basic Previous Next</p>
            <BasicPreviousNext/>
            <p>Basic Rounded Extra Small</p>
            <BasicRoundedExtraSmall/>
            <p>Basic Rounded Small</p>
            <BasicRoundedSmall/>
            <p>Basic Rounded</p>
            <BasicRounded/>
            <p>Basic</p>
            <Basic/>
            <p>Centered Icons</p>
            <CenteredIcons type="facebook"/>
            <p>Pill Grow</p>
            <PillGrow/>
            <p>Pill</p>
            <Pill/>
          </div>
          <div className="pv4 center mw9">
            <p className="f3">Forms</p>
            <p>Checkbox List</p>
            { /*<CheckboxList/> */}
          </div>
        </section>
      </div>
    );
  }
}

export default App
