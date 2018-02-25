const mongoose = require("mongoose");
const dbconn = require("./dbconn");

//创建模板
let goodslistsSchema = new mongoose.Schema({
    "goodsid":String,
    "goodsname":String,
    "goodsprice":Number,
    "goodscount":Number,
    "goodsrule":String,
    "goodspic1":String,
    "goodspic2":String,
    "goodspic3":String
});

//创建模型
let goodslistsmodel = dbconn.model("goodslists",goodslistsSchema);

module.exports = {
    "add":function (data,callback) {
        //创建实体
        let goodslistsEntity = new goodslistsmodel(data);
        goodslistsEntity.save((err,data)=>{
            if(err){
               console.log(err);
                callback(false);
            }else{
                callback(true);
            }
        });
    },
    "find":function (condation,callback) {
        goodslistsmodel.find(condation,(err,data)=>{
            if(err){
                callback([]);
            }else{
                callback(data);
            }
        });
    }
    
}