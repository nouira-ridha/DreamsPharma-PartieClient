var mongoose=require('mongoose')
var validator=require('validator')
var admins=mongoose.Schema({

    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    email: {
        type: String,
        unique:true,
        validator:validator.isEmail,
        message:'{VALUE} is not valid email',
        isAsync:false
    },
    password: {
        type: String
    }

},

{
    timestamps:true

})
var admin=mongoose.model('admin',admins)

module.exports=admin