// React
import React, {Component} from "react";
import logo from "./logo.svg";
import tachyons from "tachyons";

// Layout
import AspectRatio from './components/layout/AspectRatio';
import CenteredContainer from './components/layout/CenteredContainer';
import FiveColumn from './components/layout/FiveColumn';
import FourColumn from './components/layout/FourColumn';
import ThreeColumn from './components/layout/ThreeColumn';
import TwoColumn from './components/layout/TwoColumn';

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
            <section id="five-column">
                <h3 className="f3 lh-copy">FiveColumn</h3>
                <FiveColumn>
                    <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p>
                </FiveColumn>
                <h3 className="f3 lh-copy">FourColumn</h3>
                <FourColumn>
                    <p>1</p><p>2</p><p>3</p><p>4</p>
                </FourColumn>
                <h3 className="f3 lh-copy">ThreeColumn</h3>
                <ThreeColumn>
                    <p>1</p><p>2</p><p>3</p><p>4</p>
                </ThreeColumn>
                <h3 className="f3 lh-copy">TwoColumn</h3>
                <TwoColumn>
                    <p>1</p><p>2</p><p>3</p><p>4</p>
                </TwoColumn>
            </section>
        </article>
      </div>
    );
  }
}

export default App
