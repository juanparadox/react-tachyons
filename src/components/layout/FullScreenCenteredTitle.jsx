import React from 'react';

const Default = {
    title: "Vertically centering things in css is easy!",
    bg: "dark-pink",
    fg: "white",
    height: "vh-100",
    width: "w-100"
}

export default ({ title, bg, fg, height, width }) =>
    <div className={
        `dt ${ height ? height : Default.height } ${ width ? width : Default.width } bg-${ bg ? bg : Default.bg }`
    }>
        <div className={`dtc v-mid tc ${ fg ? fg : Default.fg } ph3 ph4-l`}>
            <h1 className="f6 f2-m f-subheadline-l fw6 tc">
                { title ? title : Default.title }
            </h1>
        </div>
    </div>
