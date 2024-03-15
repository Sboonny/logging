"use client";

import type { ColumnDef } from "@tanstack/react-table";

type EventAction = {
  id: string;
  object: string;
  name: string;
};
type Metadata = {
  redirect: string;
  description: string;
  x_request_id: string;
};

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Event = {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action: EventAction;
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: string;
  metadata: Metadata;
}

export type Columns = Pick<Event, "action" | "actor_name" | "occurred_at">;

export const columns: ColumnDef<Event>[] = [
  {
    accessorFn: (row) => row.action.name,
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
