import React from 'react';
import classNames from 'classnames'
import Card from '@material-ui/core/Card';

const VersionInfoComponent = (props) => {

    const obj = {'version-info': true};
    obj[props.versionInfo.status] = true;
    const versionInfoCss = classNames(obj);

    return (
        <Card>
            <div className={versionInfoCss}>
                <div className="version-info-application table-cell">
                    <div className="version-info-application">{props.versionInfo.projectName}</div>
                </div>
                <div className="version-info-time-and-version table-cell">
                    {/*<div className="version-info-environment">{props.versionInfo.environment}</div>*/}
                    {/*<div>{new Date(props.versionInfo.buildTime).toLocaleTimeString('en-GB')}</div>*/}
                    <div>{props.versionInfo.version}</div>
                </div>
            </div>
        </Card>
    );
};

export default VersionInfoComponent;