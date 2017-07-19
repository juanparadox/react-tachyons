import React from "react";

const LogoTitleLinksCentered = ({ list, title, logo }) =>
  <header className="bg-white black-80 tc pv4 avenir">
    <a href="" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
      <svg className="white" data-icon={ logo.dataIcon } viewBox="0 0 32 32" style={{fill:'currentcolor'}}><title>{ logo.title }</title><path d={ logo.d }></path></svg>
    </a>
    <h1 className="mt2 mb0 baskerville i fw1 f1">Title</h1>
    <h2 className="mt2 mb0 f6 fw4 ttu tracked">Your amazing subtitle</h2>
    <nav className="bt bb tc mw7 center mt4">
      { list.map((item, index) => <a className={`f6 f5-l link bg-animate black-80 ${item.hover} dib pa3 ph4-l`} href={ item.href } title={ item.title } key={ index }>{ item.text }</a>)}
    </nav>
  </header>

// Specifies the default values for props:
LogoTitleLinksCentered.defaultProps = {
  logo: {
    href: "",
    dataIcon: "skull",
    title: "skull icon",
    d: "M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"
  },
  title: "Title",
  subtitle: "Your amazing subtitle",
  list: [
    {
      text: "Home",
      title: "Home",
      href: "/",
      hover: "hover-bg-lightest-blue"
    },
    {
      text: "Portfolio",
      title: "Portfolio",
      href: "/portfolio",
      hover: "hover-bg-light-green"
    },
    {
      text: "Shop",
      title: "Shop",
      href: "/shop",
      hover: "hover-bg-light-blue"
    },
    {
      text: "About",
      title: "About",
      href: "/about",
      hover: "hover-bg-light-pink"
    },
    {
      text: "Contact",
      title: "Contact",
      href: "/contact",
      hover: "hover-bg-light-yellow"
    }
  ]
};

LogoTitleLinksCentered.propTypes = {
  logo: React.PropTypes.object,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  list: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default LogoTitleLinksCentered