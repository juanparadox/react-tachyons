import React from 'react';

function renderColumn(content, key, size){
    let isEven = (key % 2 === 0)
    return(
        <div
            className={ `fl w-${ size } tc pv5 ${ isEven ? 'bg-black-05' : 'bg-black-10'}` }
            key={ key }
        >
            { content }
        </div>
    )
}

function renderRow(count, children){
    let row = [],
        size = 100 / count;
    for (var i = 0; i < count; i++) {
        row.push(
            renderColumn(children[i], i, size)
        )
    }
    return row;
}

export default ({ count, children }) =>
    <div className="cf">
        { renderRow(5, children) }
    </div>
