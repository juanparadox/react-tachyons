import React from "react";

let values = {
	undefined:  'white',
	'thin-border': 'ba',
	'border': 'ba bw1',
	'thick-border': 'ba bw2',
}

const BasicRounded = ({ text, type, color, href }) =>
	<a className={"f6 link dim br3 ph3 pv2 mb2 dib " + values[type] + (color ? (' ' + color): " bg-black " )} href={ href }>
		{text ? text : 'Button Text'}
	</a>

export default BasicRounded
