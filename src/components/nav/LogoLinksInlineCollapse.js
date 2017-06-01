import React from "react";

const LogoLinksInlineCollapse = ({ list, title }) =>
  <nav className="db dt-l w-100 border-box pa3 ph5-l">
    <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href={ title.href } title={ title.title }>
      <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt={ title.alt }/>
    </a>
    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      { list.map((item, index) => <a className={`link dim dark-gray f6 f5-l dib ${index !== list.length - 1 && 'mr3 mr4-l'}`} href={ item.href } title={ item.title } key={ index }>{ item.text }</a>)}
    </div>
  </nav>

// Specifies the default values for props:
LogoLinksInlineCollapse.defaultProps = {
  title: {
    alt: "Site Name",
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
      text: "How it Works",
      title: "How it Works",
      href: "#"
    },
    {
      text: "Blog",
      title: "Blog",
      href: "#"
    },
    {
      text: "Press",
      title: "Press",
      href: "#"
    },
    {
      text: "Contact",
      title: "Contact",
      href: "#"
    }
  ]
};

LogoLinksInlineCollapse.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default LogoLinksInlineCollapse