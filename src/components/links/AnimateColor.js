import React from "react";

const AnimateColor = ({ text, color, href }) =>
	<a className={"f4 fw6 db black link " + (color ? color : "hover-light-blue")} href={ href }>
		{ text 
        	? text
        	: 'light-blue on hover' 
      	}
	</a>

export default AnimateColor
