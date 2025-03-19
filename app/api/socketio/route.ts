// import { NextApiRequest, NextApiResponse } from "next";
// import { Server as IOServer } from "socket.io";
// import { Server as HttpServer } from "http";

// export default function handler(req: NextApiRequest, res: any) {
//     if (!res.socket.server.io) {
//         console.log("Startar Socket.io-server...");

//         const httpServer: HttpServer = res.socket.server as any;
//         const io = new IOServer(httpServer, {
//             path: "/api/socketio",
//             cors: {
//                 origin: "*",
//                 methods: ["GET", "POST"],
//             },
//         });

//         res.socket.server.io = io;

//         io.on("connection", (socket) => {
//             console.log("Ny användare ansluten:", socket.id);

//             socket.on("joinGame", (gameId, playerName) => {
//                 socket.join(gameId);
//                 console.log(`${playerName} gick med i spelet ${gameId}`);
//                 io.to(gameId).emit("playerJoined", { playerName });
//             });

//             socket.on("disconnect", () => {
//                 console.log("En användare kopplades bort:", socket.id);
//             });
//         });
//     } else {
//         console.log("Socket.io-server redan igång.");
//     }

//     res.end();
// }


import { NextApiRequest, NextApiResponse } from "next";
import { Server as IOServer } from "socket.io";
import { Server as HttpServer } from "http";

export async function GET(req: Request) {
  return new Response("Socket.io API is running", { status: 200 });
}

export async function POST(req: Request) {
    return new Response("Methods not allowed", {status: 405})
}

export async function handler(req: NextApiRequest, res: any) {
    if (!res.socket.server.io) {
        console.log("Startar Socket.io-server...");

        const httpServer: HttpServer = res.socket.server as any;
        const io = new IOServer(httpServer, {
            path: "/api/socketio",
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
            },
        });

        res.socket.server.io = io;

        io.on("connection", (socket) => {
            console.log("Ny användare ansluten:", socket.id);

            socket.on("joinGame", (gameId, playerName) => {
                socket.join(gameId);
                console.log(`${playerName} gick med i spelet ${gameId}`);
                io.to(gameId).emit("playerJoined", { playerName });
            });

            socket.on("disconnect", () => {
                console.log("En användare kopplades bort:", socket.id);
            });
        });
    } else {
        console.log("Socket.io-server redan igång.");
    }

    res.end();
}
