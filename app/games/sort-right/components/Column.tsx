import React from "react";
import { IColumn } from "../models/IColumn";
import { ICardObject } from "../models/ICard";
import CardObject from "./CardObject";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  column: IColumn;
  cards: ICardObject[];
}

const Column = ({ column, cards }: ColumnProps) => {
  const { setNodeRef } = useDroppable({ id: column.id });
  return (
    <>
      <div className="min-h-[450px] flex flex-col w-80 rounded-3xl bg-neutral-800 px-4 py-8">
        <h2 className="my-5 text-center font-semibold text-neutral-100">
          {column.title}
        </h2>
        <div ref={setNodeRef} className="flex flex-1 flex-col gap-2">
          {cards.map((card) => (
            <CardObject key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
