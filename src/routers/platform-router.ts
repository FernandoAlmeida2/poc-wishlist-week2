import { Router } from "express";
import { getAllplatforms, postPlatform, updatePlatform } from "../controllers/platform-controller.js";
import { validateBody } from "../middlewares/validateMiddleware.js";
import { platformSchema } from "../schemas/platform-schema.js";

const platformRouter: Router = Router();

platformRouter.get("/platforms", getAllplatforms);
platformRouter.post("/platforms", validateBody(platformSchema), postPlatform);
platformRouter.put("/platforms/:id", validateBody(platformSchema), updatePlatform);

export default platformRouter;