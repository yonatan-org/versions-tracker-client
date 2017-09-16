import React from 'react';

const VersionInfoComponent = (props) => {
    return (
        <div>
            <div>{props.versionInfo.application}</div>    
            <div>{props.versionInfo.environment}</div>
            <div>{props.versionInfo.lastDeploymentData.toLocaleTimeString()}</div>
            <div>{props.versionInfo.versionNumber}</div>
        </div>
    );
};  

export default VersionInfoComponent;