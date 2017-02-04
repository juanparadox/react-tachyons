import React from 'react';

const ContactPhone = ({ list }) => (
    <ul className="list pl0 mt0 measure center">
        { list.map(({img, name, company, phoneNumber}, i) =>
            <li
                key={i}
                className="flex items-center lh-copy pa3 ph0-l bb b--black-10"
            >
                <img
                    className="w2 h2 w3-ns h3-ns br-100"
                    src={ img }
                    alt={`Avatar for ${ name }`}
                />
                <div className="pl3 flex-auto">
                  <span className="f6 db black-70">{ name }</span>
                  <span className="f6 db black-70">{ company }</span>
                </div>
                <div>
                  <a href={`tel:${ phoneNumber }`} className="f6 link blue hover-dark-gray">
                      { phoneNumber }
                  </a>
                </div>
            </li>
        ) }
    </ul>
);

ContactPhone.defaultProps = {
    list: [
        {
            img: 'http://tachyons.io/img/avatar-mrmrs.jpg',
            name: 'Mrmrs',
            company: 'Medium Hexagon, LLC',
            phoneNumber: '+1 (999) 555-5555'
        },
        {
            img: 'http://tachyons.io/img/avatar-jxnblk.jpg',
            name: 'Jxnblk',
            company: 'Large Circle, Inc',
            phoneNumber: '+1 (999) 555-5555'
        },
        {
            img: 'http://tachyons.io/img/avatar-jasonli.jpg',
            name: 'Jason Li',
            company: 'Little Blue Square, Inc',
            phoneNumber: '+1 (999) 555-5555'
        },
        {
            img: 'http://tachyons.io/img/avatar-yavor.jpg',
            name: 'Yavor',
            company: 'Large Circle, Inc',
            phoneNumber: '+1 (999) 555-5555'
        }
    ]
};

ContactPhone.propTypes = {
    list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                img: React.PropTypes.string.isRequired,
                name: React.PropTypes.string.isRequired,
                company: React.PropTypes.string.isRequired,
                phoneNumber: React.PropTypes.string.isRequired
            })
        )
};

export default ContactPhone;
