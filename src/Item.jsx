import React from 'react';

const Item = ({ children, label }) => (
  <div className="item">
    <h6 className="item-label">{label}:</h6>
    {children}
  </div>
);

export default Item;
