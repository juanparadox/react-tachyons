import React from "react";

const FourOhFour = ({ links }) =>
  <section className="vh-100 bg-washed-blue baskerville">
    <header className="tc ph5 lh-copy">
        <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
        <h2 className="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
    </header>
    <p className="fw1 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
    <ul className="list tc pl0 w-100 mt5">
      { links.map((item, index) => (
           <li className="dib" key={ index }>
            <a className={ "f5 f4-ns link black db pv2 ph3 " + item.hover } href={ item.href }>{ item.text }</a>
          </li>
        ))
      }
    </ul>
  </section>

// Specifies the default values for props:
FourOhFour.defaultProps = {
  links: [
    {
      href: "/",
      hover: "hover-light-purple",
      text: "Home"
    },
    {
      href: "/about",
      hover: "hover-light-purple",
      text: "About"
    },
    {
      href: "/careers",
      hover: "hover-light-purple",
      text: "Careers"
    },
    {
      href: "/contact",
      hover: "hover-light-purple",
      text: "Contact"
    },
    {
      href: "/signup",
      hover: "hover-light-purple",
      text: "Sign Up"
    },
    {
      href: "/help",
      hover: "hover-light-purple",
      text: "Help"
    }
  ]
};

FourOhFour.propTypes = {
  links: React.PropTypes.array
}

export default FourOhFour