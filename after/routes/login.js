var express = require('express');
var router = express.Router();
var vipsdb = require("../db/vipdb");

router.post('/', function (req, res, next) {
    //1、接收数据（用户名，密码，年龄）
    let username = req.body.username;
    let userpass = req.body.userpass;

    //2、链接数据库，进行保存
    vipsdb.find({
        "username": username,
        "userpass": userpass
    }, function (data) {
        if (data.length == 0) {
            //先渲染模板，然后把渲染的结果响应给前端
            res.render("login", { "errmsg": "账户名或密码错误，请重新输入！" });
        } else {
            //用session保存了一个变量username，这个username保存到服务器端的内存里
            // req.session.username = username;
            //记录cookie，这是服务器端执行的代码。这个username保存前端硬盘上。
            // res.cookie("username", username);
            //res.redirect("index.html");
            res.redirect("index.html");
        }
    });
});

module.exports = router;