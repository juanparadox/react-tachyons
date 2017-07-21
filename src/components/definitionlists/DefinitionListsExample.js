// React
import React from "react";

// Article Lists
import Inline from './Inline';
import Simple from './Simple';

export default () => (
    <article id="definition-lists" className="center pt4">
        <h2 className="f2 lh-title">Definition Lists</h2>
        <section>
            <h3 className="f3 lh-copy">Inline</h3>
            <Inline/>
        </section>
        <section>
            <h3 className="f3 lh-copy">Simple</h3>
            <Simple/>
        </section>
    </article>
);
