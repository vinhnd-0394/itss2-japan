const express = require("express");
const questionRouter = require("./question-route");
const resultRouter = require("./result-route");
const testRouter = require("./test-route");
const userRouter = require("./user-route");
const router = express.Router();
router.use("/user", userRouter);
router.use("/test", testRouter);
router.use("/results", resultRouter);
router.use("/question", questionRouter);
// export router
module.exports = router;
