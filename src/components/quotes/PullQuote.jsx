import React from 'react';

const PullQuote = ({ quote }) => (
    <blockquote className="athelas ph0 f4 f1-ns measure-narrow center">
        <p className="fw9 lh-copy lh-title-ns">
            { quote }
        </p>
    </blockquote>
)

PullQuote.defaultProps = {
    quote: "The punches of Claude Garamond, cut around 1530 in Paris, are simply unsurpassed in their clarity, readability and beauty."
};

PullQuote.propTypes = {
    quote: React.PropTypes.string
};

export default PullQuote;
