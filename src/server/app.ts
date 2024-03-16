import Fastify, {
  type FastifyBaseLogger,
  type FastifyHttpOptions,
  type RawServerDefault
} from 'fastify';



export const build = async (
  options: FastifyHttpOptions<RawServerDefault, FastifyBaseLogger> = {}
) => {
    const fastify = Fastify(options);



  return fastify;
};