import React from "react";
import { ICardObject } from "../models/ICard";
import { useDraggable } from "@dnd-kit/core";

interface CardProps {
  card: ICardObject;
}

const CardObject = ({ card }: CardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  //   const { attributes, listeners, setNodeRef, transform } = useSortable({
  //     id: card.id,
  //   });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`cursor-grab rounded-xl py-5 px-4 shadow-sm hover: shadow:md ${
        card.status === "correct"
          ? "bg-green-500"
          : card.status === "incorrect"
          ? "bg-red-500"
          : "bg-neutral-700"
      }`}
      style={style}
    >
      <h3 className="font-medium text-neutral-100">{card.name}</h3>
    </div>
  );
};

export default CardObject;
