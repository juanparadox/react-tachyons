// React
import React from "react";

import CenteredIconsHoverGlow from "./CenteredIconsHoverGlow.js";
import InlineText from "./InlineText.js";
import SimpleLargeType from "./SimpleLargeType.js";
import SmallPrint from "./SmallPrint.js";
import SocialCircles from "./SocialCircles.js";
import SocialSimpleText from "./SocialSimpleText.js";
import SocialSimple from "./SocialSimple.js";
import SocialText from "./SocialText.js";
import Social from "./Social.js";
import Studios from "./Studios.js";

export default () => (
	<article id="footers" className="center pt4">
        <h2 className="f2 lh-title">Footer</h2>
        <section id="centered-icons-hover-glow">
        	<h3 className="f3 lh-copy">Centered Icons Hover Glow</h3>
            <CenteredIconsHoverGlow/>
        </section>
        <section id="inline-text">
        	<h3 className="f3 lh-copy">Inline Text</h3>
            <InlineText/>
        </section>
        <section id="simple-large-type">
        	<h3 className="f3 lh-copy">Simple Large Type</h3>
            <SimpleLargeType/>
        </section>
        <section id="small-print">
        	<h3 className="f3 lh-copy">Small Print</h3>
            <SmallPrint/>
        </section>
        <section id="social-circles">
        	<h3 className="f3 lh-copy">Social Circles</h3>
            <SocialCircles/>
        </section>
        <section id="social-simple-text">
        	<h3 className="f3 lh-copy">Social Simple Text</h3>
            <SocialSimpleText/>
        </section>
        <section id="social-simple">
        	<h3 className="f3 lh-copy">Social Simple</h3>
            <SocialSimple/>
        </section>
        <section id="social-text">
        	<h3 className="f3 lh-copy">Social Text</h3>
            <SocialText/>
        </section>
        <section id="social">
            <h3 className="f3 lh-copy">Social</h3>
            <Social/>
        </section>
        <section id="studios">
            <h3 className="f3 lh-copy">Studios</h3>
            <Studios/>
        </section>
    </article>
)
