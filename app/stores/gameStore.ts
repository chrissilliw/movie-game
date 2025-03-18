import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { IPlayer } from "../models/IPlayer";
import { IGameState } from "../models/IGameState";

export const useGameStore = create<IGameState>() (
    persist(
        (set) => ({
            players: [{ id: uuidv4(), name: "", profileImage: "", totalScore: 0}],
            scores: {}, 
            totalScores: {},
            joined: false,
            currentPlayerIndex: 0,

            addPlayer: () => 
                set( (state) => ({
                    players: [...state.players, { id: uuidv4(), name: "", profileImage: "default.png"}]
                })),

            setPlayerName: (id, name) => 
                set( (state) => ({
                    players: state.players.map( (player) => 
                        player.id === id ? {...player, name }: player),
                })),

            handleSetPlayers: () =>
                set( (state) => {
                    if (state.players.every( (player) => player.name.trim() !== "")) {
                        const initialScores: { [key: string]: number} = {};
                        state.players.forEach( (player) => (initialScores[player.id] = 0));
        
                        return { scores: initialScores, joined: true};
                    } else {
                        alert("Alla spelare måste ange ett namn!");
                        return {};
                    }
                }),

            // updateTotalScore: () =>
            //     set( (state) => {
            //         const newPlayers = state.players.map( (player) => ({
            //             ...player,
            //             totalScore: player.totalScore + (state.scores[player.id] || 0),
            //         }));
            //         return { players: newPlayers, scores: {} };
            //     }),

            // updateTotalScore: () =>
            //     set((state) => {
            //       const newTotalScores = { ...state.totalScores };
              
            //       state.players.forEach((player) => {
            //         newTotalScores[player.id] =
            //           (newTotalScores[player.id] || 0) + (state.scores[player.id] || 0);
            //       });
              
            //       return { totalScores: newTotalScores, scores: {} };
            //     }),

            updateTotalScore: (playerId: string, points: number) =>
                set((state) => ({
                  scores: {
                    ...state.scores,
                    [playerId]: (state.scores[playerId] || 0) + points,
                  },
                  totalScores: {
                    ...state.totalScores,
                    [playerId]: (state.totalScores[playerId] || 0) + points,
                  },
                })),

            switchTurn: () => 
                set( (state) => ({
                    currentPlayerIndex: (state.currentPlayerIndex + 1) % state.players.length,
                }))
        }),
        {
            name: "game-storage",
            storage: createJSONStorage( () => localStorage),
        }
    )
);
