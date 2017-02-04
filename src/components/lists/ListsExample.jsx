// React
import React from "react";

// Layout
import BlockItemDottedBorder from './BlockItemDottedBorder';
import BorderSpaced from './BorderSpaced';
import BorderTight from './BorderTight';
import ContactPhone from './ContactPhone';
import FollowerNotifications from './FollowerNotifications';
import Hashtags from './Hashtags';
import ItemsImageTitlePrice from './ItemsImageTitlePrice';
import LinksInline from './LinksInline';
import SlabStat from './SlabStat';

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
        <section id="items-image-title-price">
            <h3 className="f3 lh-copy">ItemsImageTitlePrice</h3>
            <ItemsImageTitlePrice />
        </section>
        <section id="links-inline">
            <h3 className="f3 lh-copy">LinksInline</h3>
            <code className="silver">{'<LinksLinline />'}</code>
            <LinksInline />
            <code className="silver">{'<LinksInline size="large" hoverColor="blue" />'}</code>
            <LinksInline size="large" hoverColor="blue" />
            <code className="silver">{'<LinksInline size="small" hoverColor="orange" withBorders />'}</code>
            <LinksInline size="small" hoverColor="orange" withBorders />
        </section>
        <section id="slab-stat">
            <h3 className="f3 lh-copy">SlabStat</h3>
            <code className="silver">
                {'<SlabStat />'}
            </code>
            <SlabStat />
            <code className="silver">
                {'<SlabStat size="small" />'}
            </code>
            <SlabStat size="small" />
            <code className="silver">
                {'<SlabStat size="large" />'}
            </code>
            <SlabStat size="large" />
        </section>
    </article>
);
