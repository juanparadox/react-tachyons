import React from 'react';
import {Link} from 'react-router-dom'

const Links = () =>
  <div>
    <Link to="/components/article-lists" className="hover-blue link black-70 f3 lh-title fw6 db">Article Lists</Link>
    <Link to="/components/articles" className="hover-blue link black-70 f3 lh-title fw6 db">Articles</Link>
    <Link to="/components/banners" className="hover-blue link black-70 f3 lh-title fw6 db">Banners</Link>
    <Link to="/components/button" className="hover-blue link black-70 f3 lh-title fw6 db">Buttons</Link>
    <Link to="/components/definition-lists" className="hover-blue link black-70 f3 lh-title fw6 db">Definition Lists</Link>
    <Link to="/components/error-pages" className="hover-blue link black-70 f3 lh-title fw6 db">Error Pages</Link>
    <Link to="/components/footers" className="hover-blue link black-70 f3 lh-title fw6 db">Footers</Link>
    <Link to="/components/forms" className="hover-blue link black-70 f3 lh-title fw6 db">Forms</Link>
    <Link to="/components/headers" className="hover-blue link black-70 f3 lh-title fw6 db">Headers</Link>
    <Link to="/components/layout" className="hover-blue link black-70 f3 lh-title fw6 db">Layout</Link>
    <Link to="/components/links" className="hover-blue link black-70 f3 lh-title fw6 db">Links</Link>
    <Link to="/components/lists" className="hover-blue link black-70 f3 lh-title fw6 db">Lists</Link>
    <Link to="/components/nav" className="hover-blue link black-70 f3 lh-title fw6 db">Nav</Link>
    <Link to="/components/quotes" className="hover-blue link black-70 f3 lh-title fw6 db">Quotes</Link>
    <Link to="/components/tables" className="hover-blue link black-70 f3 lh-title fw6 db">Tables</Link>
    <Link to="/components/text" className="hover-blue link black-70 f3 lh-title fw6 db">Text</Link>
  </div>

export default Links
