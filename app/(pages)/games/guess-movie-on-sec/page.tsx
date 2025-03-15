"use client";

import { IPlayer } from "@/app/models/IPlayer";
import App from "next/app";
import React, { useState } from "react";

const GuessMovieOnSecs = () => {
  const [joined, setJoined] = useState<boolean>(false);
  const [player, setPlayer] = useState<IPlayer[]>([]);
  const [playerGroup, setPlayerGroup] = useState<string[]>([]);
  const [playerTwo, setPlayerTwo] = useState<string>("");
  return <div>Gissa filmer på X sekunder</div>;
};

export default GuessMovieOnSecs;

/*
app
    (auth)
    (pages)
        games 
            sorting-game
            guess-movie-game
            
    games
        sorting-game
            components
            data
                Heroes.ts
                Oscars.ts
            models
                ICard.ts
                IColumn.ts
    page.tsx
    layout.tsx

*/
