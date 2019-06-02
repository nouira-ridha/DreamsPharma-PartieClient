var mongoose=require('mongoose')
var galeries=mongoose.Schema( {
    nom:{
      type:String
    },
    produit:{type:mongoose.Schema.Types.ObjectId,ref:"produit"},


  },
  {
    timestamps:true
  })
var galerie=mongoose.model('galerie',galeries)
module.exports=galerie
