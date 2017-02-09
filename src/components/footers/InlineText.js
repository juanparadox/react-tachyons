import React from "react";

const InlineText = ({ copyright, links }) =>
	<footer className="bg-near-black white-80 pv5 pv6-l ph4">
    <p className="f6"><span className="dib mr4 mr5-ns">{ copyright }</span>
      { links.map((item, index) => (
           <span key={ index }><a className={ "link white-80 " + item.hover } href={ item.href }>{ item.text }</a>{ index !== links.length - 1 && " / "}</span>
        ))
      }
    </p>
  </footer>

// Specifies the default values for props:
InlineText.defaultProps = {
  copyright: "©2048 Your Company LLC, Inc.",
  links: [
    {
      href: "/terms",
      hover: "hover-light-purple",
      text: "Terms"
    },
    {
      href: "/privacy",
      hover: "hover-gold",
      text: "Privacy"
    },
    {
      href: "#",
      hover: "hover-green",
      text: "hi@yourcompany.com"
    }
  ]
};

InlineText.propTypes = {
  copyright: React.PropTypes.string,
  links: React.PropTypes.array
}

export default InlineText


