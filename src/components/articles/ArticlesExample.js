// React
import React from "react";

// Articles
import Feature from './Feature';

export default () => (
    <article id="articles" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Articles</h2>
        <section id="feature">
            <h3 className="f3 lh-copy">Feature</h3>
            <Feature/>
        </section>
    </article>
);