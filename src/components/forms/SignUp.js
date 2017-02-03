import React from "react";

const SignUp = ({ legend, emailName, emailId, emailLabel, emailOnChange, passwordName, passwordLabel, passwordId, passwordOnChange }) =>
  <form action="sign-up_submit" method="get" acceptCharset="utf-8">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 clip">{ legend }</legend>
      <div className="mt3">
        <label htmlFor={ emailName } className="db fw4 lh-copy f6">{ emailLabel }</label>
        <input id={ emailId } name={ emailName } className="pa2 input-reset ba bg-transparent w-100 measure" type="email" onChange={ () => emailOnChange}/>
      </div>
      <div className="mt3">
        <label htmlFor={ passwordName } className="db fw4 lh-copy f6">{ passwordLabel }</label>
        <input id={ passwordId } name={ passwordName } className="b pa2 input-reset ba bg-transparent" type="password" onChange={ () => passwordOnChange}/>
      </div>
    </fieldset>
    <div className="mt3">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/>
    </div>
  </form>

// Specifies the default values for props:
SignUp.defaultProps = {
  legend: "Sign Up",
  emailId: "email-address",
  emailName: "email-address",
  emailLabel: "Email address",
  passwordId: "password",
  passwordName: "password",
  passwordLabel: "Password"
};

SignUp.propTypes = {
  legend: React.PropTypes.string,
  emailId: React.PropTypes.string,
  emailName: React.PropTypes.string,
  emailLabel: React.PropTypes.string,
  passwordId: React.PropTypes.string,
  passwordName: React.PropTypes.string,
  passwordLabel: React.PropTypes.string
}

export default SignUp