import { Server as HttpServer } from "http";
import { Server as IOServer, Socket} from "socket.io";
import { NextApiRequest, NextApiResponse } from "next";
import { NextApiResponseServerIO } from "@/app/types/next";

// socket.io setup
export default function handler(req: NextApiRequest, res: NextApiResponseServerIO) {
if (!res.socket.server.io) {
    console.log("Initializing Socket.io server...");

    // Next own http-server is connecting to socket.ios server
    const httpServer: HttpServer = res.socket.server as any;
    const io = new IOServer(httpServer, {
        path: "/api/socketio",
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    // Our socket.io server that we later can ree use
    res.socket.server.io = io;

    // Listen for new players
    io.on("connection", (socket: Socket) => {
        console.log("Ny användare ansluten: ", socket.id);

        // Player joins a game and gets added to a room
        socket.on("joinGame", (gameId, playerName) => {
            socket.join(gameId);
            console.log(`${playerName} gick med i spelet ${gameId}` );

            // Broadcast to all players that new player has joined
            io.to(gameId).emit("playerJoined", { playerName });
        });

        socket.on("disconnect", () => {
            console.log("En användare kopplades bort: ", socket.id);
        });
    });
} else {
    console.log("Socket.io-server redan initierad");
}

res.end();
}
