import React from "react";

const StartupHero = ({ icon, links, headline, subheadline, cta1, cta2 }) =>
	<header className="sans-serif">
    <div className="cover bg-left bg-center-l" style={{ backgroundImage : "url(http://mrmrs.github.io/photos/u/011.jpg)"}}>
      <div className="bg-black-80 pb5 pb6-m pb7-l">
        <nav className="dt w-100 mw8 center"> 
          <div className="dtc w2 v-mid pa3">
            <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
              <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32" style={{ fill: "currentcolor" }}><title>{ icon.title }</title><path d={ icon.d }></path></svg>
            </a>
          </div>
          <div className="dtc v-mid tr pa3">
            { links.map((item, index) => (
                 <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href={ item.href } key={ index }>{ item.text }</a>
                )
              )
            }
          </div>
        </nav> 
        <div className="tc-l mt4 mt5-m mt6-l ph3">
          <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">{ headline }</h1>
          <h2 className="fw1 f3 white-80 mt3 mb4">{ subheadline }</h2>
          <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href={ cta1.href }>{ cta1.text }</a>
          <span className="dib v-mid ph3 white-70 mb3">or</span>
          <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href={ cta2.href }>{ cta2.text }</a>
        </div>
      </div>
    </div> 
  </header>

// Specifies the default values for props:
StartupHero.defaultProps = {
  icon: {
    d: "M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12",
    title: "skull icon"
  },
  links: [
    {
      href: "/",
      text: "How it Works" 
    },
    {
      href: "/",
      text: "Pricing" 
    },
    {
      href: "/",
      text: "About" 
    },
    {
      href: "/",
      text: "Careers" 
    },
    {
      href: "/",
      text: "Sign Up" 
    }
  ],
  headline: "This is your super impressive headline",
  subheadline: "Now a subheadline where explain your wonderful new startup even more",
  cta1: {
    href: "/",
    text: "Call to Action"
  },
  cta2: {
    href: "",
    text: "Secondary call to action"
  }
};

StartupHero.propTypes = {
  icon: React.PropTypes.object,
  links: React.PropTypes.array,
  headline: React.PropTypes.string,
  subheadline: React.PropTypes.string,
  cta1: React.PropTypes.object,
  cta2: React.PropTypes.object
}

export default StartupHero


