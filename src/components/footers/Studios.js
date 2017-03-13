import React from "react";

const Social = ({ locations, icons, email, copyright }) =>
	<footer className="pa4 pa5-l black-70 bt b--black-10">
    <div className="mb4-l cf">
      <h1 className="fl w-100 pv0 f6 fw6 ttu tracked mb4">Studios</h1>
      { locations.map((item, index) => (
          <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns" key={ index }>
            <h4 className="f5 f4-l fw6">{ item.city }</h4>
            <span className="f7 f6-l db black-70">{ item.address1 }</span>
            <span className="f7 f6-l black-70">{ item.address2 }</span>
            <a className="f6 db fw6 pv3 black-70 link dim" title={ item.title } href="tel:+12075555555">
              { item.phone }
            </a>
          </article>
        )
      )}
    </div>
    <section className="cf mb5">
      <div className="mb4 mb0-ns w-100 w-50-l fr">
        <a className="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l" href="mailto:hello@impossible.com">
          { email }
        </a>
      </div>
      <div className="mb4 mb0-ns fl w-100 w-50-l">
        <p className="f4 fw6 mb2 f6 mt0">
          Sign up for our newsletter.
        </p>
        <input placeholder="Email Address" className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"/>
        <input type="submit" className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"/>
      </div>
    </section>

    <div className="dt dt--fixed w-100">
      <div className="dn dtc-ns v-mid">
        <p className="f7 black-70 dib pr3 mb3">
          Copyright © { copyright }
        </p>
      </div>
      <div className="db dtc-ns black-70 tc tr-ns v-mid">
      { icons.map((item, index) => 
        <a className="link dim dib mr3 black-70" href={ item.href } title={ item.title } key={ index }>
          <svg className="db w2 h2" data-icon={ item.dataIcon } viewBox="0 0 32 32" style={{ fill: "currentColor" }}>
            <title>{ item.title }</title>
            <path d={ item.d }></path>
          </svg>
        </a>
        )
      }
      </div>
    </div>
    <div className="db dn-ns">
      <p className="f7 black-70 mt4 tc">
        Copyright © Your Company 2038
      </p>
    </div>
  </footer>

// Specifies the default values for props:
Social.defaultProps = {
  locations: [
    {
      city: "SF",
      address1: "837 Larkin St",
      address2: "San Francisco, CA 94109",
      title: "Call SF",
      phone: "+1 207-555-5555"
    },
    {
      city: "LA",
      address1: "1111 Manor Way",
      address2: "Los Angeles, CA 90048",
      title: "Call the LA office.",
      phone: "+1 323-555-5555"
    },
    {
      city: "London",
      address1: "11 Downey St.",
      address2: "London, UK",
      title: "Call the London office",
      phone: "+44 0 5555-5555"
    },
    {
      city: "Tokyo",
      address1: "1982 Flangan Rd.",
      address2: "Shinjuku, Tokyo",
      title: "Call Tokyo Office",
      phone: "+99 5555-5555"
    },
  ],
  icons: [
  	{
  		href: "#",
      dataIcon: "facebook",
      title: "Impossible Labs on Facebook",
      d: "M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
  	},
    {
      href: "#",
      dataIcon: "twitter",
      title: "twitter icon",
      d: "M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
    },
    {
      href: "#",
      dataIcon: "github",
      title: "github icon",
      d: "M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"
    },
    {
      href: "#",
      dataIcon: "dribble",
      title: "dribble icon",
      d: "M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M5 11.5 A12 12 0 0 1 11 5 A46 46 0 0 1 13.5 9.25 A46 46 0 0 1 5 11.5 M15 4 A12 12 0 0 1 21.5 5.25 A46 46 0 0 1 17 7.75 A50 50 0 0 0 15 4 M4 16 A50 50 0 0 0 15 13 A46 46 0 0 1 16 15.5 A26 26 0 0 0 6 22.5 A12 12 0 0 1 4 16 M18.5 11.5 A50 50 0 0 0 25 8 A12 12 0 0 1 28 13.75 A26 26 0 0 0 19.75 14.5 A50 50 0 0 0 18.5 11.5 M17 19.5 A46 46 0 0 1 18 28 A12 12 0 0 1 8.75 25.5 A22 22 0 0 1 17 19.5 M20.75 18.25 A22 22 0 0 1 28 17.75 A12 12 0 0 1 22 26.5 A50 50 0 0 0 20.75 18.25"
    },
  ],
  email: "hello@yourcompany.com",
  copyright: "Your Company 2048"
};

Social.propTypes = {
  icons: React.PropTypes.array,
  locations: React.PropTypes.array,
  email: React.PropTypes.string,
  copyright: React.PropTypes.string
}

export default Social


