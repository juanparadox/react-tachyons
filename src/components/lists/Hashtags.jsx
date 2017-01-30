import React from 'react';

function determineShapeStyles(shape){
    switch(shape){
        case 'square':
            return 'br2'
        case 'circle':
        default:
            return 'db br-100'
    }
}

const Hashtags = ({ list }) => (
    <ul className="list f6 pl0 mt3 mb0">
        { list.map(
            ({hashtag, href, mentions}, i) =>
                <li className="pv2">
                    <a href={ href } className="link blue lh-title">
                        <span className="fw7 underline-hover">{ `#${ hashtag }` }</span>
                        <span className="db black-60">{ `${ mentions } mentions` }</span>
                    </a>
                </li>
            )
        }
    </ul>
);

Hashtags.defaultProps = {
    list: [
        {
            hashtag: 'AmazingSerena',
            href: "#",
            mentions: '134.5k'
        },
        {
            hashtag: 'womenintech',
            href: "#",
            mentions: '11k'
        },
        {
            hashtag: 'SenWarrenRoastsWellsFargo',
            href: "#",
            mentions: '99k'
        }
    ]
};

Hashtags.propTypes = {
    list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                hashtag: React.PropTypes.string.isRequired,
                href: React.PropTypes.string,
                mentions: React.PropTypes.string
            })
        )
};

export default Hashtags;
