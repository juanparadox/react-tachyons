import React from 'react';

const Default = {
    text: "On mobile, this is a paragraph below an image.",
    img: "http://tachyons.io/img/super-wide.jpg",
    imgAlt: "A bright blue sky",
    align: "mid"
}

function getAlignment(text){
    console.log('getAlignment', text);
    switch (text.toLowerCase()) {
        case "top":
            return "top"
        case ("btm" || "bottom"):
            return "btm"
        case ("mid" || "middle" || "center"):
        default:
            return "mid"
    }
}

export default ({ text, img, imgAlt, align }) =>
    <div className="dt">
        <div className={`db dtc-ns v-${getAlignment(align ? align : Default.align)}-ns`}>
            <img
                src={ img ? img : Default.img }
                alt={ imgAlt ? imgAlt : Default.imgAlt }
                className="w-100 mw7 w5-ns"
            />
        </div>
        <div className={`db dtc-ns v-${getAlignment(align ? align : Default.align)} ph2 pr0-ns pl3-ns`}>
            <p className="lh-copy">
                { text ? text : Default.text }
            </p>
        </div>
    </div>
