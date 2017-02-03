import React from "react";

const InputTextLabel = ({ inputId, label, optional, helperText, helperId, onChange }) =>
  	<div className="measure">
      <label htmlFor={ inputId } className="f6 b db mb2">{ label } 
        { optional && <span className="normal black-60"> (optional)</span> }
      </label>
      <input id={ inputId } className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby={ helperId } onChange={ () => onChange}/>
      { helperText && <small id={ helperId } className="f6 black-60 db mb2">{ helperText }</small> }
    </div>

// Specifies the default values for props:
InputTextLabel.defaultProps = {
  label: "Name",
  optional: true,
  inputId: "name",
  helperText: "Helper text for the form control.",
  helperId: "name-desc"
};

InputTextLabel.propTypes = {
  label: React.PropTypes.string,
  optional: React.PropTypes.bool,
  inputId: React.PropTypes.string,
  helperText: React.PropTypes.string,
  helperId: React.PropTypes.string
}

export default InputTextLabel
