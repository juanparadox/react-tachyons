import React from 'react';

const Inline = ({ list }) => (
    <div className="pa3 pa5-ns">{
        list.map( ({ term, description }, i) =>
            <dl className="f6 lh-title mv2" key={i}>
                <dt className="dib b">
                    { `${term}:` }
                </dt>
                <dd className="dib ml0 gray ml1">
                    { description }
                </dd>
            </dl>
        )
    }</div>
)

Inline.defaultProps = {
    list: [
        {
            term: 'W',
            description: 'Wins'
        },
        {
            term: 'L',
            description: 'Losses'
        },
        {
            term: 'PCT',
            description: 'Winning Percentages'
        },
        {
            term: 'GB',
            description: 'Games Back'
        },
        {
            term: 'Home',
            description: 'Home Record'
        },
        {
            term: 'Road',
            description: 'Road Record'
        },
        {
            term: 'Div',
            description: 'Division Record'
        }
    ]
};

Inline.propTypes = {
    list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                term: React.PropTypes.string,
                description: React.PropTypes.string
            })
        )
};

export default Inline;
