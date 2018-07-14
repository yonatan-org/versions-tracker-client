import openSocket from 'socket.io-client';
const socket = openSocket(`${process.env.REACT_APP_SOCKET_IO_URI}`);

const clientCallbacks = [];

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

subscribeToEvent();