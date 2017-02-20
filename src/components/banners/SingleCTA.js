import React from 'react';

const SingleCTA = ({ title, supporting }) => (
    <section className="ph3 ph5-ns pv5">
      <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
        <div className="dt-ns dt--fixed-ns w-100">
          <div className="pa3 pa4-ns dtc-ns v-mid">
            <div>
              <h2 className="fw4 blue mt0 mb3">{ title }</h2>
              <p className="black-70 measure lh-copy mv0">
                { supporting }
              </p>
            </div>
          </div>
          <div className="pa3 pa4-ns dtc-ns v-mid">
            <a href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Sign up for free</a>
          </div>
        </div>
      </article>
    </section>
);

SingleCTA.defaultProps = {
    title: "This is a promo title.",
    supporting: "This is suporting copy for the wonderful promo catchphrase that is going to be used.",
    text: "Sign up for free",
    href: "#",
    bgColor: "bg-lightest-blue",
    fontColor: "navy"
};

SingleCTA.propTypes = {
  title: React.PropTypes.string,
  supporting: React.PropTypes.string,
  text: React.PropTypes.string,
  href: React.PropTypes.string,
  bgColor: React.PropTypes.string,
  fontColor: React.PropTypes.string
}
export default SingleCTA;