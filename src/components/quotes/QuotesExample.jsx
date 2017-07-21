// React
import React from "react";

import LeftBorder from './LeftBorder';
import PullQuote from './PullQuote';

export default () => (
    <article id="quotes" className="center pt4">
        <h2 className="f2 lh-title">Quotes</h2>
        <section>
            <h3 className="f3 lh-copy">Left Border</h3>
            <LeftBorder/>
        </section>
        <section>
            <h3 className="f3 lh-copy">Pull Quote</h3>
            <PullQuote/>
        </section>
    </article>
);
