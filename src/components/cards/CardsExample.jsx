// React
import React from "react";

// Cards
import AlbumCentered from "./AlbumCentered";

export default () =>
	<article id="cards" className="center pt4">
		<h2 className="f2 lh-title">Cards</h2>
		<section id="aspect-ratio">
			<h3 className="f3 lh-copy">AlbumCentered</h3>
			<AlbumCentered />
		</section>
	</article>;
