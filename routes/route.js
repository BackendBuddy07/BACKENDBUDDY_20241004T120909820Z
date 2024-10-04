const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// preetSchema routes
const { createPreetSchema, updatePreetSchema, deletePreetSchema, getPreetSchema, getAllPreetSchema } = require('../controllers/preetschema');
// 
router.post("/preetschema/create", checkAuthorizationHeaders,authorizeUser("createpreetSchema") ,createPreetSchema);
router.put("/preetschema/update/:id", checkAuthorizationHeaders,authorizeUser("updatepreetSchema"), updatePreetSchema);
router.delete("/preetschema/delete/:id", checkAuthorizationHeaders, authorizeUser("deletepreetSchema"), deletePreetSchema);
router.get("/preetschema/get/:id", checkAuthorizationHeaders, authorizeUser("readpreetSchema"), getPreetSchema);
router.get("/preetschema/getAll", checkAuthorizationHeaders, authorizeUser("readpreetSchema"), getAllPreetSchema);

  
module.exports = router;
