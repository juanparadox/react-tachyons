// React
import React, {Component} from "react";
import logo from "./logo.svg";
import tachyons from "tachyons";

// Components
import AspectRatio from './components/layout/AspectRatio';
import CenteredContainer from './components/layout/CenteredContainer';

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
        <article id="layout" className="mw5 mw6-ns center pt4">
            <h2 className="f2 lh-title">Layout</h2>
            <section id="aspect-ratio" className="dn">
                <h3 className="f3 lh-copy">AspectRatio</h3>
                16x9
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="16x9"/>
                1x1
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="1x1"/>
                3x4
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="3x4"/>
                4x3
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="4x3"/>
                4x6
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="4x6"/>
                5x7
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="5x7"/>
                5x8
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="5x8"/>
                6x4
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="6x4"/>
                7x5
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="7x5"/>
                8x5
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="8x5"/>
                9x16
                <AspectRatio img="http://mrmrs.io/photos/001.jpg" ratio="9x16"/>
            </section>
            <section id="centered-container">
                <h3 className="f3 lh-copy">CenteredContainer</h3>
                <CenteredContainer>
                    <h1 className="mt0">Centered Container</h1>
                    <p className="lh-copy measure">
                        Combine width or max-width values with the center class to create a centered container for your content.
                    </p>
                </CenteredContainer>
            </section>
        </article>
      </div>
    );
  }
}

export default App
