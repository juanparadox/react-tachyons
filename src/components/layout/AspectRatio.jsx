import React from 'react';

export default ({ ratio, img }) =>
  <div className={`aspect-ratio aspect-ratio--${ ratio }`}>
    <div
        className="aspect-ratio--object cover"
        style={{ background: `url(${ img }) center` }}
    >
    </div>
  </div>
