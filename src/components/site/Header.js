import React from "react"
import {Link} from 'react-router-dom'

const Header = () =>
  <header className="w-100 pt3 bg-white">
    <div className="db dt-ns mw9 center w-100 ph5">
      <div className="db dtc-ns v-mid tl w-50">
        <Link to="/" className="dib f5 f4-ns fw6 mt0 mb1 link black-70" title="Home">
          react-tachyons
          <div className="dib">
            <small className="nowrap f6 mt2 mt3-ns pr2 black-70 fw2">v0.1.0</small>
          </div>
        </Link>
      </div>
      <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
        <Link to="/docs" title="Documentation"  className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
          Docs
        </Link>
        <Link to="/components" title="Components" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
          Components
        </Link>
        <Link to="/gallery" title="Gallery of sites built with Tachyons" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
          Gallery
        </Link>
        <Link to="/resources" title="Resources" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
          Resources
        </Link>
        <a href="http://github.com/tachyons-css/tachyons/" title="Tachyons on GitHub" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dn dib-l">
          Tachyons
        </a>
      </nav>
    </div>
    <section className="ph3 ph5-ns w-100 bg-transparent pv3 mb4 bb b--black-10 overflow-auto">
      <div className="nowrap mw9 center">
        <Link to="/getting-started" title="Getting Started" className="pv1-ns f6 fw6 dim link black-70 mr2 mr3-m mr4-l dib">
          Getting Started
        </Link>
        <Link to="/principles" title="Principles" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
          Principles
        </Link>
        <Link to="/features" title="Features" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
          Features
        </Link>
        <Link to="/style" title="Style Guide" className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
          Style Guide
        </Link>
        <Link to="/testimonials" title="Testimonials"  className="pv1-ns f6 fw6 dim link black-70 mr1 mr3-m mr4-l dib">
          Testimonials
        </Link>
      </div>
    </section>
  </header>

export default Header
