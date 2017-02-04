import React from 'react';

const TitleText = ({ list }) => (
    <ul className="list pl0">
        { list.map(
            ({title, text}, i) =>
                <li className="pa3 pa4-ns bb b--black-10" key={i}>
                    <b className="db f3 mb1">{ title }</b>
                    <span className="f5 db lh-copy measure">{ text }</span>
                </li>
            )
        }
    </ul>
);

TitleText.defaultProps = {
    list: [
        {
            title: 'alignment',
            text: "The positioning of text within the page margins. Alignment can be flush left, flush right, justified, or centered. Flush left and flush right are sometimes referred to as left justified and right justified."
        },
        {
            title: 'ascender',
            text: "The part of lowercase letters (such as k, b, and d) that ascends above the x-height of the other lowercase letters in a face."
        },
        {
            title: 'baseline',
            text: "The imaginary line on which the majority of the characters in a typeface rest."
        },
        {
            title: 'body text',
            text: "The paragraphs in a document that make up the bulk of its content. The body text should be set in an appropriate and easy-to-read face, typically at 10- or 12-point size."
        }
    ]
};

TitleText.propTypes = {
    list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                title: React.PropTypes.string,
                text: React.PropTypes.string
            })
        )
};

export default TitleText;
