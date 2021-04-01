import { oReqGetCorrectPid } from './routes/pid';

import { app } from '.';

app.get('/pid', oReqGetCorrectPid.schema, oReqGetCorrectPid.handler);
