var express = require('express');
var router = express.Router();
var vipsdb = require("../db/vipdb");

router.get("/", function (req, res) {
    //1、接收数据（用户名，密码）
    let username = req.query.username;

    //2、链接数据库，进行保存
    vipsdb.find({ "username": username }, function (data) {
        let t = data.length > 0 ? 1 : 0;
        res.send(String(t));
    })
});

module.exports = router;