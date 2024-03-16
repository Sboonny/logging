"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Event } from "~/interface";


export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "target_name",
    header: "ACTION",
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
        return  formatted
    }
  },
];
