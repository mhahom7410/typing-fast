"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oReqGetCorrectPid = void 0;
const pid_1 = require("../../utils/pid");
const schema = {
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
    },
};
const handler = async (req, _reply) => {
    const pid = String(req.body);
    return {
        result: pid_1.isCorrectThaiPid(pid),
    };
};
exports.oReqGetCorrectPid = {
    schema,
    handler,
};
//# sourceMappingURL=index.js.map