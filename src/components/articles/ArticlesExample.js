// React
import React from "react";

// Articles
import Feature from './Feature';
import FullBleedBackground from './FullBleedBackground';
import HeadlineTitleText from './HeadlineTitleText';
import LargeTitleText from './LargeTitleText';
import LeftTitleTopBorder from './LeftTitleTopBorder';
import LeftTitle from './LeftTitle';
import PhotoEssay from './PhotoEssay';
import SingleColumnLargeTitle from './SingleColumnLargeTitle';
import TitleHighlightHeaderCover from './TitleHighlightHeaderCover';
import TitleTextImage from './TitleTextImage';
import TitleText from './TitleText';

export default () => (
    <article id="articles" className="center pt4">
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
        <section id="large-title-text">
            <h3 className="f3 lh-copy">LargeTitleText</h3>
            <LargeTitleText/>
        </section>
        <section id="left-title-top-border">
            <h3 className="f3 lh-copy">LeftTitleTopBorder</h3>
            <LeftTitleTopBorder/>
        </section>
        <section id="left-title">
            <h3 className="f3 lh-copy">LeftTitle</h3>
            <LeftTitle/>
        </section>
        <section id="photo-essay">
            <h3 className="f3 lh-copy">PhotoEssay</h3>
            <PhotoEssay/>
        </section>
        <section id="single-column-large-title">
            <h3 className="f3 lh-copy">SingleColumnLargeTitle</h3>
            <SingleColumnLargeTitle/>
        </section>
        <section id="title-highlight-header-cover">
            <h3 className="f3 lh-copy">TitleHighlightHeaderCover</h3>
            <TitleHighlightHeaderCover/>
        </section>
        <section id="title-text-image">
            <h3 className="f3 lh-copy">TitleTextImage</h3>
            <TitleTextImage/>
        </section>
        <section id="title-text">
            <h3 className="f3 lh-copy">TitleText</h3>
            <TitleText/>
        </section>
    </article>
);
