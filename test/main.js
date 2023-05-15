import { io } from "socket.io-client";

// connect to the websocket server
const socket = io.connect('https://telemetria-trainee-2023.onrender.com');
  
// this message is triggered when the websocket gets connected
socket.on('connect', () => console.log('websocket connected!'))
// this message is triggered when the websocket gets disconnected
socket.on('disconnect', () => console.log('websocket disconnect'))

// receive a message from the server on the info 'channel'
socket.on("info", data => {
  console.log('data: ', data.latitude)
});