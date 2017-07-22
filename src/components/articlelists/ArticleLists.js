// React
import React from "react";

// React Router
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Article Lists
import TitlePreviewAuthorMediaFlipped from './TitlePreviewAuthorMediaFlipped';
import TitlePreviewAuthorMedia from './TitlePreviewAuthorMedia';

const title = {
  "title-preview-author-media" : "TitlePreviewAuthorMedia",
  "title-preview-author-media-flipped" : "TitlePreviewAuthorMediaFlipped"
}

const thisTitle = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

export default () => (
    <article id="lists" className="center pt4">
        <h2 className="f2 lh-title ph5">Article Lists</h2>
        <h3 className="f3 lh-copy ph5">{title[thisTitle]}</h3>
        <Router>
        	<div>
            <Route path="/rt/components/article-lists/title-preview-author-media" component={TitlePreviewAuthorMedia}/>
            <Route path="/rt/components/article-lists/title-preview-author-media-flipped" component={TitlePreviewAuthorMediaFlipped}/>
          </div>
        </Router>
        <section className="pa5 bt b--black-10 cf">
          <div className="fl w-50 pr0 pr2-ns">
            <h2 className="f5">JSX</h2>
            <pre className="pa3 ba br2 b--black-10 h5 bg-white-20">
              {`Component with props example would go here`}
            </pre>
          </div>
          <div className="fl w-50 pl0 pl2-ns">
            <h2 className="f5">PropTypes</h2>
            <pre className="pa3 ba br2 b--black-10 h5 bg-white-20">
              {`articles: React.PropTypes.arrayOf(
                    React.PropTypes.shape({
                      title: React.PropTypes.string,
                      content: React.PropTypes.string,
                      img : React.PropTypes.shape({
                        src: React.PropTypes.string,
                        alt: React.PropTypes.string
                      }),
                      by: React.PropTypes.string
                    })
                  )`}
            </pre>
          </div>
        </section>
    </article>
);
