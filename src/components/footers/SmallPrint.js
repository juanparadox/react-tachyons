import React from "react";

const SmallPrint = ({ companyName, links }) =>
  <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
  <small className="f6 db tc">© 2016 <b className="ttu">{ companyName }</b>., All Rights Reserved</small>
    <div className="tc mt3">
      { links.map((item, index) => (
          <a className="f6 dib ph2 link mid-gray dim" title={ item.title } href={ item.href } key={ index }>{ item.title }</a>
        ))
      }
    </div>
  </footer>

// Specifies the default values for props:
SmallPrint.defaultProps = {
  companyName: "SOME COMPANY Inc",
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

SmallPrint.propTypes = {
  companyName: React.PropTypes.string,
  links: React.PropTypes.array
}

export default SmallPrint
