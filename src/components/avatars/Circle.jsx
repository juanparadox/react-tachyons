import React from "react";

const Circle = ({ img, border, doubleRing }) =>
	<div className="pa4 tc">
		<img src={img} className={`br-100 h3 w3 dib ${border && "ba"} ${doubleRing && "ba b--black-10 pa1"}`} alt="avatar" />
	</div>;

Circle.defaultProps = {
	img: "http://tachyons.io/img/logo.jpg"
};

Circle.propTypes = {
	img: React.PropTypes.string
};

export default Circle;
