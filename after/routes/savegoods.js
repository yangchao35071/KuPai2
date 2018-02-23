var express = require('express');
var router = express.Router();
var goodslistsdb = require("../db/goodlistsdb");


router.post('/', function(req, res, next) {
  //1、接收前端发来的数据
    let goodsid    = req.body.goodsid;
    let goodsname  = req.body.goodsname;
    let goodsprice = req.body.goodsprice;
    let goodscount = req.body.goodscount;
    let goodsrule  = req.body.goodsrule;
    let goodspic1   = req.body.goodspic1;
    let goodspic2   = req.body.goodspic2;

    //2、链接数据库，添加数据
    goodslistsdb.add({
        "goodsid":   goodsid,
        "goodsname": goodsname ,
        "goodsprice":goodsprice,
        "goodscount":goodscount,
        "goodsrule": goodsrule ,
        "goodspic1":goodspic1,
        "goodspic2":goodspic2
    },function (isSuccess) {
        if(isSuccess){
            //3、给前端响应
            res.send("添加成功，<a href='../html/addGoods.html'>继续添加</a>");
        }else{
            res.send("添加失败，<a href='../html/addGoods.html'>重新添加</a>");
        }
    });
});

module.exports = router;
