const express = require('express');
const router = express.Router();
const protectRoute = require('./../middleware/protectRoute');
const { getUsersForSidebar } = require('./../controllers/usercontroller');

router.get("/", protectRoute, getUsersForSidebar);

module.exports = router;
