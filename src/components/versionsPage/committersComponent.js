import React from 'react';
import Committer from "./committerComponent";
import classNames from "classnames";

class CommittersComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const createCommitters = (version) => {
            let counter = 0;

            const obj = {'version-color': true, 'table-cell': true};
            obj[version.status] = true;
            const versionColor = classNames(obj);

            return version.commits.map((committer) => {
                return (
                <div key={counter++}>
                    <div className={versionColor}></div>
                    <Committer committer={committer}/>
                </div>
                )
            })
        };

        return (
            <div className="committers">
                {createCommitters(this.props.version)}
            </div>
        )
    }
};

export default CommittersComponent;