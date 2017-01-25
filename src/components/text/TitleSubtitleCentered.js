import React from "react";

const TitleSubtitleCentered = ({ title, subtitle }) => 
	<header className="tc ph4">
	  	<h1 className="f3 f2-m f1-l fw2 black-90 mv3">
	  		{ title ? title : 'This is the title'}
	  	</h1>
	  	<h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
	  		{ subtitle ? subtitle : 'This is the subtitle where additional information can go if you really need it.'}
	  	</h2>
	</header>

export default TitleSubtitleCentered