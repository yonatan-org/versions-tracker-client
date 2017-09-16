import React from 'react';

const CommitterComponent = (props) => {
    return (
        <div className="committer">
            <div className="committer-info table-cell">
                <img src={props.committer.committer.imageUrl} className="committer-image"></img>
                <div className="committer-name">{props.committer.committer.username}</div>
            </div>
            <div className="commit-message table-cell">{props.committer.commitMessage}</div>
        </div>
    );
};

export default CommitterComponent;