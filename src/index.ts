import { Elysia } from "elysia";
import postRouter from "./routers/postRouter";

const app = new Elysia()

app.group('/api', (app)=> app.use(postRouter))
app.listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
