// React
import React from "react";

// Text
import LargeParagraph from "./LargeParagraph.js";
import NarrowParagraph from "./NarrowParagraph.js";
import Paragraph from "./Paragraph.js";
import SmallNarrowParagraph from "./SmallNarrowParagraph.js";
import SmallParagraph from "./SmallParagraph.js";
import WideParagraph from "./WideParagraph.js";
import TitleSubtitleCentered from "./TitleSubtitleCentered.js";

export default () => (
	<article id="text" className="center pt4">
        <h2 className="f2 lh-title">Text</h2>
        <section id="large-paragraph">
        	<h3 className="f3 lh-copy">Large Paragraph</h3>
            <LargeParagraph/>
        </section>
        <section id="narrow-paragraph">
        	<h3 className="f3 lh-copy">Narrow Paragraph</h3>
            <NarrowParagraph/>
        </section>
        <section id="paragraph">
        	<h3 className="f3 lh-copy">Paragraph</h3>
            <Paragraph/>
        </section>
        <section id="small-narrow-paragraph">
        	<h3 className="f3 lh-copy">Small Narrow Paragraph</h3>
            <SmallNarrowParagraph/>
        </section>
        <section id="small-paragraph">
        	<h3 className="f3 lh-copy">Small Paragraph</h3>
            <SmallParagraph/>
        </section>
        <section id="wide-paragraph">
        	<h3 className="f3 lh-copy">Wide Paragraph</h3>
            <WideParagraph/>
        </section>
        <section id="title-subtitle-centered">
        	<h3 className="f3 lh-copy">Title Subtitle Centered</h3>
            <TitleSubtitleCentered/>
        </section>
    </article>
)
