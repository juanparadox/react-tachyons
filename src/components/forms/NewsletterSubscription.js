import React from "react";

const NewsletterSubscription = ({ legend, label, inputPlaceholder, inputName, inputId, buttonValue }) =>
  <form className="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
    <fieldset className="cf bn ma0 pa0">
      <legend className="pa0 f5 f4-ns mb3 black-80">{ legend }</legend>
      <div className="cf">
        <label className="clip" htmlFor={ inputName }>{ label }</label>
        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder={ inputPlaceholder } type="text" name={ inputName } value="" id={ inputId }/>
        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe"/>
      </div>
    </fieldset>
  </form>

// Specifies the default values for props:
NewsletterSubscription.defaultProps = {
  legend: "Sign up for our newsletter",
  label: "Email Address",
  inputPlaceholder: "Your Email Address",
  inputName: "email-address",
  inputId: "email-address",
  buttonValue: "Subscribe"
};

NewsletterSubscription.propTypes = {
  legend: React.PropTypes.string,
  label: React.PropTypes.string,
  inputPlaceholder: React.PropTypes.string,
  inputName: React.PropTypes.string,
  inputId: React.PropTypes.string,
  buttonValue: React.PropTypes.string
}

export default NewsletterSubscription
