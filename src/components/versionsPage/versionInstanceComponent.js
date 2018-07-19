import React from 'react';
import CommittersComponent from "./committersComponent";
import VersionInfo from "./versionInfoComponent";

const versionInstance = (props) => {

    let counter = 0;

    return (
        <div className="version-instance" key={counter++}>
            <VersionInfo className="version-info-title" versionInfo={props.version}/>
            <CommittersComponent version={props.version}/>
        </div>
    );


};

export default versionInstance;
