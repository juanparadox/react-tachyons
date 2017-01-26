import React from "react";

let values = {
	undefined:  'white',
	'thin-border': 'ba',
	'border': 'ba bw1',
	'thick-border': 'ba bw2',
}

const Basic = ({ text, type, color, href }) =>
	<a className={"f6 link dim ph3 pv2 mb2 dib " + values[type] + (color ? (' ' + color): " bg-black " )} href={ href }>
		{text ? text : 'Button Text'}
	</a>

export default Basic
