import React from 'react';
import CommittersComponent from "./committersComponent";
import VersionInfo from "./versionInfoComponent";

const versionInstance = (props) => {

    let counter = 0;

    return (
        <div className="version-instance" key={counter++}>
            <VersionInfo versionInfo={props.version}/>
            <CommittersComponent committers={props.version.commitsData}/>
        </div>
    );


}

export default versionInstance;
