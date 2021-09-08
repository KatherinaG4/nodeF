const {model,Schema}=require('mongoose')
const nodeSchema=new Schema({
    nodes:[
        {
            ip_send:{type:String, required:true},
            msg:{type:String, required:true}
        }
    ]
})
module.exports=model("nodes",nodeSchema)
