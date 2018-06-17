import React from 'react';

const CommitterComponent = (props) => {
    return (
        <div className="committer">
            <div className="committer-info table-cell">
                <img src={props.committer.imageUrl} className="committer-image" alt=""></img>
                <div className="committer-name">{props.committer.name}</div>
            </div>
            <div className="commit-message table-cell">{props.committer.commitMessage}</div>
        </div>
    );
};

export default CommitterComponent;