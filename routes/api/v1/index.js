const express = require('express');
const router = express.Router();

const roomsApi = require('../../../controllers/api/v1/rooms')


router.get('/rooms',roomsApi.roomsData)

module.exports = router;