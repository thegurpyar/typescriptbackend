import { createUser, getUsers, updateUser, deleteUser } from "../controllers/UserController.js";
import { Router } from "express";
const router = Router();
router.post("/", createUser);
router.get("/", getUsers);
router.put("/", updateUser);
router.delete("/", deleteUser);
export default router;
//# sourceMappingURL=UserRoutes.js.map