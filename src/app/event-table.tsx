/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";
import type { Event } from "~/interface";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import useSWR from "swr";

async function getEvent() {
  const response = await fetch("/api/events");
  return response.json();
}

export function EventTable() {
  const { data, error, isLoading } = useSWR("/api/events", getEvent);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const { events }: { events: Event[] } = data;

  return <DataTable columns={columns} data={events ?? []} />;
}
