import { IGame } from "../models/IGame";
import SortRight from "../games/sort-right/SortRight";

export const games: IGame[] = [
    {
        id: "game1",
        title: "Sort Right", 
        description: "Sortera objekten i rätt ordning!",
        // image: "",
        component: SortRight,
    },

]