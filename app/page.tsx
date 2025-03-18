"use client";

import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import TestComponent from "./components/TestComponent";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IPlayer } from "./models/IPlayer";
import { useGameStore } from "./stores/gameStore";
import GameSelectContainer from "./components/GameSelectContainer";

export default function Home() {
  const {
    players,
    scores,
    joined,
    currentPlayerIndex,
    setPlayerName,
    addPlayer,
    handleSetPlayers,
  } = useGameStore();

  return (
    <>
      <div className="w-full flex gap-8 justify-center">
        {!joined ? (
          <div className="w-full max-w-3xl flex flex-col items-center max-auto">
            <h1>Ange spelare:</h1>
            {players.map((player, index) => (
              <div key={index} className="flex flex-col gap-2">
                <label>Spelare {index + 1}</label>
                <input
                  type="text"
                  placeholder="Ange namn"
                  value={player.name}
                  onChange={(e) => setPlayerName(player.id, e.target.value)}
                  className="w-64 px-4 py-2 mb-4 border-2 rounded-lg"
                />
              </div>
            ))}
            {players.length >= 4 ? (
              ""
            ) : (
              <button
                onClick={addPlayer}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg"
              >
                Lägg till spelare
              </button>
            )}
            <button
              onClick={handleSetPlayers}
              className="mt-4 px-4 py-2 text-white bg-green-500 rounded-lg"
            >
              Starta spelet
            </button>
          </div>
        ) : (
          <div>
            <GameSelectContainer />
          </div>
        )}
      </div>
    </>
  );
}
