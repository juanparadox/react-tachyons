import React from "react";

const TextCard = ({ title, text }) =>
	<article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
		<h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
			{title}
		</h1>
		<div className="pa3 bt b--black-10">
			<p className="f6 f5-ns lh-copy measure">
				{text}
			</p>
		</div>
	</article>;

TextCard.defaultProps = {
	title: "Title of card",
	text:
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
};

TextCard.propTypes = {
	title: React.PropTypes.string,
	text: React.PropTypes.string
};

export default TextCard;
