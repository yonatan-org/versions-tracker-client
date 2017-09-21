import React from 'react';
import Committer from "./committerComponent";

const CommittersComponent = (props) => {

    const createCommitters = (committers) => {
        let counter=0;
        return committers.map((committer) => {
            return <Committer committer={committer} key={counter++}/>
        })
    }

    return (
        <div className="committers">
            {createCommitters(props.committers)}
        </div>
    );
};

export default CommittersComponent;