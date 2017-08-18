import React from "react";

const Square = ({ img, rounded }) => {
	const radii = {
		small: "br1",
		medium: "br2",
		large: "br4"
	};
	return (
		<div className="pa4 tc">
			<img src={img} className={`h3 w3 dib ${rounded && radii[rounded]}`} alt="avatar" />
		</div>
	);
};

Square.defaultProps = {
	img: "http://tachyons.io/img/logo.jpg"
};

Square.propTypes = {
	img: React.PropTypes.string
};

export default Square;
