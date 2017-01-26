import React from "react";

const UnderlineOnHover = ({ text, color, href }) =>
	<a className={"f4 fw6 db no-underline underline-hover " + (color ? color : "mid-gray")} href={ href }>
		{ text 
        	? text
        	: 'underline-hover on hover' 
      	}
	</a>

export default UnderlineOnHover
