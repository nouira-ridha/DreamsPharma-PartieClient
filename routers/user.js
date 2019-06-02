var express = require('express')
var root = express.Router()
var userm = require('../models/userm')
var bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken')
var config = require('../config')
var vf = require('../verify')


root.post('/add', function (req, res) {
  userm.create({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    adresse: req.body.adresse,
    etat: req.body.etat,
    //listproduit: req.body.listproduit


  }, function (err, result) {
    if (err) throw err
    res.send(result)

  })

})


root.put('/app/:id', function (req, res) {

  console.log("hello itgate")
  userm.findByIdAndUpdate({_id: req.params.id}, {
      etat: 1
    }, function (err, result) {
      if (err) {

        res.send(err)
      }
      console.log("good")
      res.send(result)

    }
  )

})


root.get('/all', vf, function (req, res) {
  userm.find({},
    function (err, rslt) {
      if (err) throw  err
      res.send(rslt)
    }
  )
})


root.get('/byid', function (req, res) {

    console.log("okkkkk")
  userm.findById({_id:req.query.userId}, function (err, result) {
    if (err) {

        res.send(err)
    }
    res.send(result)

  })


})


root.put('/updt', function (req, res) {
  userm.findByIdAndUpdate(req.userId, {
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    adresse: req.body.adresse,
    etat: req.body.etat,
    listproduit: req.body.listproduit

  }, function (err, rslt) {
    if (err) throw err
    res.send(rslt)

  })

})


root.delete('/delt/:id', function (req, res) {
  userm.findByIdAndRemove(req.params.id,
    function (err) {
      if (err) {


        res.send({state: "no", msg: 'supp not succes'})

      }
      else {

        res.send({state: "yes", msg: 'supp succes'})

      }
    })
})

root.post('/loginuser', function (req, res) {
  userm.findOne({email: req.body.email}, function (err, result) {
    if (err) return res.json({auth: false, message: 'check your serveur'})
    if (!result) return res.json({auth: false, message: 'no user found'})
    var compar = bcrypt.compareSync(req.body.password, result['password'])
    if (!compar) return res.json({auth: false, message: 'wrong password'})
    token = jwt.sign({id: result['_id']}, config.secret)
    res.json({auth: true, token: token, data: result})

  })

})


module.exports = root
