"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import type { Event } from "~/interface";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { MoreHorizontal } from "lucide-react";
import { DetailsTable } from "../details-table.tsx/details-table";
import { detailsColumns } from "../details-table.tsx/columns";

export const columns: ColumnDef<Event>[] = [
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
      return (
        <div className="flex justify-between">
          {formatted}
          <Dialog>
            <DialogTrigger>
              <span className="sr-only">Open for more details</span>
              <MoreHorizontal className="h-4 w-4" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription asChild>
                  <DetailsTable
                    columns={detailsColumns}
                    data={[row.original]}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
