/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"
import useSWR from "swr";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import type { Event } from "~/interface";

     
export function EventTable({getData}: {getData: () => Promise<unknown>}) {
    const { data, error } = useSWR("/api/event", getData);
    console.log("data:", data)

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return <DataTable columns={columns} data={data as Event[]} />;
}