import type { FastifyInstance, FastifyPluginOptions, FastifyError } from "fastify";
import { Event, EventWithRelations } from "~/interface";

export function eventRoutes(fastify: FastifyInstance, _options: FastifyPluginOptions, done: (error?: FastifyError) => void) {

    fastify.get('/event', async (_request, _reply) => {
        const events = await fastify.prisma.event.findMany({
            take: 3,
        });

        return events;
    });

    // fastify.post('/event', async (request, _reply) => {
    //     const body = request.body as EventWithRelations;
    //     const actionId = body.action_id;
    //     const metadata_id = body.metadata_id;

    //     const action = await fastify.prisma.eventAction.findUniqueOrThrow({
    //         where: { action_id: actionId },
    //     });

    //     const metadata = await fastify.prisma.metadata.findUniqueOrThrow({
    //         where: { x_request_id: metadata_id },
    //     });

    //     const createdEvent = await fastify.prisma.event.create({
        // ToDo: fix the type error with it being undefined an null
    //         data: {
    //             object: body.object,
    //             actor_id: body.actor_id,
    //             actor_name: body.actor_name,
    //             group: body.group,
    //             action_id: body.action_id,
    //             target_id: body.target_id,
    //             target_name: body.target_name,
    //             location: body.location,
    //             occurred_at: body.occurred_at,
    //             metadata_id: body.metadata_id,
    //             action: { connect: { action_id: action.action_id } },
    //             metadata: { connect: { x_request_id: metadata.x_request_id } },
    //         },
    //     });

    //     return createdEvent;
    // });

    done();
}