var mongoose=require('mongoose')
var cmndsh=mongoose.Schema( {
        nom:{
            type:String
        },
        SCAT:[]

    },
    {
        timestamps:true
    })
var cmnd=mongoose.model('categorie',cmndsh)
module.exports=cmnd