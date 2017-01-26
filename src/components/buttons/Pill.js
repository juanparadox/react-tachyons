import React from "react";

let values = {
	undefined:  'white',
	'thin-border': 'ba black',
	'border': 'ba bw1 black',
	'thick-border': 'ba bw2 black',
}

const Basic = ({ text, type, color, href }) =>
	<a className={"dim f6 no-underline br-pill ph3 pv2 mb2 dib " + values[type] + (color ? (' ' + color): " bg-black " )} href={ href }>
		{text ? text : 'Button Text'}
	</a>

export default Basic
