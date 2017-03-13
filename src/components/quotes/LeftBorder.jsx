import React from 'react';

const LeftBorder = ({ quote, citation }) => (
    <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
        <p className="f5 f4-m f3-l lh-copy measure mt0">
            { quote }
        </p>
        <cite className="f6 ttu tracked fs-normal">―{ citation }</cite>
    </blockquote>
)

LeftBorder.defaultProps = {
    quote: "Discipline in typography is a prime virtue. Individuality must be secured by means that are rational. Distinction needs to be won by simplicity and restraint. It is equally true that these qualities need to be infused wiht a certain spirit and vitality, or they degenerate into dullness and mediocrity.",
    citation: "Stanley Morison"
};

LeftBorder.propTypes = {
    quote: React.PropTypes.string,
    citation: React.PropTypes.string
};

export default LeftBorder;
