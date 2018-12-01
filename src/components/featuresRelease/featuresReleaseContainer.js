import React from 'react';
import dataRetrievingComponent from '../general/dataRetrievingComponent';
import FeatureReleasePage from './featuresReleasePage';

class featuresReleaseContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <FeatureReleasePage features={this.props.data}></FeatureReleasePage>;
    }
}

const featuresReleaseContainerWithData = dataRetrievingComponent(featuresReleaseContainer, {
    relativeUrl : "/features-release"
});

export default featuresReleaseContainerWithData;