import * as speech from './speech';
import * as serverEventsHandler from '../events/serverEventsHandler';

export function handleEvent(event) {

    switch (event.buildStatus) {
        case 'init' : handleStartDeployment(event);
            break;
        case 'complete' : handleDeploymentCompleted(event);
            break;
        case 'failure' : handleDeploymentFailed(event);
            break;
        case 'aborted' : handleDeploymentAborted(event);
            break;
    }

    function handleStartDeployment(event) {
        speech.speak(`starting deployment of ${event.projectName}`);
        speech.speak(`with commits by`);
        event.commitsData.map((commitData) => {
            setTimeout(speech.speak(commitData.username), 700);
        })
    }
        
    function handleDeploymentCompleted (event) {
        speech.speak(`deployment of ${event.projectName} is complete`);
    }

    function handleDeploymentFailed( event) {
        speech.speak(`deployment of ${event.projectName} has failed`);
    }

    function handleDeploymentAborted(event) {
        speech.speak(`deployment of ${event.projectName} has been aborted`);
    }
}

serverEventsHandler.subscribeToServerEvent(handleEvent);
