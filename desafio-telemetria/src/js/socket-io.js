import { io } from "socket.io-client";

// connect to the websocket server
const socket = io.connect('https://telemetria-trainee-2023.onrender.com');
console.log('entrei aqui 1: ')
// this message is triggered when the websocket gets connected
socket.on('connect', () => console.log('websocket connected!'))
console.log('entrei aqui 2: ')

// this message is triggered when the websocket gets disconnected
socket.on('disconnect', () => console.log('websocket disconnect'))
console.log('entrei aqui 3: ')

// receive a message from the server on the info 'channel'
socket.on("info", data => {
  console.log('entrei aqui 4: ')

  console.log('data: ', data.latitude)
});