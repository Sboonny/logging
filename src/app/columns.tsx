"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { StrokeIcon } from "~/components/icons/stroke";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import type { Event } from "~/interface";

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "target_name",
    header: "ACTOR",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-gradient-to-br from-[#F3994A] to-[#B325E2] text-white font-bold" aria-hidden="true">{row.original.actor_name.charAt(0)}</AvatarFallback>
          </Avatar>
          {row.original.target_name}
        </div>
      );
    },
  },
  {
    accessorKey: "action.name",
    header: "ACTION",
  },
  {
    accessorKey: "occurred_at",
    header: "DATE",
    cell: ({ row }) => {
      const formatted = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(row.original.occurred_at));
      return <div className="flex justify-between">{formatted} <StrokeIcon /></div>;
    },
  },
];
