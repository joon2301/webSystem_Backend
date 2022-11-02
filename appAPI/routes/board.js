var express = require('express');
var router = express.Router();
const board = require("../controller/board.controller")

// 도메인/api/users/ 주소
router.get('/view/:postID', board.findByID);
router.post('/upload',board.create)
router.put('/modify',board.update)
router.delete('/delete/:postID',board.delete)

module.exports = router;