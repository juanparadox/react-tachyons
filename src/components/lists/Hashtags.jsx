import React from 'react';

const Hashtags = ({ list }) => (
    <ul className="list f6 pl0 mt3 mb0">
        { list.map(
            ({hashtag, href, mentions}, i) =>
                <li className="pv2" key={i}>
                    <a href={ href } className="link blue lh-title db">
                        <span className="fw7 underline-hover">{ `#${ hashtag }` }</span>
                        <span className="black-60 db">{ `${ mentions } mentions` }</span>
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
