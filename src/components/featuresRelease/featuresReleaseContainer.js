import React from 'react';
import dataRetrievingComponent from '../general/dataRetrievingComponent';

const featuresReleaseContainerWithData = dataRetrievingComponent(featuresReleaseContainer, {
    relativeUrl : "/features-release"
})

class featuresReleaseContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div></div>
    }
}

export default featuresReleaseContainerWithData;