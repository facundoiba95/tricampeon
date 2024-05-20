import io from 'socket.io-client';

let socket = null;

const connectionSocket = () => {
    socket = io(`${import.meta.env.VITE_URL_SOCKET}`, {
        path: `${import.meta.env.VITE_SOCKET_PATH}`,  
        auth: {
            token: localStorage.getItem('token')
        },
        // autoConnect: false
    });
}



export { socket, connectionSocket }

