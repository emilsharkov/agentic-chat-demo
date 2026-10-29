import express from 'express';
import { InversifyExpressHttpAdapter } from '@inversifyjs/http-express';
import { getAppModule } from './appModule.ts'
import type { Container } from 'inversify';

const container: Container = getAppModule();
const adapter: InversifyExpressHttpAdapter = new InversifyExpressHttpAdapter(container);
const app: express.Application = await adapter.build();
app.listen(3000, () => console.log("Server listening on port 3000"));