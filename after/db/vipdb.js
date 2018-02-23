//该文件的功能：针对集合（表）vips的所有的数据库操作

const dbconn = require("./dbconn");
const mongoose = require("mongoose");

//1、创建模板（对应于数据库中集合（表）结构）
let vipSchema = new mongoose.Schema({
   "username":String,
   "userpass":String
});

//2、创建模型model，把模板和数据库中的集合进行对应
let VipModel = dbconn.model("vips",vipSchema);

module.exports = {
    //注册
    "regsave":function (transdata,func) {
        //先在数据库中进行查询
        this.find({"username":transdata.username},(resdata)=>{
            if(resdata.length==0){//没有查到，就可以进行保存
                this.add(transdata,func);
            }else{//查到了，说明用户名已经存在，不能注册。
                func(false);
            }
        });
    },
    //插入一条数据
    "add":function (data,func) {
        //1、实体（要添加到数据库中数据（json对象））
        let vipEntity = new VipModel(data);
        vipEntity.save((err,data)=>{
            if(err){
                //console.log(err);
                func(false);
            }else{
                //console.log(data);
                func(true);
            }
        });
    },
    //查找
    "find":function (condation, func) {
        VipModel.find(condation,(err,data)=>{
            if(err){
                console.log(err, '哈哈哈');
                func([]);
            }else{
                func(data);
            }
        });
    }

}