import React from 'react';

const BorderSpaced = ({ list }) => (
    <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
        { list.map((item, i) =>
            <li
                className={`pa3 ${ (i + 1) < list.length && 'bb b--light-silver' }`}
                key={i}
            >
                { item }
            </li>
        ) }
    </ul>
);

BorderSpaced.defaultProps = {
    list: ['Mackeral Tabby', 'Burmese', 'Orange Tabby', 'Maine Coon', 'Siamese', 'Scottish Fold', 'American Bobtail']
};

BorderSpaced.propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default BorderSpaced;
