import React from "react";

const ProfileCardTitleSubtitle = ({ title, subtitle, img }) =>
	<article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
		<div className="tc">
			<img src={img} className="br-100 h4 w4 dib ba b--black-05 pa2" role="presentation" />
			<h1 className="f3 mb2">
				{title}
			</h1>
			<h2 className="f5 fw4 gray mt0">
				{subtitle}
			</h2>
		</div>
	</article>;

ProfileCardTitleSubtitle.defaultProps = {
	title: "Mimi W.",
	subtitle: "CCO (Chief Cat Officer)",
	img: "http://placekitten.com/g/300/300"
};

ProfileCardTitleSubtitle.propTypes = {
	title: React.PropTypes.string,
	subtitle: React.PropTypes.string,
	img: React.PropTypes.string
};

export default ProfileCardTitleSubtitle;
