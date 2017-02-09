import React from "react";

const SimpleLargeType = ({ email, copyright, links }) =>
  <footer className="ph3 ph4-ns pv6 bt b--black-10 black-70">
    <a href={ "mailto:" + email } className="link b f3 f2-ns dim black-70 lh-solid">{ email }</a>
    <p className="f6 db b ttu lh-solid">{ copyright }</p>
    <div className="mt5">
      { links.map((item, index) => (
          <a className="f6 dib pr2 mid-gray dim" title={ item.title } href={ item.href }>{ item.title }</a>
        ))
      }
    </div>
  </footer>

// Specifies the default values for props:
SimpleLargeType.defaultProps = {
  copyright: "© 2016 COMPANY Inc.",
  email: "hello@email.com",
  links: [
    {
      href: "/language/",
      title: "Language"
    },
    {
      href: "/terms/",
      title: "Terms of Use"
    },
    {
      href: "/privacy/",
      title: "Privacy"
    }
  ]
};

SimpleLargeType.propTypes = {
  copyright: React.PropTypes.string,
  email: React.PropTypes.string,
  links: React.PropTypes.array
}

export default SimpleLargeType
