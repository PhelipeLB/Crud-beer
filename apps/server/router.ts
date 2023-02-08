import Router from "koa-router";
import koaPlayground from "graphql-playground-middleware-koa";

const router = new Router();

router.all("/graphql/playground", koaPlayground({ endpoint: "/graphql" }));

export default router;
