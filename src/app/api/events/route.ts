import { PrismaClient } from "@prisma/client";
import type { Event } from "~/interface";

const primsa = new PrismaClient();

export async function GET() {
  const events = await primsa.event.findMany();

  return Response.json({ events });
}

export async function POST(req: Request) {
  const body = (await req.json()) as Exclude<Event, "createdAt" | "updatedAt">;

  const createdEvent = await primsa.event.create({
    data: {
      object: body.object,
      actor_id: body.actor_id,
      actor_name: body.actor_name,
      group: body.group,
      target_id: body.target_id,
      target_name: body.target_name,
      location: body.location,
      occurred_at: body.occurred_at,
      action: {
        id: body.action.id,
        object: body.action.object,
        name: body.action.name,
      },
      metadata: {
        redirect: body.metadata.redirect,
        description: body.metadata.description,
        x_request_id: body.metadata.x_request_id,
      },
    },
  });

  return Response.json({createdEvent});
}
