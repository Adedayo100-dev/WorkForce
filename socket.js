import { io } from "socket.io-client";
const socket = io('http://localhost:3000');

socket.on("connect", () => {
  console.log("Main user connected on client");
});

// socket.on("disconnect", () => {
// });

export default socket;