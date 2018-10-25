import React from 'react';
import VersionsListPage from './versionsListPage'
import $ from 'jquery';
import * as serverEventsHandler from '../events/serverEventsHandler';
import DeadManWalking from './deadManWalking';

function reloadVersions() {
    $.get(`http://localhost:3001/versions`).then((versions) => {
        this.setState({versions: versions});
    })
}

function playAlert(filename) {
    const mp3Source = '<source src="' + filename + '.mp3" type="audio/mpeg">';
    const oggSource = '<source src="' + filename + '.ogg" type="audio/ogg">';
    const embedSource = '<embed hidden="true" autostart="true" loop="false" src="' + filename + '.mp3">';
    document.getElementById("sound").innerHTML = '<audio autoplay="autoplay">' + mp3Source + oggSource + embedSource + '</audio>';
}

class versionsListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            versions: [],
            isDeadManWalking: false,
            failedBuildData: {}
        };

        this.handleDeadManWalking = this.handleDeadManWalking.bind(this);
    }

    handleDeadManWalking(failedBuildData) {
        playAlert('https://actions.google.com/sounds/v1/alarms/alarm_clock');
        setTimeout(() => {
            this.setState({isDeadManWalking:true, failedBuildData:failedBuildData});
            setTimeout(() => {
                this.setState({isDeadManWalking:false});

            }, 600000);
        }, 6000);
    }

    componentDidMount() {
        reloadVersions.bind(this)();
        serverEventsHandler.subscribeToServerEvent('versionEvent', reloadVersions.bind(this));
        serverEventsHandler.subscribeToServerEvent('deadManWalking', this.handleDeadManWalking);
    }

    getView() {
        if (this.state.isDeadManWalking) {
            return <DeadManWalking buildData={this.state.failedBuildData}/>;
        }

        return <VersionsListPage versions={this.state.versions}/>;
    }

    render() {
        return this.getView();
    }
}

export default versionsListContainer;