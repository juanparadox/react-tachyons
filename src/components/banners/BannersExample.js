// React
import React from "react";

// Banners
import Basic from './Basic';
import Info from './Info';
import SingleCTA from './SingleCTA';

export default () => (
    <article id="banners" className="center pt4">
        <h2 className="f2 lh-title">Banners</h2>
        <section id="basic">
            <h3 className="f3 lh-copy">Basic</h3>
            <Basic/>
        </section>
        <section id="info">
            <h3 className="f3 lh-copy">Info</h3>
            <Info/>
        </section>
        <section id="single-cta">
            <h3 className="f3 lh-copy">SingleCTA</h3>
            <SingleCTA/>
        </section>
    </article>
);
