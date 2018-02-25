var express = require('express');
var router = express.Router();
var goodslistsdb = require("../db/goodlistsdb");


router.get('/', function (req, res, next) {

    //1、链接数据库，查询所有的商品
    goodslistsdb.find({}, function (data) {
        //2、用查询到的数据渲染模板，并响应给前端
        res.render("list", { "title": "商品列表", "goodslist": data });
    });
});

module.exports = router;
