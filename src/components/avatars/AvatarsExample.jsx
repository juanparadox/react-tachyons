// React
import React from "react";

// Avatars
import Circle from "./Circle";
import Square from "./Square";

export default () =>
	<article id="avatars" className="center pt4">
		<h2 className="f2 lh-title">Avatars</h2>
		<section id="circle">
			<h3 className="f3 lh-copy">Circle</h3>
			<code className="db mb3">Props: img, border, doubleRing</code>
			<Circle />
			<code>default</code>
			<Circle border />
			<code>border</code>
			<Circle doubleRing />
			<code>doubleRing</code>
		</section>
		<section id="square">
			<h3 className="f3 lh-copy">Square</h3>
			<code className="db mb3">Props: img, rounded</code>
			<Square />
			<code>default</code>
			<Square rounded="small" />
			<code>rounded="small"</code>
			<Square rounded="medium" />
			<code>rounded="medium"</code>
			<Square rounded="large" />
			<code>rounded="large"</code>
		</section>
	</article>;
