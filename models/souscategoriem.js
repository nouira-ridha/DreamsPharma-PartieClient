var mongoose=require('mongoose')
var souscategories=mongoose.Schema( {
    nom:{
      type:String
    },
    categorie:{type:mongoose.Schema.Types.ObjectId,ref:"categorie"},
    produit:[{type:mongoose.Schema.Types.ObjectId,ref:"produit"}],


  },
  {
    timestamps:true
  })
var souscategorie=mongoose.model('souscategorie',souscategories)
module.exports=souscategorie
