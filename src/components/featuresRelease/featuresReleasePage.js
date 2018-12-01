import React, {
    Component
} from 'react';

import FeatureReleaseComponent from "./featureReleaseComponent";

class featureReleasePage extends Component {
    constructor(props) {
        super(props);
    }

    generateFeatures (features) {
        return features.map((feature) => {
            return <FeatureReleaseComponent featureRelease={feature}/>;
        });
    }

    render() {
        return (
            <div>
            {this.generateFeatures(this.props.features)}
            </div>
        );
    }
}

export default featureReleasePage;