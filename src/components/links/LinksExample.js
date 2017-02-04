// React
import React from "react";

// Layout
import AnimateBackgroundColor from "./AnimateBackgroundColor.js";
import AnimateColor from "./AnimateColor.js";
import DimNoUnderline from "./DimNoUnderline.js";
import UnderlineOnHover from "./UnderlineOnHover.js";

export default () => (
	<article id="links" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Links</h2>
        <section id="animate-background-color">
        	<h3 className="f3 lh-copy">Animate Background Color</h3>
            <AnimateBackgroundColor/>
        </section>
        <section id="animate-color">
        	<h3 className="f3 lh-copy">Animate Color</h3>
            <AnimateColor/>
        </section>
        <section id="dim-no-underline">
        	<h3 className="f3 lh-copy">Dim No Underline</h3>
            <DimNoUnderline/>
        </section>
        <section id="underline-on-hover">
        	<h3 className="f3 lh-copy">Underline On Hover</h3>
            <UnderlineOnHover/>
        </section>
    </article>
)