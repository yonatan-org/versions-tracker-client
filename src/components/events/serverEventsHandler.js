import openSocket from 'socket.io-client';
let socket;
let isInit = false;

const clientsCallbacks = {};

const init = () => {
    console.log('init');
    socket = openSocket(`http://tracker-api.getjaco.com:80`);
};

const subscribeToEvent = () => {
    registerToEvent('versionEvent');
    registerToEvent('deadManWalking')
};

function registerToEvent(type) {
    socket.on(type, data => {
        notifyClients(type, data);
    });
}

function notifyClients(type, data) {
    for (var key in clientsCallbacks) {
        if (clientsCallbacks.hasOwnProperty(key)) {
            if (key === type)
                clientsCallbacks[key](data);
        }
    }
}

export function subscribeToServerEvent(eventType, callback) {
    clientsCallbacks[eventType] = callback;
}

if (!isInit) {
    isInit = true;
    init();
    subscribeToEvent();
}