import React, { useState } from 'react';

const ReadMore = ({ children }) => {
    const text = children ? children : "";    
    return (
        <p className="text break-all ">
            {text.length > 20 ? text.slice(0, 20) : text}
            {
                text.length > 20 &&
                <span>...
                </span>
            }

        </p>
    );
};

export default ReadMore;