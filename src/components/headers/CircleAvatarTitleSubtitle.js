import React from "react";

const CircleAvatarTitleSubtitle = ({ imgSrc, h1Text, h2Text }) =>
	<header className="tc pv4 pv5-ns">
    <img src={ imgSrc } className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar"/>
    <h1 className="f5 f4-ns fw6 mid-gray">{ h1Text }</h1>
    <h2 className="f6 gray fw2 ttu tracked">{ h2Text }</h2>
  </header>

// Specifies the default values for props:
CircleAvatarTitleSubtitle.defaultProps = {
  imgSrc: "http://tachyons.io/img/logo.jpg",
  h1Text: "Jasper Whitehouse",
  h2Text: "Los Angeles"
};

CircleAvatarTitleSubtitle.propTypes = {
  imgSrc: React.PropTypes.string,
  h1Text: React.PropTypes.string,
  h2Text: React.PropTypes.string
}

export default CircleAvatarTitleSubtitle


