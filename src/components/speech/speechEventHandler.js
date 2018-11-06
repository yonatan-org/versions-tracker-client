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

    const nameMapping = {
        "shlomi.d" : "King Dozi",
        "maxim.p" : "Queen Max",
        "tomer.l" : "Princess T",
        "matan.c" : "Ninja Israel Alek",
        "eran.p" : "Marathon Man",
        "yonatan.k" : "Yonatan - How's the beach?",
        "itai.s" : "Lord Schwartz",
        "gadi.r" : "Sir Gadi",
        "maor.r" : "Logz Io",
        "alex.p" : "Doctor Alex",
        "itay.a" : "Professor Adler",
        "yoni.g" : "Recent Acquisition",
        "sergey.y" : "Amazon man",
        "romi.e" : "Lady Rom",
        "oron.a" : "The Student"
    };

    function convertToMappedName(name) {
        return nameMapping[name] || name;
    }

    function handleStartDeployment(event) {
        speech.speak(`starting deployment of ${event.projectName}`);
        speech.speak(`with commits by`);
        event.commits.map((commitData) => {
            setTimeout(speech.speak(convertToMappedName(commitData.name)), 700);
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
