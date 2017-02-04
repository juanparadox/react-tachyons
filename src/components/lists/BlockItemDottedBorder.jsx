import React from 'react';

const BlockItemDottedBorder = ({ list }) => (
    <ul className="list pl0 measure center">
        { list.map((item, i) =>
            <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" key={i}>
                { item }
            </li>
        ) }
    </ul>
);

BlockItemDottedBorder.defaultProps = {
    list: ['Orange', 'Apple', 'Peach', 'Grape', 'Grapefruit', 'Kiwi']
};

BlockItemDottedBorder.propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default BlockItemDottedBorder;
