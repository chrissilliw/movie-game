"use client";

import { useState } from "react";
import { useSocket } from "../hooks/useSocket";

const Lobby = () => {
  const socket = useSocket();
  const [gameId, setGameId] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [joined, setJoined] = useState<boolean>(false);

  const joinGame = () => {
    console.log(socket);
    if (socket && gameId && playerName) {
      socket.emit("joinGame", gameId, playerName);
      setJoined(true);
      console.log("funka");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>Gå med i ett spel</h1>
      {!joined ? (
        <>
          <input
            type="text"
            placeholder="Spel-ID"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            className="py-2 px-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Ditt namn"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="py-2 px-3 border rounded-lg"
          />
          <button
            onClick={joinGame}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg"
          >
            Gå med i spelet
          </button>
        </>
      ) : (
        <p>Test</p>
      )}
    </div>
  );
};

export default Lobby;
