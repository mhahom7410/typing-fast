"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
exports.app = fastify_1.default({ logger: true });
require("./routes");
(async () => {
    try {
        await exports.app.listen(process.env.PORT || 3000);
    }
    catch (err) {
        exports.app.log.error(err);
        process.exit(1);
    }
})();
//# sourceMappingURL=index.js.map