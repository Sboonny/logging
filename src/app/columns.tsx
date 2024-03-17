"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import type { Event } from "~/interface";

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "target_name",
    header: "ACTION",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-gradient-to-br from-[#F3994A] to-[#B325E2] text-white font-bold">{row.original.actor_name.charAt(0)}</AvatarFallback>
          </Avatar>
          {row.original.target_name}
        </div>
      );
    },
  },
  {
    accessorKey: "actor_name",
    header: "ACTOR",
  },
  {
    accessorKey: "occurred_at",
    header: "DATE",
    cell: ({ row }) => {
      const formatted = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(row.original.occurred_at));
      return formatted;
    },
  },
];
