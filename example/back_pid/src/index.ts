import Fastify, { FastifyInstance } from 'fastify';

export const app: FastifyInstance = Fastify({ logger: true });

import './routes';

(async () => {
    try {
        await app.listen(process.env.PORT || 3000);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
})();
