// "use client";

// import Board from "@/app/games/sort-right/components/Board";
// import LeftPanel from "@/app/games/sort-right/components/LeftPanel";
// // import RightPanel from "@/app/games/advanced-sort/RightPanel";
// // import Board from "@/app/games/sort-right/components/Board";
// // import LeftPanel from "@/app/games/sort-right/components/LeftPanel";
// // import Board from "@/app/games/advanced-sort/Board";
// // import RightPanel from "@/app/games/advanced-sort/RightPanel";
// import React, { useState } from "react";

// const SortRight = () => {
//   const [joined, setJoined] = useState<boolean>(false);
//   const [playerOne, setPlayerOne] = useState<string>("");
//   const [playerTwo, setPlayerTwo] = useState<string>("");
//   const [players, setPlayers] = useState<string[]>([]);
//   const [currentPlayer, setCurrentPlayer] = useState<"playerOne" | "playerTwo">(
//     "playerOne"
//   );
//   const [scores, setScores] = useState<{
//     playerOne: number;
//     playerTwo: number;
//   }>({ playerOne: 0, playerTwo: 0 });

//   const switchTurn = () => {
//     setCurrentPlayer((prev) =>
//       prev === "playerOne" ? "playerTwo" : "playerOne"
//     );
//   };

//   const handleSetPlayer = () => {
//     if (playerOne && playerTwo) {
//       console.log("Spelare1: ", playerOne, " Spelare2: ", playerTwo);
//       setJoined(true);
//     }
//   };

//   const category = "heroes";

//   return (
//     <>
//       <div className="w-full flex gap-8 justify-center">
//         {!joined ? (
//           <div className="w-full max-w-3xl flex flex-col items-center mx-auto">
//             <h1 className="mb-4 text-2xl font-bold">Ange spelare</h1>
//             <label>Spelare 1</label>
//             <input
//               type="text"
//               placeholder="Ange namn"
//               value={playerOne}
//               onChange={(e) => setPlayerOne(e.target.value)}
//               className="w-64 px-4 py-2 mb-4 border-2 rounded-lg"
//             />
//             <label>Spelare 2</label>
//             <input
//               type="text"
//               placeholder="Ange namn"
//               value={playerTwo}
//               onChange={(e) => setPlayerTwo(e.target.value)}
//               className="w-64 px-4 py-2 mb-4 border-2 rounded-lg"
//             />
//             <button
//               onClick={handleSetPlayer}
//               className="px-4 py-2 text-white bg-blue-600 rounded-lg"
//             >
//               Starta spel
//             </button>
//           </div>
//         ) : (
//           <div className="w-full max-w-5xl flex flex-col items-center gap-6 mx-auto">
//             <div className="w-full py-6 bg-red-900 rounded-3xl">
//               <LeftPanel
//                 playerOne={playerOne}
//                 playerTwo={playerTwo}
//                 scores={scores}
//                 currentPlayer={currentPlayer}
//               />
//             </div>
//             <div className="w-full">
//               <Board
//                 currentPlayer={currentPlayer}
//                 switchTurn={switchTurn}
//                 setScores={setScores}
//                 category={category}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SortRight;
