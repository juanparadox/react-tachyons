// React
import React from "react";

// Article Lists
import TitlePreviewAuthorMediaFlipped from './TitlePreviewAuthorMediaFlipped';
import TitlePreviewAuthorMedia from './TitlePreviewAuthorMedia';

export default () => (
    <article id="lists" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Article Lists</h2>
        <section id="title-preview-author-media-flipped">
            <h3 className="f3 lh-copy">TitlePreviewAuthorMediaFlipped</h3>
            <TitlePreviewAuthorMediaFlipped/>
        </section>
        <section id="title-preview-author-media">
            <h3 className="f3 lh-copy">TitlePreviewAuthorMedia</h3>
            <TitlePreviewAuthorMedia/>
        </section>
    </article>
);
