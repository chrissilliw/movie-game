import { IPlayer } from "./IPlayer"

export interface IGameState {
    players: IPlayer[];
    scores: { [key: string]: number};
    totalScores: { [key: string]: number};
    joined: boolean;
    currentPlayerIndex: number;

    addPlayer: () => void;
    setPlayerName: (id: string, name: string) => void;
    handleSetPlayers: () => void;
    switchTurn: () => void;
    updateTotalScore: (id: string, points: number) => void;

 }