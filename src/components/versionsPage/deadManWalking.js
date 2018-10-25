import React from 'react';
import jail from './jail.png'
import * as speech from '../speech/speech';


class deadManWalking extends React.Component {

    static getCommiters(commits) {
        return <div className="dead-man-walking ">
            <img className="jail-image" src={jail}/>
            <div className="dead-man-walking-committers center-screen">
                {commits.map((committer, index) => {
                    speech.speak(`${committer.username} you broke the fucking master`);
                    return <div className="dead-man-walking-committer" key={index}>
                        <div className="dead-man-walking-committer-username">{committer.username}</div>
                        <img src={committer.imageUrl} className="dead-man-walking-image" alt=""/>
                    </div>
                })}
            </div>
        </div>
    }

    render() {
        return <div>
            {deadManWalking.getCommiters(this.props.buildData.commits)}
        </div>

    }
}

export default deadManWalking;