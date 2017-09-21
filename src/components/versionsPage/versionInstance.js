import React from 'react';
import Committers from "./committersComponent";
import VersionInfo from "./versionInfoComponent";

const versionInstance = (props) => {

    let counter = 0;

    return (
        <div className="version-instance">
            <VersionInfo versionInfo={props.version.applicationData}/>
            <Committers committers={props.version.committers}/>
        </div>
    );

    versionInstance.propTypes = {
        applicationData: React.PropTypes.object.isRequired,
        committers: React.PropTypes.object.isRequired,
      };
}

export default versionInstance;
