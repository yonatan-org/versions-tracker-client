import React from 'react';
import VersionInstance from './versionInstance';

const versionsPage = (props) => {

    const generateVersions = (versionData) => {
        console.log(JSON.stringify(versionData));
        return versionData.map((version) => {
            return <VersionInstance version={version}/>
        })
    }

    return (
        <div className="versions">
            {generateVersions(props.versions)}
        </div>

    )
}

export default versionsPage;