"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SERVER_URL = "http://localhost:3000";

export const useSocket= () => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect( () => {
        console.log("Trying to connect to socket.io...");

        const socketInstance = io(SERVER_URL, {
            path: "/api/socketio/",
        });
    
        setSocket(socketInstance);

        socketInstance.on("playerJoined", ({playerName}) => {
            console.log(`Spelare anslöt: ${playerName}`);
        });
    
        return () => {
            console.log("Cleaning up socket...");
            socketInstance.disconnect();
        }
    }, []);

    return socket;
}

