import React from 'react';

const ItemsImageTitlePrice = ({ list }) => (
    <ul className="list f6 pl0 mt3 mb0">
        { list.map(
            ({img, href, title, subtitle, price}, i) =>
            <li key={i}>
                <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href={ href }>
                    <div className="dtc w3">
                        <img src={ img } className="db w-100"/>
                    </div>
                    <div className="dtc v-top pl2">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">{ title }</h1>
                        <h2 className="f6 fw4 mt2 mb0 black-60">{ subtitle }</h2>
                        <dl className="mt2 f6">
                            <dt className="clip">Price</dt>
                            <dd className="ml0">{ price }</dd>
                        </dl>
                    </div>
                </a>
            </li>
            )
        }
    </ul>
);

ItemsImageTitlePrice.defaultProps = {
    list: [
        {
            img: 'http://mrmrs.io/images/0002.jpg',
            href: '#',
            title: 'Grid Systems',
            subtitle: 'Josef Müller-Brockmann',
            price: '$75.00'
        },
        {
            img: 'http://mrmrs.io/images/0010.jpg',
            href: '#',
            title: 'History of the Poster',
            subtitle: 'Josef Müller-Brockmann',
            price: '$15.00'
        },
        {
            img: 'http://mrmrs.io/images/0004.jpg',
            href: '#',
            title: 'Graphic Design in IBM: Typography, Photography, and Illustration',
            subtitle: 'Josef Müller-Brockmann',
            price: '$15.00'
        }
    ]
};

ItemsImageTitlePrice.propTypes = {
    list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                img: React.PropTypes.string.isRequired,
                href: React.PropTypes.string,
                title: React.PropTypes.string.isRequired,
                subtitle: React.PropTypes.string.isRequired,
                price: React.PropTypes.string.isRequired
            })
        )
};

export default ItemsImageTitlePrice;
