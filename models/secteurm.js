var mongoose=require('mongoose')
var secteurs=mongoose.Schema( {
    nom:{
      type:String
    },
    categorie:[{type:mongoose.Schema.Types.ObjectId,ref:"categorie"}],

  },
  {
    timestamps:true
  })
var secteur=mongoose.model('secteur',secteurs)
module.exports=secteur
