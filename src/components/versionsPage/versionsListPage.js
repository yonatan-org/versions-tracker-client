import React from 'react';
import VersionBucketComponent from './versionBucketComponent';
import speechEventHandler from '../speech/speechEventHandler';

const versionsPage = (props) => {

    const generateVersionBuckets = (versionData) => {

        if (versionData.length === 0)
            return null;

        let counter = 0;
        const projects = [];

        for (var projectName in versionData) {
            if (versionData.hasOwnProperty(projectName)) {
                projects.push(projectName)
            }
        }
        
        return projects.map((project) => {
            return <VersionBucketComponent version={versionData[project]} key={counter++}/>
        })
    }

    return (
        <div className="versions">
            {generateVersionBuckets(props.versions)}
        </div>

    )
};

export default versionsPage;