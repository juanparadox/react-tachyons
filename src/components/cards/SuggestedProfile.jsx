import React from "react";

const SuggestedProfile = ({ title, subtitle, buttonText, img }) =>
	<section className="tc pa3 pa5-ns">
		<article className="hide-child relative ba b--black-20 mw5 center">
			<img src={img} className="db" role="presentation" />
			<div className="pa2 bt b--black-20">
				<a className="f6 db link dark-blue hover-blue" href="#" />
				<p className="f6 gray mv1">
					{subtitle}
				</p>
				<a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="#">
					{buttonText}
				</a>
			</div>
			<a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">
				×
			</a>
		</article>
	</section>;

SuggestedProfile.defaultProps = {
	title: "Jesse Grant",
	subtitle: "5 mutual friends",
	buttonText: "Add Friend",
	img: "http://placekitten.com/g/300/300"
};

SuggestedProfile.propTypes = {
	title: React.PropTypes.string,
	subtitle: React.PropTypes.string,
	buttonText: React.PropTypes.string,
	img: React.PropTypes.string
};

export default SuggestedProfile;
