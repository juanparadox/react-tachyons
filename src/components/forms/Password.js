import React from "react";

const Password = ({ inputId, label, helperText, helperId, onChange }) =>
    <div className="measure-narrow">
      <label htmlFor={ inputId } className="f6 b db mb2">{ label }</label>
      <input id={ inputId } className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" aria-describedby={ helperId } onChange={ () => onChange}/>
      { helperText && <small id={ helperId } className="f6 lh-copy black-60 db mb2">{ helperText }</small> }
    </div>

// Specifies the default values for props:
Password.defaultProps = {
  label: "Password",
  inputId: "password",
  helperText: "Must be 9 characters long and contain both a number and an uppercase character.",
  helperId: "name-desc"
};

Password.propTypes = {
  label: React.PropTypes.string,
  inputId: React.PropTypes.string,
  helperText: React.PropTypes.string,
  helperId: React.PropTypes.string
}

export default Password
