import React from "react";

const ListOverflow = ({ links }) =>
  <nav className="ph3 ph5-ns pv4">
    <div className="nowrap overflow-x-auto">
      { links.map((item, index) => <a className="link dim gray f5 f4-ns dib mr3" href={ item.href } title={ item.title } key={ index }>{ item.text }</a>)}
    </div>
  </nav>

// Specifies the default values for props:
ListOverflow.defaultProps = {
  links: [
    {
      text: "Link 1",
      title: "Link 1",
      href: "#"
    },
    {
      text: "Link 2",
      title: "Link 2",
      href: "#"
    },
    {
      text: "Link 3",
      title: "Link 3",
      href: "#"
    },
    {
      text: "Link 4",
      title: "Link 4",
      href: "#"
    },
    {
      text: "Link 5",
      title: "Link 5",
      href: "#"
    },
    {
      text: "Link 6",
      title: "Link 6",
      href: "#"
    },
    {
      text: "Link 7",
      title: "Link 7",
      href: "#"
    },
    {
      text: "Link 8",
      title: "Link 8",
      href: "#"
    },
    {
      text: "Link 9",
      title: "Link 9",
      href: "#"
    },
    {
      text: "Link 10",
      title: "Link 10",
      href: "#"
    },
  ]
};

ListOverflow.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default ListOverflow