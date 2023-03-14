import { io } from "socket.io-client";

let URL = "http://localhost:8000"

export const Socket = io(URL, {
    autoConnect: false 
})