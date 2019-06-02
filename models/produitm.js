var mongoose=require('mongoose')

var produits=mongoose.Schema({
    picture:{
        type:String
    },

    nom:{
        type:String
    },
    stock:{
      type: Number
    },
    indication: {
        type: String
    },
    presentation: {
        type: String
    },
    conseilutilisation: {
        type: String
    },
    contreindication: {
        type: String
    },
    prix:{
        type:Number
    },

      souscategorie:{type:mongoose.Schema.Types.ObjectId,ref:"souscategorie"},
    galerie:[{type:mongoose.Schema.Types.ObjectId,ref:"galerie"}],


  },


    {
        timestamps:true

    }
)
var produit=mongoose.model('produit',produits)

module.exports=produit
