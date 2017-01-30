// React
import React from "react";

// Layout
import BlockItemDottedBorder from './BlockItemDottedBorder';
import BorderSpaced from './BorderSpaced';
import BorderTight from './BorderTight';
import ContactPhone from './ContactPhone';

export default () => (
    <article id="lists" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Lists</h2>
        <section id="aspect-ratio">
            <h3 className="f3 lh-copy">BlockItemDottedBorder</h3>
            <BlockItemDottedBorder/>
        </section>
        <section id="border-spaced">
            <h3 className="f3 lh-copy">BorderSpaced</h3>
            <BorderSpaced/>
        </section>
        <section id="border-tight">
            <h3 className="f3 lh-copy">BorderTight</h3>
            <BorderTight/>
        </section>
        <section id="contact-phone">
            <h3 className="f3 lh-copy">ContactPhone</h3>
            <ContactPhone />
        </section>
    </article>
);
