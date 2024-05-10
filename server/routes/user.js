const express = require("express");
const router = express.Router();

const {updateProfile} = require('../controllers/updateProfile')
const {getAllData} = require('../controllers/getAllData');


router.get("/getAll",getAllData);
router.put('/profile/:userId',updateProfile)





module.exports = router;