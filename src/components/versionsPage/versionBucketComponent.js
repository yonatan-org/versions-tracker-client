import React from 'react';
import VersionInstance from './versionInstanceComponent';
import speechEventHandler from '../speech/speechEventHandler';
import Card from '@material-ui/core/Card';

const versionBucketComponent = (props) => {

    const generateVersions = (versions) => {

        if (versions.length === 0)
            return null;

        let counter = 0;
        return versions.map((version) => {
            return <VersionInstance version={version} key={counter++}/>
        })
    };

    return (
        <Card className="version-bucket">
            {generateVersions(props.version)}
        </Card>

    )
};

export default versionBucketComponent;