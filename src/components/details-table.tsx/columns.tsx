"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

import type { Event } from "~/interface";

export const detailsColumns: ColumnDef<Event>[] = [
  {
    accessorKey: "target_name",
    header: "ACTOR",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback
              className="bg-gradient-to-br from-[#F3994A] to-[#B325E2] font-bold text-white"
              aria-hidden="true"
            >
              {row.original.actor_name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          {row.original.target_name}
        </div>
      );
    },
  },
  {
    header: "ACTION",
    cell: ({ row }) => {
      return (
        <div className="grid grid-cols-2">
          <span>name</span>
          <span>{row.original.action.name}</span>
          <span>Object</span>
          <span>{row.original.action.object}</span>
          <span>ID</span>
          <span>{row.original.action.id}</span>
        </div>
      );
    }
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
