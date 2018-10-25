import React from 'react';
import VersionBucketComponent from './versionBucketComponent';
import speechEventHandler from '../speech/speechEventHandler';
import StackGrid from "react-stack-grid";

class versionsPage extends React.Component {

    render() {
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
        };

        return (
            <StackGrid columnWidth={350} gutterWidth={0} gridRef={grid => this.grid = grid}>
                {generateVersionBuckets(this.props.versions)}
            </StackGrid>

        )
    };
}

export default versionsPage;