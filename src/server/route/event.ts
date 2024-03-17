import type {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyError,
} from "fastify";
import { type Event } from "../../interface";

export function eventRoutes(
  fastify: FastifyInstance,
  _options: FastifyPluginOptions,
  done: (error?: FastifyError) => void,
) {
  fastify.get("/event", async (_request, _reply) => {
    const events = await fastify.prisma.event.findMany({
      take: 3,
    });

    return events;
  });

  fastify.post("/event", async (request, _reply) => {
    const body = request.body as Exclude<Event, "createdAt" | "updatedAt">;
    const createdEvent = await fastify.prisma.event.create({
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

    return createdEvent;
  });

  done();
}
