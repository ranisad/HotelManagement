const router = require('express').Router();

router.use('/hotel',require('./../controller/hotel'));
router.use('/booking',require('./../controller/booking'));
router.use('/room',require('./../controller/room'));
router.use('/user',require("./../controller/user"));

module.exports=router;