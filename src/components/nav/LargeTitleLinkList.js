import React from "react";

const LargeTitleLinkList = ({ list, title }) =>
  <nav className="pa3 pa4-ns">
    <a className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href={ title.href } title={ title.title }>{ title.text }</a>
    <div className="tc pb3">
      { list.map((item, index) => <a className="link dim gray f6 f5-ns dib mr3" href={ item.href } title={ item.title } key={ index }>{ item.text }</a>)}
    </div>
  </nav>

// Specifies the default values for props:
LargeTitleLinkList.defaultProps = {
  title: {
    text: "Site Name",
    title: "Site Name",
    href: "#"
  },
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

LargeTitleLinkList.propTypes = {
  title: React.PropTypes.object,
  list: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default LargeTitleLinkList