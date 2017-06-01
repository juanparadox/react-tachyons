import React from "react";

const LogoLinksInline = ({ list, title, img }) =>
  <nav className="dt w-100 border-box pa3 ph5-ns">
    <a className="dtc v-mid mid-gray link dim w-25" href={ title.href } title={ title.title }>
      <img src={ img.src } className="dib w2 h2 br-100" alt={ img.alt }/>
    </a>
    <div className="dtc v-mid w-75 tr">
      { list.map((item, index) => <a className={`link dim dark-gray f6 f5-ns dib ${index !== list.length - 1 && 'mr3 mr4-ns'}`} href={ item.href } title={ item.title } key={ index }>{ item.text }</a>)}
    </div>
  </nav>

// Specifies the default values for props:
LogoLinksInline.defaultProps = {
  img: {
    src: "http://tachyons.io/img/logo.jpg",
    alt: "Site Name"
  },
  title: {
    title: "Site Name",
    href: "#"
  },
  list: [
    {
      text: "Services",
      title: "Services",
      href: "#"
    },
    {
      text: "Blog",
      title: "Blog",
      href: "#"
    },
    {
      text: "Contact",
      title: "Contact",
      href: "#"
    }
  ]
};

LogoLinksInline.propTypes = {
  img: React.PropTypes.object,
  title: React.PropTypes.object,
  list: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default LogoLinksInline