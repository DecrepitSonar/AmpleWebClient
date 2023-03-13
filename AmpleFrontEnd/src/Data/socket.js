import { io } from "socket.io-client";

let URL = "http://localhost:8001"

export const Socket = io(URL)