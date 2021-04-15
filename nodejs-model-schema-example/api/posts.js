const express = require("express");

const router = express.Router();

const {PostsCtrl} = require("../controllers");

router.get("/", PostsCtrl.get);
/*
router.get("/:id" )

router.post("/", );

*/

module.exports = router;

