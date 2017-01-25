import React from "react";

const DimNoUnderline = ({ text, color, href }) =>
	<a className={"f4 fw6 db link dim " + (color ? color : "mid-gray")} href={ href }>
		{ text 
        	? text
        	: 'dim on hover' 
      	}
	</a>

export default DimNoUnderline
