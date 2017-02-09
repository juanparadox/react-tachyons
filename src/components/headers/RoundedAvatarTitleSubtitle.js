import React from "react";

const RoundedAvatarTitleSubtitle = ({ imgSrc, h1Text, h2Text }) =>
  <header className="tc pv4 pv5-ns">
    <img src={ imgSrc } className="br3 ba b--black-10 h3 w3" alt="avatar"/>
    <h1 className="f5 f4-ns fw6 black-70">{ h1Text }</h1>
    <h2 className="f6 black-70 fw2 ttu tracked">{ h2Text }</h2>
  </header>

// Specifies the default values for props:
RoundedAvatarTitleSubtitle.defaultProps = {
  imgSrc: "http://tachyons.io/img/logo.jpg",
  h1Text: "Jasper Whitehouse",
  h2Text: "Los Angeles"
};

RoundedAvatarTitleSubtitle.propTypes = {
  imgSrc: React.PropTypes.string,
  h1Text: React.PropTypes.string,
  h2Text: React.PropTypes.string
}

export default RoundedAvatarTitleSubtitle


