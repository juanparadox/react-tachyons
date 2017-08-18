import React from "react";

const BasicTextCard = ({ title, text, bgColor }) =>
	<article className="center mw5 mw6-ns hidden ba mv4">
		<h1 className={`f4 white mv0 pv2 ph3 bg-${bgColor}`}>
			{title}
		</h1>
		<div className="pa3 bt">
			<p className="f6 f5-ns lh-copy measure mv0">
				{text}
			</p>
		</div>
	</article>;

BasicTextCard.defaultProps = {
	title: "Title of card",
	text:
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
	bgColor: "near-black"
};

BasicTextCard.propTypes = {
	title: React.PropTypes.string,
	text: React.PropTypes.string,
	bgColor: React.PropTypes.string
};

export default BasicTextCard;
