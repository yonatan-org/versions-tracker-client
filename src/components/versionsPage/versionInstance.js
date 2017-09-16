import React from 'react';
import Committers from "./committersComponent";
import VersionInfo from "./versionInfoComponent";

const versionInstance = (props) => {

    return (
        
        <div class="version-instance">
            <VersionInfo versionInfo={props.version.applicationData}/>
            <Committers committers={props.version.committers}/>
        </div>
    )

    versionInstance.propTypes = {
        applicationData: React.PropTypes.object.isRequired,
        committers: React.PropTypes.object.isRequired,
      };
}

export default versionInstance;
