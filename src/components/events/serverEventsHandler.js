import openSocket from 'socket.io-client';
let socket;
let isInit = false;

const clientsCallbacks = {};

const init = () => {
    console.log('init');
    socket = openSocket(`http://tracker-api.getjaco.com:80`);
    //socket = openSocket(`http://localhost:3001`);
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
    registerToEvent(eventType);
    clientsCallbacks[eventType] = callback;
}

if (!isInit) {
    isInit = true;
    init();
}