import React from "react";

const AnimateBackgroundColor = ({ text, color, href }) =>
	<a className={"f4 fw7 dib pa2 no-underline bg-animate bg-white black " + (color ? color : "hover-bg-light-blue")} href={ href }>
		{ text 
        	? text
        	: 'bg-light-blue on hover' 
      	}
	</a>

export default AnimateBackgroundColor
