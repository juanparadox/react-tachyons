import React from "react";

let values = {
	undefined:  'white',
	'thin-border': 'ba',
	'border': 'ba bw1',
	'thick-border': 'ba bw2',
}

const BasicRoundedExtraSmall = ({ text, type, color, href }) =>
	<a className={"f6 link dim br1 ph3 pv2 mb2 dib " + values[type] + (color ? (' ' + color): " bg-black " )} href={ href }>
		{text ? text : 'Button Text'}
	</a>

export default BasicRoundedExtraSmall
