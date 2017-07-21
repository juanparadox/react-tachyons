import React from "react";

const MinimalSignUp = ({ list, icon }) =>
  <nav className="flex justify-between bb b--white-10 bg-near-black">
    <a className="link white-70 hover-white no-underline flex items-center pa3" href={ icon.href }>
      <svg
        className="dib h1 w1"
        data-icon={ icon.dataIcon }
        viewBox="0 0 32 32"
        style={{fill:'currentcolor'}}>
        <title>{ icon.title }</title>
        <path d={ icon.d }>
        </path>
      </svg>
    </a>
    <div className="flex-grow pa3 flex items-center">
      { list.map((item, index) =>
        <a className={index !== list.length - 1
          ? "f6 link dib white dim mr3 mr4-ns"
          : "f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"}
          href={ item.href }
          key={ index }>
          { item.text }
        </a>
      )}
    </div>
  </nav>

// Specifies the default values for props:
MinimalSignUp.defaultProps = {
  icon: {
    href: "",
    dataIcon: "grid",
    title: "Super Normal Icon Mark",
    d: "M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z"
  },
  list: [
    {
      text: "About",
      href: "#0"
    },
    {
      text: "Sign In",
      href: "#0"
    },
    {
      text: "Sign Up",
      href: "#0"
    }
  ]
};

MinimalSignUp.propTypes = {
  icon: React.PropTypes.object,
  list: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default MinimalSignUp