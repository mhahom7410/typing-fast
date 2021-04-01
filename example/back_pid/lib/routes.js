"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pid_1 = require("./routes/pid");
const _1 = require(".");
_1.app.get('/pid', pid_1.oReqGetCorrectPid.schema, pid_1.oReqGetCorrectPid.handler);
//# sourceMappingURL=routes.js.map