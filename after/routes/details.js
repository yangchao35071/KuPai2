var express = require('express');
var router = express.Router();
var goodslistsdb = require("../db/goodlistsdb");
// var commentsdb = require("../db/commentsdb");


router.get('/', function (req, res, next) {
    //1、接收前端传来的数据（goodsid）
    const goodsid = req.query.goodsid;
    console.log(goodsid);
    // var pageindex = req.query.pageindex || 1;
    // if(!pageindex){
    //     pageindex = 1;
    // }
    //1、链接数据库，查询所有的商品和商品的评论
    //1)、查询商品详情
    goodslistsdb.find({ "goodsid": goodsid }, function (details) {
        res.render('details',{'title':'商品详情','goodslist':details[0]});
        //2)、查询商品的评论
        // commentsdb.findByPageIndex({ "goodsid": goodsid }, pageindex, function (comments, maxpageindex) {
        //     let showcomment = req.session.username ? "block" : "none";
        //     res.render("goodsdetail", {
        //         "title": "商品详情",
        //         "goodslists": goodslists[0],
        //         "comments": comments,
        //         "showcomment": showcomment,
        //         "page": {
        //             "maxPageIndex": maxpageindex,
        //             "currPageIndex": pageindex
        //         }
        //     });
        // });
    });
});

module.exports = router;