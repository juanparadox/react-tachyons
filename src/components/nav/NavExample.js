// React
import React from "react";

// Nav
import FixedSemiTransparent from "./FixedSemiTransparent";
import LargeTitleLinkList from "./LargeTitleLinkList";
import ListOverflow from "./ListOverflow";
import LogoLinksInlineCollapse from "./LogoLinksInlineCollapse";
import LogoLinksInline from "./LogoLinksInline";
import LogoTitlesLinksCentered from "./LogoTitlesLinksCentered";
import MinimalSignUp from "./MinimalSignUp";
import TitleLinkList from "./TitleLinkList";

export default () => (
	<article id="links" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Forms</h2>
        <section id="fixed-semi-transparent">
        	<h3 className="f3 lh-copy">Fixed Semi Transparent</h3>
            <FixedSemiTransparent/>
        </section>
        { /*
        <section id="large-title-link-list">
        	<h3 className="f3 lh-copy">Large Title Link List</h3>
            <LargeTitleLinkList/>
        </section>
        <section id="list-overflow">
        	<h3 className="f3 lh-copy">List Overflow</h3>
            <ListOverflow/>
        </section>
        <section id="logo-links-inline-collapse">
        	<h3 className="f3 lh-copy">Logo Links Inline Collapse</h3>
            <LogoLinksInlineCollapse/>
        </section>
        <section id="logo-links-inline">
        	<h3 className="f3 lh-copy">Logo Links Inline</h3>
            <LogoLinksInline/>
        </section>
        <section id="logo-title-links-centered">
        	<h3 className="f3 lh-copy">Logo Title Links Centered</h3>
            <LogoTitlesLinksCentered/>
        </section>
        <section id="minimal-sign-up">
        	<h3 className="f3 lh-copy">Minimal Sign Up</h3>
            <MinimalSignUp/>
        </section>
        <section id="title-link-list">
            <h3 className="f3 lh-copy">Title Link List</h3>
            <TitleLinkList/>
        </section>
    */}
    </article>
)