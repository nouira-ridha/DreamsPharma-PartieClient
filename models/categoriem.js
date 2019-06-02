var mongoose=require('mongoose')
var categories=mongoose.Schema( {
        nom:{
            type:String
        },
    souscategorie:[{type:mongoose.Schema.Types.ObjectId,ref:"souscategorie"}],
    secteur:{type:mongoose.Schema.Types.ObjectId,ref:"secteur"},


  },
    {
        timestamps:true
    })
var categorie=mongoose.model('categorie',categories)
module.exports=categorie
