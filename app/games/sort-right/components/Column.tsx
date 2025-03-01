import React from "react";
import { IColumn } from "../models/IColumn";
import { IHero } from "../models/IHero";
import CardObject from "./CardObject";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  column: IColumn;
  cards: IHero[];
}

const Column = ({ column, cards }: ColumnProps) => {
  const { setNodeRef } = useDroppable({ id: column.id });
  return (
    <>
      <div className="flex flex-col w-80 rounded-lg bg-neutral-800 p-4">
        <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
        <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
          {cards.map((card) => (
            <CardObject key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
