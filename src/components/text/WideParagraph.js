import React from "react";

const WideParagraph = ({ text }) =>
   	<p className="f5 lh-copy measure-wide">
    	{ text 
        	? text
        	: 'Typography has one plain duty before it and that is to convey ' + 
        	'information in writing. No argument or consideration can absolve ' +
        	'typography from this duty. A printed work which cannot be read ' +
        	'becomes a product without purpose.' 
      	}
   	</p>

export default WideParagraph