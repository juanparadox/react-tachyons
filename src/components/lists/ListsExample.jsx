// React
import React from "react";

// Layout
import BlockItemDottedBorder from './BlockItemDottedBorder';
import BorderSpaced from './BorderSpaced';
import BorderTight from './BorderTight';

export default () => (
    <article id="lists" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Lists</h2>
        <section id="aspect-ratio">
            <h3 className="f3 lh-copy">BlockItemDottedBorder</h3>
            <BlockItemDottedBorder/>
            <h3 className="f3 lh-copy">BorderSpaced</h3>
            <BorderSpaced/>
            <h3 className="f3 lh-copy">BorderTight</h3>
            <BorderTight/>
        </section>
    </article>
);
