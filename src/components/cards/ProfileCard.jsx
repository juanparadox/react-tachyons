import React from "react";

const ProfileCard = ({ title, description, img }) =>
	<article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
		<div className="tc">
			<img src={img} className="br-100 h3 w3 dib" role="presentation" />
			<h1 className="f4">
				{title}
			</h1>
			<hr className="mw3 bb bw1 b--black-10" />
		</div>
		<p className="lh-copy measure center f6 black-70">
			{description}
		</p>
	</article>;

ProfileCard.defaultProps = {
	title: "Mimi W.",
	description: "Quite affectionate and outgoing.\nShe loves to get chin scratches and will \nroll around on the floor waiting for you give her more of them.",
	img: "http://placekitten.com/g/300/300"
};

ProfileCard.propTypes = {
	title: React.PropTypes.string,
	description: React.PropTypes.string,
	img: React.PropTypes.string
};

export default ProfileCard;
