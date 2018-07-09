import React from 'react';
import VersionsListPage from './versionsListPage'
import $ from 'jquery';
import * as serverEventsHandler from '../events/serverEventsHandler';

function reloadVersions () {
    $.get(`${process.env.REACT_APP_API_URI}/versions`).then((versions) => {
        this.setState({versions : versions});
    })
}

class versionsListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            versions : []
        }
    }

    componentDidMount() {
        reloadVersions.bind(this)();
        serverEventsHandler.subscribeToServerEvent(reloadVersions.bind(this));
    }

    render() {
        return <VersionsListPage versions={this.state.versions}/>
    }
}

export default versionsListContainer;