import React from 'react';

const CommitterComponent = (props) => {
    return (
        <div className="committer">
            <div className="committer-info table-cell">
                <img src={props.committer.imageUrl} className="committer-image" alt=""></img>
                <div className="committer-name">{props.committer.username}</div>
            </div>
            <div className="commit-message table-cell">{props.committer.commit_message}</div>
        </div>
    );
};

export default CommitterComponent;