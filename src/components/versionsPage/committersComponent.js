import React from 'react';
import Committer from "./committerComponent";

const CommittersComponent = (props) => {

    const createCommitters = (committers) => {
        return committers.map((committer) => {
            return <Committer committer={committer}/>
        })
    }

    return (
        <div className="committers">
            {createCommitters(props.committers)}
        </div>
    );
};

export default CommittersComponent;