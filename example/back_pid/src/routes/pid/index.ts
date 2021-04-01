import { RouteShorthandOptions, RouteHandlerMethod } from 'fastify';

import { isCorrectThaiPid } from '../../utils/pid';

const schema: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    result: { type: 'boolean' },
                    correct_pid_is: { type: ['string', 'null'] },
                },
                require: ['result'],
            },
        },
    } as const,
};

const handler: RouteHandlerMethod = async (req, _reply) => {
    const pid = String(req.body);

    return {
        result: isCorrectThaiPid(pid),
    };
};

export const oReqGetCorrectPid = {
    schema,
    handler,
};
