import Fastify, {
  type FastifyBaseLogger,
  type FastifyHttpOptions,
  type RawServerDefault
} from 'fastify';
import { eventRoutes } from './route/event';
import prismaPlugin from './db';

const build = async (
  options: FastifyHttpOptions<RawServerDefault, FastifyBaseLogger> = {}
) => {
    const fastify = Fastify(options);

    await fastify.register(prismaPlugin);
    await fastify.register(eventRoutes);

  return fastify;
};

const start = async () => {
  const fastify = await build();
  try {
    fastify.log.info(`Starting server on port 8000`);
    await fastify.listen({ port: 8000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

void start();