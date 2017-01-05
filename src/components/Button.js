import React from 'react';
// TODO: Determine how to handle user's ability to select custom colors
let padding = {
	undefined: "pv3 ph4 f5 bg-dark-green bg-animate hover-bg-green white",
	long: "pv3 ph6 f5 bg-dark-green bg-animate hover-bg-green white",
	disabled: "pv3 ph4 f5 bg-light-gray black-40",
	"long-disabled": "pv3 ph6 f5 bg-light-gray black-40",
	cancel: "pv3 ph4 f5 bg-dark-red bg-animate hover-bg-red white",
	"long-cancel": "pv3 ph6 f5 bg-dark-red bg-animate hover-bg-red white"
};

const Button = ({text, type}) => (
    <a href="#" class={ padding[type] + " no-underline inline-flex items-center border-box br2"}>
    	{text}
  	</a>
)

export default Button;