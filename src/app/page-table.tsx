/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";
import type { Event } from "~/interface";
import { columns } from "../components/data-table/columns";
import { DataTable } from "../components/data-table/data-table";
import useSWR from "swr";

async function getEvent() {
  const response = await fetch("/api/events");
  return response.json();
}

export function PageTable() {
  const { data, error, isLoading } = useSWR("/api/events?limit=3", getEvent);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const { events }: { events: Event[] } = data;

  return <DataTable columns={columns} data={events ?? []} />;
}
