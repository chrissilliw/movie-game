import React from "react";
import { IHero } from "../models/IHero";
import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { useSortable } from "@dnd-kit/sortable";

interface CardProps {
  card: IHero;
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
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover: shadow:md"
      style={style}
    >
      <h3 className="font-medium text-neutral-100">{card.name}</h3>
    </div>
  );
};

export default CardObject;
