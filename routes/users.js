var express = require("express");
var router = express.Router();
const {
  getShirt,
  getShirtById,
  addShirt,
  updateShirt,
  deleteShirt,
} = require("../controller/shirts/shirtsController");

/* GET users listing. */
router.get("/getShirt", getShirt);
router.get("/getShirt/:id", getShirtById);
router.post("/addShirt", addShirt);
router.put("/updateShirt/:id", updateShirt);
router.delete("/deleteShirt/:id", deleteShirt);
module.exports = router;
