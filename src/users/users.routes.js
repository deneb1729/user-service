import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/", (req, res) => {
    res.json({
        msg: "create new user",
    });
});

router.get("/:id", (req, res) => {
    res.json({
        msg: "get user by id",
        id: req.params.id,
    });
});

router.put("/:id", (req, res) => {
    res.json({
        msg: "update user by id",
        id: req.params.id,
    });
});

router.delete("/:id", (req, res) => {
    res.json({
        msg: "delete user by id",
        id: req.params.id,
    });
});

export default router;
