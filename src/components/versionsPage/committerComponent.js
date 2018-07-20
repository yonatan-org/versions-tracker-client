import React from 'react';

const CommitterComponent = (props) => {
    return (
        <div className="committer table-cell">
            <div className="inline-table">
                <div className="committer-info table-cell">
                    <img src={props.committer.imageUrl} className="committer-image" alt=""></img>
                </div>
                <div className="commit-message-container table-cell">
                    <div className="committer-name">{props.committer.name}</div>
                    <div className="commit-message">{props.committer.commitMessage}</div>
                </div>
            </div>
        </div>
    );
};

export default CommitterComponent;