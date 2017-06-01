import React from 'react';

const Simple = ({ list }) => (
    <dl className="lh-title pa4 mt0">{
        list.map( ({ term, description }, i) =>
            <div key={i}>
                <dt className={`f6 b ${ (i > 0) && 'mt2' }`}>
                    { term }
                </dt>
                <dd className="ml0">
                    { description }
                </dd>
            </div>
        )
    }</dl>
)

Simple.defaultProps = {
    list: [
        {
            term: 'Favorite Song',
            description: 'Devil Got My Woman - Skip James'
        },
        {
            term: 'Favorite Movie',
            description: 'Primer'
        },
        {
            term: 'Favorite Artist',
            description: 'Kanye West'
        },
        {
            term: 'Favorite Food',
            description: 'Cheese Pizza'
        },
        {
            term: 'Least Favorite Flavor',
            description: 'Cherry'
        },
        {
            term: 'Favorite Hobby',
            description: 'Eating Cheese Pizza'
        }
    ]
};

Simple.propTypes = {
    list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                term: React.PropTypes.string,
                description: React.PropTypes.string
            })
        )
};

export default Simple;
