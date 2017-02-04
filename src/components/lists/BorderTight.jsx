import React from 'react';

const BorderTight = ({ list }) => (
    <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
        { list.map((item, i) =>
            <li
                className={`ph3 pv2 ${ (i + 1) < list.length && 'bb b--light-silver' }`}
                key={i}
            >
                { item }
            </li>
        ) }
    </ul>
);

BorderTight.defaultProps = {
    list: ['Mackeral Tabby', 'Burmese', 'Orange Tabby', 'Maine Coon', 'Siamese', 'Scottish Fold', 'American Bobtail']
};

BorderTight.propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default BorderTight;
