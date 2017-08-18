import React from 'react';

const CodeExample = () =>
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

export default CodeExample
