import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Event } from "~/interface";

const prisma = new PrismaClient();

export default async function eventHandler(
  req: NextApiRequest,
  res: NextApiResponse<Event>,
) {
  const { body, method }: { body: Event; method?: string } = req as {
    body: Event;
    method?: string;
  };
  const actionId = body.action_id;
  const metadata_id = body.metadata_id;

  if (method === "GET") {
    const events = await prisma.event.findMany({
      take: 3,
    });

    return events;
  }

  if (method === "POST") {
    const action = await prisma.eventAction.findUniqueOrThrow({
      where: { action_id: actionId },
    });

    const metadata = await prisma.metadata.findUniqueOrThrow({
      where: { x_request_id: metadata_id },
    });

    const createdEvent = await prisma.event.create({
      data: {
        object: body.object,
        actor_id: body.actor_id,
        actor_name: body.actor_name,
        group: body.group,
        action_id: body.action_id,
        target_id: body.target_id,
        target_name: body.target_name,
        location: body.location,
        occurred_at: body.occurred_at,
        metadata_id: body.metadata_id,
        action: {
          connect: { action_id: action.action_id },
        },
        metadata: {
          connect: { x_request_id: metadata.x_request_id },
        },
      },
    });

   return createdEvent;
  }
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
