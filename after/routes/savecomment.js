var express = require('express');
var router = express.Router();
var commentsdb = require("../db/commentsdb");


router.post('/', function (req, res, next) {
    //1、接收前端发来的数据
    let goodsid = req.body.goodsid;
    let comment = req.body.comment;

    // 获得当前时间
    let now = new Date();
    // 获得当前用户名
    let username = req.session.username;

    //2、链接数据库，添加数据
    commentsdb.add({
        "goodsid": goodsid,
        "username": username,
        "comment": comment,
        "commentdate": now
    }, function (isSuccess) {
        if (isSuccess) {
            //3、给前端响应
            res.redirect('details?goodsid='+goodsid)
        } else {
            res.send("评论失败！");
        }
    });
});

module.exports = router;
