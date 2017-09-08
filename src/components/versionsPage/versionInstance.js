import React from 'react';
import Committers from "./committersComponent";
import VersionInfo from "./versionInfoComponent";

const versionInstance = (props) => {

    return (
        
        <div class="version-instance">
            <Committers committers={props.committers}/>
            <VersionInfo committers={props.applicationData}/>
        </div>
    )

    versionInstance.propTypes = {
        applicationData: React.PropTypes.object.isRequired,
        committers: React.PropTypes.object.isRequired,
      };
}

export default versionInstance;
