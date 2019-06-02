var express=require('express')
var root=express.Router()
var adminm=require('../models/adminm')
var bcrypt=require("bcryptjs")
var jwt=require('jsonwebtoken')
var config=require('../config')
var vf=require('../verify')


root.post('/add',function (req,res) {
    adminm.create({
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,10)

    },function (err,result) {
        if (err) throw err
        res.send(result)

    })

})
root.get('/all',vf,function (req,res) {
    adminm.find({},
        function (err,rslt) {
            if (err) throw  err
            res.send(rslt)
        }
    )
})
root.get('/byid',vf,function (req,res) {

    adminm.findById(req.query.userId,function (err,rslt) {
        if (err) throw err
        res.send(rslt)

    })


})
root.put('/updt',function (req,res) {
    adminm.findByIdAndUpdate(req.query.userId,{
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,10)

    },function (err,rslt) {
        if (err) throw err
        res.send(rslt)

    })

})
/*root.delete('/delt/:id',function (req,res) {
    adminm.findByIdAndRemove(req.params.id,
        function (err) {
            if (err) throw err
            res.send('supp succes')

        }
    )
})*/
root.post('/login',function (req,res) {
    adminm.find({email:req.body.email,password:req.body.password},
        function (err,rslt) {
            if (err) throw err
            res.send(rslt)

        }
    )

})
root.post('/login2',function (req,res) {
    adminm.findOne({email:req.body.email},function (err,result) {
        if(err) return res.json({auth:false,message:'check your serveur'})
        if(!result) return res.json({auth:false,message:'no user found'})
        var compar=bcrypt.compareSync(req.body.password,result['password'])
        if (!compar) return res.json({auth:false,message:'wrong password'})
        token=jwt.sign({id:result['_id']},config.secret)
        res.json({auth:true,token:token,data:result})

    })

})


module.exports=root
