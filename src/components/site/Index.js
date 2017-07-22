// React
import React from "react";
// Banners - Basic
import Basic from "../banners/Basic";

export default () => (
  <div>
    <section className="ph3 ph5-ns w-100 bg-transparent pv3 mb4 mb5-ns bb b--black-10 overflow-auto">
      <div className="nowrap mw9 center">
        <a title="Getting Started" href="#getting-started" className="pv1-ns f6 fw6 dim link black-70 mr2 mr3-m mr4-l dib">
          Getting Started
        </a>
        <a title="Principles" href="#principles" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
          Principles
        </a>
        <a title="Features" href="#features" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
          Features
        </a>
        <a title="Style Guide" href="#style" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
          Style Guide
        </a>
        <a title="Testimonials" href="#testimonials" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
          Testimonials
        </a>
      </div>
    </section>
    <Basic
      tagline="React.JS + Tachyons component library"
      subline="Stateless react components and a whole lot of tachyons."
      small="Want to contribute?"
      bgColor=""
      fontColor="mid-gray"
      leftButton={{ text: "GitHub", href: "https://github.com/juanparadox/react-tachyons", bgColor: "dark-blue"}}
      rightButton={{ text: "Issues", href: "https://github.com/juanparadox/react-tachyons/issues"}}
    />
  </div>
);
