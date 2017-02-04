import React from 'react';

function getSizeClasses(size){
    switch (size) {
        case 'large':
            return 'f2 f-subheadline-l fw6';
        case 'small':
            return 'f3 fw6'
        default:
            return 'f3 f2-ns fw6'
    }
}

const LinksInline = ({ list, size }) => (
    <div>
        { list.map(({title, value}, i) =>
            <dl className="dib mr5" key={i}>
                <dd className="f6 f5-ns fw4 ml0">{ title }</dd>
                <dd className={ `${getSizeClasses(size)} ml0` }>{
                    typeof value === "number"
                        ? value.toLocaleString()
                        : value
                }</dd>
            </dl>
        ) }
    </div>
);

LinksInline.defaultProps = {
    list: [
            {
                title: 'Closed Issues',
                value: 1024
            },
            {
                title: 'Open Issues',
                value: 993
            },
            {
                title: 'Next Release',
                value: '10-22'
            },
            {
                title: 'Days Left',
                value: 4
            },
            {
                title: 'Favorite Cat',
                value: 'All of Them'
            },
            {
                title: 'App Downloads',
                value: '1,200'
            }
        ]
};

LinksInline.propTypes = {
    list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                title: React.PropTypes.string,
                value: React.PropTypes.oneOfType([
                        React.PropTypes.string,
                        React.PropTypes.number,
                    ])
            })
        ).isRequired,
    size: React.PropTypes.oneOf(['large', 'small'])
};

export default LinksInline;
