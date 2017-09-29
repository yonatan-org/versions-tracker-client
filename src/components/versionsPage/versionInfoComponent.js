import React from 'react';
import classNames from 'classnames'

const VersionInfoComponent = (props) => {
    
    const obj = {'version-info' :true}
    obj[props.versionInfo.buildStatus] = true;
    const versionInfoCss = classNames(obj)

    return (
        <div className="version-info-wrapper">
            <div className={versionInfoCss}>
                <div className="version-info-application table-cell">
                    <div className="version-info-application">{props.versionInfo.projectName}</div>    
                </div>
                <div className="version-info-time-and-version table-cell">
                    <div className="version-info-environment">{props.versionInfo.versionData.environment}</div>
                    <div>{new Date(props.versionInfo.versionData.buildTime).toLocaleTimeString('en-GB')}</div>
                    <div>{props.versionInfo.versionData.version}</div>
                </div>
            </div>
        </div>
    );
};  

export default VersionInfoComponent;