import React from 'react';
import VersionsListPage from './versionsListPage'

const versions_data =  [{
        applicationData: {
            application: "Visions",
            environment: "Production",
            lastDeploymentData: new Date(),
            versionNumber: "v.234"
        },
        committers: [
            {
                commiter: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            },
            {
                commiter: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            },
            {
                commiter: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            },
            {
                commiter: {
                    username: "yonatan.k",
                    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg"
                },
                commitMessage: "This is my Brilliant commit message"
            }]

    }]

class versionsListConainer extends React.Component {

    render() {
        // return <h1>Hello, {this.props.name}</h1>;
        return <VersionsListPage versions={versions_data}/>
    }
}

export default versionsListConainer;