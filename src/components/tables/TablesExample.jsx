// React
import React from "react";

import Basic from './Basic';
import Striped from './Striped';

export default () => (
    <article id="tables" className="measure-wide center pt4">
        <h2 className="f2 lh-title">Tables</h2>
        <section>
            <h3 className="f3 lh-copy">Basic</h3>
            <Basic/>
        </section>
        <section>
            <h3 className="f3 lh-copy">Striped</h3>
            <Striped/>
        </section>
    </article>
);
