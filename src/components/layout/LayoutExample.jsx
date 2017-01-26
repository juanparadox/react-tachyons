// React
import React, {Component} from "react";

// Layout
import AspectRatio from './AspectRatio';
import CenteredContainer from './CenteredContainer';
import FiveColumn from './FiveColumn';
import FourColumn from './FourColumn';
import ThreeColumn from './ThreeColumn';
import TwoColumn from './TwoColumn';
import FlagObject from './FlagObject';
import FullBleed from './FullBleed';

export default () => (
    <article id="layout" className="measure-wide center pt4">
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
        <section id="centered-container" className="dn">
            <h3 className="f3 lh-copy">CenteredContainer</h3>
            <CenteredContainer>
                <h1 className="mt0">Centered Container</h1>
                <p className="lh-copy measure">
                    Combine width or max-width values with the center class to create a centered container for your content.
                </p>
            </CenteredContainer>
        </section>
        <section id="columns" className="dn">
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
        <section id="flag-object" className="dn">
            <h3 className="f3 lh-copy">FlagObject</h3>
            Top
            <FlagObject align="top"/>
            Middle
            <FlagObject/>
            Bottom
            <FlagObject align="btm"/>
        </section>
        <section id="full-bleed">
            <h3 className="f3 lh-copy">FullBleed</h3>
            16x9
            <FullBleed ratio="16x9"/>
            1x1
            <FullBleed ratio="1x1"/>
            3x4
            <FullBleed ratio="3x4"/>
            4x3
            <FullBleed ratio="4x3"/>
            4x6
            <FullBleed ratio="4x6"/>
            5x7
            <FullBleed ratio="5x7"/>
            5x8
            <FullBleed ratio="5x8"/>
            6x4
            <FullBleed ratio="6x4"/>
            7x5
            <FullBleed ratio="7x5"/>
            8x5
            <FullBleed ratio="8x5"/>
            9x16
            <FullBleed ratio="9x16"/>
        </section>
    </article>
);
