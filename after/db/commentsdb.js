const mongoose = require("mongoose");
const dbconn = require("./dbconn");
const commentsdb = require('../db/commentsdb');

//创建模板
let commentsSchema = new mongoose.Schema({
    "goodsid":String,
    "username":String,
    "comment":String,
    "commentdate":Date
});

//创建模型
let commentsmodel = dbconn.model("comments",commentsSchema);

module.exports = {
    "add":function (data,callback) {
        //实体
        let commentsEntity = new commentsmodel(data);
        commentsEntity.save((err,data)=>{
            if(err){
                console.log("保存评论出错："+err);
                callback(false);
            }else{
                callback(true);
            }
        });
    },
    "find":function (condation,callback) {
        commentsmodel.find(condation,(err,data)=>{
            if(err){
                console.log("查询评论出错："+err);
                callback([]);
            }else{
                callback(data);
            }
        });
    },
    "findByPageIndex":function (condation,pageIndex,callback) {
        commentsmodel.find(condation).count((err,count)=>{
            if(err){
                console.log("获得总记录数出错："+err);
            }else{
                console.log("总记录的条数："+count);
                //每页有10条记录
                //db.集合名.find().skip(5).limit(5);
                commentsmodel.find(condation,(err,data)=>{
                    if(err){
                        console.log("查询评论出错："+err);
                        callback([],0);
                    }else{
                        callback(data,Math.ceil(count/10));
                    }
                }).sort({"commentdate":-1}).skip((pageIndex-1)*10).limit(10);
            }
        });
    }
}