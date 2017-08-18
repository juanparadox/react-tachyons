import React from "react";

const Album = ({ albumName, artistName, url, img, align }) => {
	const textAlignClass = {
		left: "tl",
		center: "tc",
		right: "tr"
	};
	return (
		<a className={`db center mw5 black link dim ${align && textAlignClass[align]}`} title={`Link to ${artistName}'s ${albumName}`} href={url}>
			<img className="db ba b--black-10" alt={`${artistName}'s ${albumName} Album Cover`} src={img} />
			<dl className="mt2 f6 lh-copy">
				<dt className="clip">Title</dt>
				<dd className="ml0 fw9">
					{albumName}
				</dd>
				<dt className="clip">Artist</dt>
				<dd className="ml0 gray">
					{artistName}
				</dd>
			</dl>
		</a>
	);
};

Album.defaultProps = {
	artistName: "Frank Ocean",
	albumName: "Blonde",
	url: "https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music",
	img: "https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg"
};

Album.propTypes = {
	artistName: React.PropTypes.string,
	albumName: React.PropTypes.string,
	url: React.PropTypes.string,
	img: React.PropTypes.string
};

export default Album;
