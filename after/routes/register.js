var express = require('express');
var router = express.Router();
var vipsdb = require("../db/vipdb");

router.get("/", function (req, res) {
    res.render("register", { "errmsg": "" });
});

router.post('/', function (req, res, next) {
    //1、接收数据（用户名，密码，年龄）
    let username = req.body.username;
    let userpass = req.body.userpass;

    //2、链接数据库，进行保存
    vipsdb.regsave({
        "username": username,
        "userpass": userpass
    }, function (isSuccess) {
        //3、响应
        if (isSuccess) {
            res.redirect("html/login.html");
        } else {
            res.render("register", { "errmsg": "注册失败" });
        }
    });
});

module.exports = router;