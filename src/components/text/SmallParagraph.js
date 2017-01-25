import React from "react";

const SmallParagraph = ({ text }) =>
   	<p className="f6 lh-copy measure">
    	{ text 
        	? text
        	: 'Typography has one plain duty before it and that is to convey ' + 
        	'information in writing. No argument or consideration can absolve ' +
        	'typography from this duty. A printed work which cannot be read ' +
        	'becomes a product without purpose.' 
      	}
   	</p>

export default SmallParagraph