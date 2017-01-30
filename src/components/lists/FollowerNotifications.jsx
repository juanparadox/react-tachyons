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

const FollowerNotifications = ({ list, imgShape }) => (
    <ul className="list pa0 mw6 center">
        { list.map(
            ({img, name, handle, buttonText, onClick}, i) =>
                <li className="dt w-100 bb b--black-05 pb2 mt2" key={i}>
                    <div className="dtc w2 w3-ns v-mid">
                        <img
                            src={ img }
                            alt={ `Avatar for ${ name } (${ handle })`}
                            className={`ba b--black-10 db w2 w3-ns h2 h3-ns ${ determineShapeStyles(imgShape) }`}
                        />
                    </div>
                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">{ name }</h1>
                        <h2 className="f6 fw4 mt0 mb0 black-60">{ handle }</h2>
                    </div>
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                            { buttonText &&
                                <button
                                    className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                                    onClick={ onClick }
                                >
                                    { buttonText }
                                </button>
                            }
                        </form>
                    </div>
                </li>
            )
        }
    </ul>
);

FollowerNotifications.defaultProps = {
    list: [
        {
            img: 'http://mrmrs.io/photos/p/2.jpg',
            name: 'Young Gatchell',
            handle: '@yg',
            buttonText: '+ Follow',
            onClick: (e) => { console.log(e) }
        },
        {
            img: 'http://mrmrs.io/photos/p/3.jpg',
            name: 'Arnoldo Degraff',
            handle: '@99xx88randomhandle',
            buttonText: 'Unfollow',
            onClick: (e) => { console.log(e) }
        },
        {
            img: 'http://mrmrs.io/photos/p/4.jpg',
            name: 'Deirdre Lachance',
            handle: '@favfavfav',
            buttonText: '+ Follow',
            onClick: (e) => { console.log(e) }
        }
    ],
    imgShape: 'circle'
};

FollowerNotifications.propTypes = {
    list: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                img: React.PropTypes.string.isRequired,
                name: React.PropTypes.string.isRequired,
                handle: React.PropTypes.string.isRequired,
                buttonText: React.PropTypes.string,
                onClick: React.PropTypes.func
            })
        ),
    imgShape: React.PropTypes.string
};

export default FollowerNotifications;
