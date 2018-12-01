import React from 'react';

const featureReleaseComponent = (props) => {
    return ( 
        <div className="feature-release-component table">
            <span className="table-cell">{props.featureRelease.summery}</span>
            <span className="table-cell">{props.featureRelease.generalAvailabilityReleaseDate}</span>
            <span className="table-cell">{props.featureRelease.internalReleaseDate}</span>
            <span className="table-cell">{props.featureRelease.currentStatus}</span>
            <span className="table-cell">{props.featureRelease.featureOwner}</span>
        </div>
     );
};
 
export default featureReleaseComponent;