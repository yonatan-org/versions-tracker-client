import React from 'react';

const VersionInfoComponent = (props) => {
    return (
        <div className="version-info-wrapper">
            <div className="version-info">
                <div className="version-info-application table-cell">
                    <div className="version-info-application">{props.versionInfo.application}</div>    
                </div>
                
                <div className="version-info-time-and-version table-cell">
                    <div className="version-info-environment">{props.versionInfo.environment}</div>
                    <div>{props.versionInfo.lastDeploymentData.toLocaleTimeString('en-GB')}</div>
                    <div>{props.versionInfo.versionNumber}</div>
                </div>
            </div>
        </div>
    );
};  

export default VersionInfoComponent;