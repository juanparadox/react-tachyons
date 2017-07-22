import React from "react"

const Header = () =>
  <header className="w-100 pt3 ph5 bg-white">
    <div className="db dt-ns mw9 center w-100">
      <div className="db dtc-ns v-mid tl w-50">
        <a href="/" className="dib f5 f4-ns fw6 mt0 mb1 link black-70" title="Home">
          react-tachyons
          <div className="dib">
            <small className="nowrap f6 mt2 mt3-ns pr2 black-70 fw2">v0.1.0</small>
          </div>
        </a>
      </div>
      <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
        <a title="Documentation" href="/docs/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
          Docs
        </a>
        <a title="Components" href="/rt/components" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
          Components
        </a>
        <a title="Gallery of sites built with Tachyons" href="/gallery/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
          Gallery
        </a>
        <a title="Resources" href="/resources/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
          Resources
        </a>
        <a title="Tachyons on GitHub" href="http://github.com/tachyons-css/tachyons/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dn dib-l">
          GitHub
        </a>
      </nav>
    </div>
  </header>

export default Header
