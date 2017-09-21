import React from 'react';
import Committers from "./committersComponent";
import VersionInfo from "./versionInfoComponent";

const versionInstance = (props) => {

    let counter = 0;

    return (
        <div className="version-instance" key={counter++}>
            <VersionInfo versionInfo={props.version.applicationData}/>
            <Committers committers={props.version.committers}/>
        </div>
    );


}

export default versionInstance;
