const express = require("express");
const route = express.Router()
const {createuser, findall, loginuser, deleteuser, update} = require("../controller/Usercontrol")


route.post("/create", createuser)
route.get("/findall",findall)
route.post("/findall",loginuser)
route.delete("/delete/:id",deleteuser)
route.patch("/update/:id",update)


module.exports = route