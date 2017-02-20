// React
import React from "react";

// Article Lists
import Inline from './Inline';
// import TitlePreviewAuthorMedia from './TitlePreviewAuthorMedia';

export default () => (
    <article id="definition-lists" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Definition Lists</h2>
        <section id="title-preview-author-media-flipped">
            <h3 className="f3 lh-copy">Inline</h3>
            <Inline/>
        </section>
    </article>
);
