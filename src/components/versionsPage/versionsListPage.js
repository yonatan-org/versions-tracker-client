import React from 'react';
import VersionInstance from './versionInstance';

const versionsPage = (props) => {

    const generateVersions = (versionData) => {

        if (versionData.length === 0)
            return null;

        let counter = 0;
        return versionData.map((version) => {
            return <VersionInstance version={version} key={counter++}/>
        })
    }

    return (
        <div className="versions">
            {generateVersions(props.versions)}
        </div>

    )
};

export default versionsPage;