import { Router } from "express";
import { getAllGenres, postGenre, updateGenre } from "../controllers/genre-controller.js";
import { validateBody } from "../middlewares/validateMiddleware.js";
import { genreSchema } from "../schemas/genre-schema.js";

const genreRouter: Router = Router();

genreRouter.get("/genres", getAllGenres);
genreRouter.post("/genres", validateBody(genreSchema), postGenre);
genreRouter.put("/genres/:id", validateBody(genreSchema), updateGenre);

export default genreRouter;