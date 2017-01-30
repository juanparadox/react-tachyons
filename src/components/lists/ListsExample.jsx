// React
import React from "react";

// Layout
import BlockItemDottedBorder from './BlockItemDottedBorder';
import BorderSpaced from './BorderSpaced';
import BorderTight from './BorderTight';
import ContactPhone from './ContactPhone';
import FollowerNotifications from './FollowerNotifications';
import Hashtags from './Hashtags';

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
        <section id="follower-notifications">
            <h3 className="f3 lh-copy">FollowerNotifications</h3>
            <FollowerNotifications />
        </section>
        <section id="hashtags">
            <h3 className="f3 lh-copy">Hashtags</h3>
            <Hashtags />
        </section>
    </article>
);
