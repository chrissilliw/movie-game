import React from "react";
import { motion } from "framer-motion";
import { IHero } from "../xxxmodels/IHero";
import DropIndicator from "./DropIndicator";

interface CardProps {
  card: IHero;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, card: IHero) => void;
}

const CardObject = ({ card, handleDragStart }: CardProps) => {
  return (
    <>
      <DropIndicator beforeId={card.id} column={card.column} />
      <motion.div
        layout
        layoutId={card.id}
        draggable={true}
        onDragStart={(e) => handleDragStart(e, card)}
        className="flex-1 space-y-1 py-2 px-4 cursor-grab rounded-lg border border-neutral-700 bg-slate-50 active:cursor-grabbing"
      >
        <p className="">{card.name}</p>
      </motion.div>
    </>
  );
};

export default CardObject;
