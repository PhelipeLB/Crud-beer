import {
  getGraphQLParameters,
  processRequest,
  sendResult,
} from "graphql-helix";

import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import router from "./router";

import { schema } from "./src/graphql/schema";

const app = new Koa();

app.use(bodyParser());
app.use(cors());

router.all("/graphql", async (ctx, next) => {
  const { request } = ctx;
  const { operationName, query, variables } = getGraphQLParameters(request);
  const result = await processRequest({
    operationName,
    query,
    variables,
    request,
    schema,
  });
  sendResult(result, ctx.res);
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
