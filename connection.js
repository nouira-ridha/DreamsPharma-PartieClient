var mongoose=require('mongoose')
var con=mongoose.connect("mongodb://localhost:27017/itgate",{ useNewUrlParser: true } ,function (err) {
  if (err) throw err
  console.log('db on')

})
module.exports=con
