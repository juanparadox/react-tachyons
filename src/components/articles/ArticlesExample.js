// React
import React from "react";

// Articles
import Feature from './Feature';
import FullBleedBackground from './FullBleedBackground';
import HeadlineTitleText from './HeadlineTitleText';

export default () => (
    <article id="articles" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Articles</h2>
        <section id="feature">
            <h3 className="f3 lh-copy">Feature</h3>
            <Feature/>
        </section>
        <section id="full-bleed-background">
            <h3 className="f3 lh-copy">FullBleedBackground</h3>
            <FullBleedBackground/>
        </section>
        <section id="headline-title-text">
            <h3 className="f3 lh-copy">HeadlineTitleText</h3>
            <HeadlineTitleText/>
        </section>
    </article>
);