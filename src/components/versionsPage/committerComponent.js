import React from 'react';

const CommitterComponent = (props) => {
    return (
        <div className="committer">
            <div className="committer-info">
                <div className="committer-name">{props.committer.committer.username}</div>
                <img src={props.committer.committer.imageUrl} className="committer-image"></img>
            </div>
            <div className="commit-message">{props.committer.commitMessage}</div>
        </div>
    );
};

export default CommitterComponent;