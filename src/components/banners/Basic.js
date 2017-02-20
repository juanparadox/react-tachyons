import React from 'react';

const Basic = ({ bgColor, fontColor, tagline, subline, small, leftButton, rightButton }) => (
    <article className={ "mw7 center ph3 ph5-ns tc br2 pv5 mb5 " + bgColor + " " + fontColor}>
      <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
        { tagline }
      </h1>
      <h2 className="fw2 f4 lh-copy mt0 mb3">
        { subline }
      </h2>
      <p className="fw1 f5 mt0 mb3">
        { small }
      </p>
      <div>
        <a className={ leftButton.bgColor + " f6 br-pill no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3" }
          href={ leftButton.href }>
          { leftButton.text }
        </a>
        <a className={ rightButton.bgColor + " f6 br-pill dark-green no-underline ba grow pv2 ph3 dib" }
          href={ rightButton.href }>
          { rightButton.text }
        </a>
      </div>
    </article>
);

Basic.defaultProps = {
    bgColor: "bg-washed-green",
    fontColor: "dark-green",
    tagline: "This is a tagline. For x.",
    subline: "This will change things. And we want you to be involved. This text needs to be longer for testing sake.",
    small: "Sign up for beta access or learn more about x.",
    leftButton: {
      bgColor: "bg-dark-green",
      text: "Sign Up",
      href: "#"
    },
    rightButton: {
      bgColor: "",
      text: "Learn More",
      href: "#"
    }
};

Basic.propTypes = {
  bgColor: React.PropTypes.string,
  fontColor: React.PropTypes.string,
  tagline: React.PropTypes.string,
  subline: React.PropTypes.string,
  small: React.PropTypes.string,
  leftButton: React.PropTypes.object,
  rightButton: React.PropTypes.object
};

export default Basic;