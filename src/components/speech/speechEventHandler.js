import * as speech from './speech';

export function handleEvent(event) {
    switch (event.status) {
        case 'init' :
            handleStartDeployment(event);
            break;
        case 'complete' :
            handleDeploymentCompleted(event);
            break;
        case 'failure' :
            handleDeploymentFailed(event);
            break;
        case 'aborted' :
            handleDeploymentAborted(event);
            break;
        case 'beta' :
            handleDeploymentBeta(event);
            break;
    }

    function handleStartDeployment(event) {
        speech.speak(`starting deployment of ${event.projectName}`);
        speech.speak(`with commits by`);
        event.commits.map((commitData) => {
            setTimeout(speech.speak(commitData.name), 700);
        })
    }

    function handleDeploymentCompleted(event) {
        speech.speak(`deployment of ${event.projectName} is complete`);
    }

    function handleDeploymentBeta(event) {
        speech.speak(`deployment of ${event.projectName} is in BETA`);
    }

    function handleDeploymentFailed(event) {
        speech.speak(`deployment of ${event.projectName} has failed`);
    }

    function handleDeploymentAborted(event) {
        speech.speak(`deployment of ${event.projectName} has been aborted`);
    }
}
