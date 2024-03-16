/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { EventTable } from "./event-table";
async function getData() {
  "use server"
  // didn't create the route yet, I am getting invalid URL
  // Cause: TypeError [ERR_INVALID_URL]: Invalid URL
  const res = await fetch('/api/event', {
      method: 'GET',
  })
console.log("res:", res)
  if (!res.ok) {
      throw new Error('Failed to fetch data')
  }

  return res.json();
}

export default async function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <EventTable getData={getData} />
    </div>
  );
}
