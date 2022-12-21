import React from 'react';
import '../styles/LoadingComponent.css'

function LoadingComponent() {

    return (
        <div className="loader">
            <div className="face">
                <div className="circle"></div>
            </div>
            <div className="face">
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default LoadingComponent;