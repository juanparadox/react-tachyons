import React from 'react';
import FourColumn from './FourColumn';
import AspectRatio from './AspectRatio';

function random(start, end){
    start = start ? start : 1;
    end = end ? end : 22;
    let num = Math.floor(Math.random() * end) + start;
    return (num < 10) ? ("0" + num) : num;
}

const Default = {
    ratio: "16x9",
    imgList: [
        `http://mrmrs.github.io/images/00${random(1,5)}.jpg`,
        `http://mrmrs.github.io/images/00${random(6,10)}.jpg`,
        `http://mrmrs.github.io/images/00${random(11,15)}.jpg`,
        `http://mrmrs.github.io/images/00${random(16,20)}.jpg`
    ]
}

export default ({ imgList, ratio }) =>
    <FourColumn>
        <AspectRatio
            ratio={ ratio ? ratio : Default.ratio }
            img={ imgList ? imgList[0] : Default.imgList[0] }
        />
        <AspectRatio
            ratio={ ratio ? ratio : Default.ratio }
            img={ imgList ? imgList[0] : Default.imgList[1] }
        />
        <AspectRatio
            ratio={ ratio ? ratio : Default.ratio }
            img={ imgList ? imgList[0] : Default.imgList[2] }
        />
        <AspectRatio
            ratio={ ratio ? ratio : Default.ratio }
            img={ imgList ? imgList[0] : Default.imgList[3] }
        />
    </FourColumn>
