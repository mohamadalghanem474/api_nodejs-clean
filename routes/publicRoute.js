const express = require('express');

const {downloadBackup,BackUp} = require('../utils/tools/backUpDataBase');

const router = express.Router();


router.get('/BackUp',BackUp );
router.get('/downloadBackup/:filename',downloadBackup)

module.exports = router;
