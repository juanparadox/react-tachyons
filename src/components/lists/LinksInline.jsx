import React from 'react';

function getSizeClasses(size){
    switch (size) {
        case 'large':
            return 'f3 f2-ns';
        case 'small':
            return 'f6 f5-ns'
        default:
            return 'f4'
    }
}

function getHoverClasses(hoverColor){
    return hoverColor ? `hover-${ hoverColor }` : ''
}

const LinksInline = ({ list, size, hoverColor, withBorders }) => (
    <ul className={`list pa0 ${ getSizeClasses(size) }`}>
        { list.map(({text, url}, i) =>
            <li
                className={ `dib mr2 ${ withBorders && 'mr1 mb2' }` }
                key={i}
            >
                <a
                    href={ url }
                    className={
                        `b db pa2 link mid-gray ${ hoverColor ? getHoverClasses(hoverColor) : 'dim' } ${ withBorders && 'ba b--black-20' }`
                    }
                >
                    { text }
                </a>
            </li>
        ) }
    </ul>
);

LinksInline.defaultProps = {
    list: [
            {
                text: 'Mackeral Tabby',
                url: '#'
            },
            {
                text: 'Burmese',
                url: '#'
            },
            {
                text: 'Orange Tabby',
                url: '#'
            },
            {
                text: 'Maine Coon',
                url: '#'
            },
            {
                text: 'Siamese',
                url: '#'
            },
            {
                text: 'Scottish Fold',
                url: '#'
            },
            {
                text: 'American Bobtail',
                url: '#'
            }
        ]
};

LinksInline.propTypes = {
    list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                text: React.PropTypes.string,
                url: React.PropTypes.string
            })
        ).isRequired,
    size: React.PropTypes.string,
    hoverColor: React.PropTypes.string,
    withBorders: React.PropTypes.bool
};

export default LinksInline;
