import dotenv from "dotenv";
import express, { Express } from "express";
import "express-async-errors";
import { errorHandlingMiddleware } from "./middlewares/errors-middleware.js";
import genreRouter from "./routers/genre-router.js";
import platformRouter from "./routers/platform-router.js";
import rankingRouter from "./routers/ranking-router.js";
import seriesRouter from "./routers/series-router.js";
dotenv.config();

const server: Express = express();
server.use(express.json());

server.use(seriesRouter);
server.use(rankingRouter);
server.use(platformRouter);
server.use(genreRouter);
server.use(errorHandlingMiddleware);

server.listen(4000, () => {
    console.log("Server running in port: 4000");
})