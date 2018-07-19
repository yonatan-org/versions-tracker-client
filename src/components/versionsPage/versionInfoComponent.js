import React from 'react';
import classNames from 'classnames'

const VersionInfoComponent = (props) => {

    const obj = {'version-color': true, 'table-cell': true, 'left-upper-border-radius' : true};
    obj[props.versionInfo.status] = true;
    const versionColor = classNames(obj);

    return (
        <div className="version-header-container">
            <span className={versionColor}></span>
            <span className="version-info-time-and-version right-upper-border-radius table-cell">{props.versionInfo.versionId}</span>
        </div>
    );
};

export default VersionInfoComponent;