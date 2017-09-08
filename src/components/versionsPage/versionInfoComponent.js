import React from 'react';

const VersionInfoComponent = (props) => {
    return (
        <div>
            <div>{props.application}</div>    
            <div>{props.environment}</div>
            <div>{props.lastDeploymentData}</div>
            <div>{props.versionNumber}</div>
        </div>
    );
};  

export default VersionInfoComponent;