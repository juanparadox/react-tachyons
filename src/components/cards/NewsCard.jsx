import React from "react";

const NewsCard = ({ publisher, img, headline, url, source, timestamp }) =>
	<article className="bg-white center mw5 ba b--black-10 mv4">
		<div className="pv2 ph3">
			<h1 className="f6 ttu tracked">
				{publisher}
			</h1>
		</div>
		<img src={img} className="w-100 db" role="presentation" />
		<div className="pa3">
			<a href={url} className="link dim lh-title">
				{headline}
			</a>
			<small className="gray db pv2">
				{`${source} - `}
				<time>
					{timestamp}
				</time>
			</small>
		</div>
	</article>;

NewsCard.defaultProps = {
	publisher: "Daily News Co.",
	img: "http://tachyons.io/img/cat-720.jpg",
	headline: "15 things every cat owner should know",
	url: "#",
	source: "AMP",
	timestamp: "6 hours ago"
};

NewsCard.propTypes = {
	publisher: React.PropTypes.string,
	img: React.PropTypes.string,
	headline: React.PropTypes.string,
	url: React.PropTypes.string,
	source: React.PropTypes.string,
	timestamp: React.PropTypes.string
};

export default NewsCard;
