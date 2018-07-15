import openSocket from 'socket.io-client';
let socket;
let isInit = false;

const clientCallbacks = [];

const init = () => {
    console.log('init');
    socket = openSocket(`http://tracker-api.getjaco.com:80`);
};

const subscribeToEvent = () => {
    socket.on('versionEvent', versionEvent => {
        notifyClients(versionEvent);
    });
};

function notifyClients(versionEvent) {
    for (let i = 0; i < clientCallbacks.length; i++) {
        clientCallbacks[i](versionEvent);
    }
}

export function subscribeToServerEvent(callback) {
    clientCallbacks.push(callback);
}

if (!isInit) {
    isInit = true;
    init();
    subscribeToEvent();
}