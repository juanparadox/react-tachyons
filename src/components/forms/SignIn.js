import React from "react";

const SignIn = ({ legend, emailName, emailId, emailLabel, emailOnChange, passwordName, passwordLabel, passwordId, passwordOnChange }) =>
  <form className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">{ legend }</legend>
      <div className="mt3">
        <label htmlFor={ emailName } className="db fw6 lh-copy f6">{ emailLabel }</label>
        <input id={ emailId } name={ emailName } className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" onChange={ () => emailOnChange}/>
      </div>
      <div className="mv3">
        <label htmlFor={ passwordName } className="db fw6 lh-copy f6">{ passwordLabel }</label>
        <input id={ passwordId } name={ passwordName } className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" onChange={ () => passwordOnChange}/>
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className="f6 link dim black db">Sign up</a>
      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
    </div>
  </form>

// Specifies the default values for props:
SignIn.defaultProps = {
  legend: "Sign In",
  emailId: "email-address",
  emailName: "email-address",
  emailLabel: "Email",
  passwordId: "password",
  passwordName: "password",
  passwordLabel: "Password"
};

SignIn.propTypes = {
  legend: React.PropTypes.string,
  emailId: React.PropTypes.string,
  emailName: React.PropTypes.string,
  emailLabel: React.PropTypes.string,
  passwordId: React.PropTypes.string,
  passwordName: React.PropTypes.string,
  passwordLabel: React.PropTypes.string
}

export default SignIn