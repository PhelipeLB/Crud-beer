import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  shouldRenderGraphiQL,
  sendResult
} from "graphql-helix";

import Koa from "koa";
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import { schema } from "./src/graphql/schema";

const app = new Koa();

app.use(bodyParser())
app.use(cors())

export default app.use(async ctx => {

  const { request } = ctx;

  if (shouldRenderGraphiQL(request)) {
    ctx.body = renderGraphiQL({});
    return;
  } 
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