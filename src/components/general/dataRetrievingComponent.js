import React from 'react';
import $ from 'jquery';

const dataRetrievingComponent = (WrappedComponent, options) => {
    // ...and returns another component...
    return class extends React.Component {

        constructor(props) {
            super(props);

            this.state = {};
            this.reloadData = this.reloadData.bind(this);

        }

        reloadData() {
            const url = process.env.REACT_APP_VERSION_TRACKER_API;
            $.get(`${url}${options.relativeUrl}`).then((data) => {
                this.setState(data);
            })
        }


        componentDidMount() {
            this.reloadData();
        }

        render() {

            if (!this.state.data) {
                return null;
            }

            return <WrappedComponent data = {
                this.state.data
            } { ...this.props
            }
            />;
        }

    }
}

export default dataRetrievingComponent;