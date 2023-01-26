import Koa from "koa";

const app = new Koa();

export default app.use(async ctx => {
  ctx.body = 'Hello World';
});