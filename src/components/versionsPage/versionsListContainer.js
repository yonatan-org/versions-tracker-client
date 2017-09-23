import React from 'react';
import VersionsListPage from './versionsListPage'
import $ from 'jquery';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

const subscribeToVersionChangedEvent = (cb) => {
    socket.on('versionChange', version => cb(null, version));
  }

class versionsListConainer extends React.Component {

    constructor(props) {
        super(props);

        subscribeToVersionChangedEvent((err, version) =>  {
        });

        this.state = {
            versions : []
        }
    }

    componentDidMount() {
        $.get('http://localhost:3001/versions').then((versions) => {
            this.setState({versions : versions});
        })
    }

    render() {
        // return <h1>Hello, {this.state.timestamp}</h1>;
        return <VersionsListPage versions={this.state.versions}/>
    }
}

export default versionsListConainer;