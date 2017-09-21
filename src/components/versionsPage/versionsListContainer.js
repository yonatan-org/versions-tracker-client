import React from 'react';
import VersionsListPage from './versionsListPage'
import $ from 'jquery';

class versionsListConainer extends React.Component {

    constructor(props) {
        super(props);
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
        // return <h1>Hello, {this.props.name}</h1>;
        return <VersionsListPage versions={this.state.versions}/>
    }
}

export default versionsListConainer;