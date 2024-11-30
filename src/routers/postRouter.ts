import { Elysia } from "elysia";
import { getAllPost, getPostId, createPost, updatePost, deletePost } from "../controllers/postController";

const router = new Elysia({ prefix: "/post" });

router.get("/", getAllPost)
router.get("/:id", getPostId)
router.post("/", createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)

export default router