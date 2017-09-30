import React from 'react';
import Committer from "./committerComponent";

class CommittersComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const createCommitters = (committers) => {
            let counter = 0;
            return committers.map((committer) => {
                return <Committer committer={committer} key={counter++}/>
            })
        }

        return (
            <div className="committers">
                {createCommitters(this.props.committers)}
            </div>
        )
    }
};

export default CommittersComponent;