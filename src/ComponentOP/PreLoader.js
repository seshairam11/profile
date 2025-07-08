import React from 'react';

function Preloader() {
    return (
        <div
            className="preloader-area"
            style={{ display: 'block' }}
        >
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    );
}

export default Preloader;
