const express = require('express');
const router = express.Router();

const roomsApi = require('../../../controllers/api/v1/rooms_api')


router.get('/rooms',roomsApi.roomsData)
router.use('/user',require('../v1/users'))

module.exports = router;