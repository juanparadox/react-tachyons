import React from "react";

const TextAreaLabel = ({ textareaId, label, optional, helperText, helperId, textareaName, onChange }) =>
    <div className="measure">
      <label htmlFor={ textareaId } className="f6 b db mb2">{ label } 
        { optional && <span className="normal black-60"> (optional)</span> }
      </label>
      <textarea id={ textareaId } name={ textareaName } className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" type="text" aria-describedby={ helperId } onChange={ () => onChange}></textarea>
      { helperText && <small id={ helperId } className="f6 black-60" dangerouslySetInnerHTML={{ __html: helperText }}></small> }
    </div>

// Specifies the default values for props:
TextAreaLabel.defaultProps = {
  label: "Comments",
  optional: true,
  textareaId: "comment",
  textareaName: "comment",
  helperText: "Helper text for a form control. Can use this text to <a href='#' className='link underline black-80 hover-blue'>link to more info.</a>",
  helperId: "comment-desc"
};

TextAreaLabel.propTypes = {
  label: React.PropTypes.string,
  optional: React.PropTypes.bool,
  textareaId: React.PropTypes.string,
  textareaName: React.PropTypes.string,
  helperText: React.PropTypes.string,
  helperId: React.PropTypes.string
}

export default TextAreaLabel