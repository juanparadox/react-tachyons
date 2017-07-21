import React from "react";

const TitleLinkList = ({ list }) =>
  <nav className="pa3 pa4-ns">
    { list.map((item, index) => <a className={`link dim f6 f5-ns dib mr3 ${index !== 0 ? 'gray' : 'black b'}`} href={ item.href } title={ item.title } key={ index }>{ item.text }</a>)}
  </nav>

// Specifies the default values for props:
TitleLinkList.defaultProps = {
  list: [
    {
      text: "Site Name",
      title: "Site Name",
      href: "#"
    },
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

TitleLinkList.propTypes = {
  img: React.PropTypes.object,
  title: React.PropTypes.object,
  list: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default TitleLinkList