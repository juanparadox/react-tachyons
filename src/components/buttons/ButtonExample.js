// React
import React from "react";

import BasicPreviousNext from "./BasicPreviousNext.js";
import BasicRoundedExtraSmall from "./BasicRoundedExtraSmall.js";
import BasicRoundedSmall from "./BasicRoundedSmall.js";
import BasicRounded from "./BasicRounded.js";
import Basic from "./Basic.js";
import CenteredIcons from "./CenteredIcons.js";
import PillGrow from "./PillGrow.js";
import Pill from "./Pill.js";

export default () => (
	<article id="button" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Buttons</h2>
        <section id="basic-previous-next">
        	<h3 className="f3 lh-copy">Basic Previous Next</h3>
            <BasicPreviousNext/>
        </section>
        <section id="basic-rounded-extra-small">
        	<h3 className="f3 lh-copy">Basic Rounded Extra Small</h3>
            <BasicRoundedExtraSmall/>
        </section>
        <section id="basic-rounded-small">
        	<h3 className="f3 lh-copy">Basic Rounded Small</h3>
            <BasicRoundedSmall/>
        </section>
        <section id="basic-rounded">
        	<h3 className="f3 lh-copy">Basic Rounded</h3>
            <BasicRounded/>
        </section>
        <section id="basic">
        	<h3 className="f3 lh-copy">Basic</h3>
            <Basic/>
        </section>
        <section id="centered-icons">
        	<h3 className="f3 lh-copy">Centered Icons</h3>
            <CenteredIcons type="facebook"/>
        </section>
        <section id="pill-grow">
        	<h3 className="f3 lh-copy">Pill Grow</h3>
            <PillGrow/>
        </section>
        <section id="pill">
        	<h3 className="f3 lh-copy">Pill</h3>
            <Pill/>
        </section>
    </article>
)