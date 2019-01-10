import React from 'react';
import VersionBucketComponent from './versionBucketComponent';
import speechEventHandler from '../speech/speechEventHandler';
import StackGrid from "react-stack-grid";

class versionsPage extends React.Component {

    render() {
        const generateVersionBuckets = (versionData, ignoredProjects) => {

            if (versionData.length === 0)
                return null;

            let counter = 0;
            const projects = [];

            for (var projectName in versionData) {
                if (versionData.hasOwnProperty(projectName) && !ignoredProjects.includes(projectName)) {
                    projects.push(projectName)
                }
            }

            return projects.map((project) => {
                return <VersionBucketComponent version={versionData[project]} key={counter++}/>
            })
        };

        return (
            <StackGrid columnWidth={380} gutterWidth={30} gridRef={grid => this.grid = grid}>
                {generateVersionBuckets(this.props.versions, this.props.ignoredProjects)}
            </StackGrid>

        )
    };
}

export default versionsPage;