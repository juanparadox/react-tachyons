import React from "react";

const FixedSemiTransparent = ({ list }) =>
  	<header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        { list.map((item, index) => <a className="link dim white dib mr3" href={ item.href } title={ item.title } key={ index }>{ item.text }</a>)}
      </nav>
    </header>

// Specifies the default values for props:
FixedSemiTransparent.defaultProps = {
  list: [
    {
      text: "Home",
      title: "Home",
      href: "#"
    },
    {
      text: "About",
      title: "About",
      href: "#"
    },
    {
      text: "Store",
      title: "Store",
      href: "#"
    },
    {
      text: "Contact",
      title: "Contact",
      href: "#"
    }
  ]
};

FixedSemiTransparent.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default FixedSemiTransparent