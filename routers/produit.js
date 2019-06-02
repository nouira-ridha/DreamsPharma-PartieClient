var express = require('express')
var root = express.Router()
const multer = require('multer')
var produitm = require('../models/produitm')
var souscategoriem = require('../models/souscategoriem')
var bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken')
var config = require('../config')
var vf = require('../verify')


root.post('/add', function (req, res) {

  console.log("okkkkk")


  produitm.create({
      nom: req.body.nom,
      stock: req.body.stock,
      indication: req.body.indication,
      presentation: req.body.presentation,
      conseilutilisation: req.body.conseilutilisation,
      contreindication: req.body.contreindication,
      prix: req.body.prix,
      souscategorie: req.body.souscategorie,
      galerie: req.body.galerie,
      picture: req.body.picture



    },
    function (err, result) {
      if (err) throw err


      souscategoriem.findByIdAndUpdate(req.body.souscategorie, {$push:{ produit: result}


      }, function (err, rslt) {

        if (err) {

          //  res.send(err)
        }
        // res.send(rslt)

      })

      res.send(result)
    }
  )
})

root.get('/all', function (req, res) {
  produitm.find({})
    .populate("souscategorie")
    .populate("galerie")

    .then(function (result) {
      res.send(result)

    }).catch(function (err) {
    res.send(err)
  })

})

root.get('/byidsouscategorie/:souscategorie', function (req, res) {
  produitm.find({})
    .populate("souscategorie")

    .then(function (result) {
      res.send(result)

    }).catch(function (err) {
    res.send(err)
  })

})


root.get('/byid', function (req, res) {

  console.log("okkkkk")
  produitm.findById({_id: req.query.produitId})
    .populate("souscategorie")
    .then(function (result) {
      res.send(result)
    }).catch(function (err) {

    res.send(err)


  })


})
root.get('/byid2/:id', function (req, res) {
  produitm.findById(req.params.id)
    .populate("user")
    .then(function (result) {
      res.send(result)

    }).catch(function (err) {
    res.send(err)
  })

})
root.get('/byid3/:id', function (req, res) {
  produitm.findById(req.params.id)
    .populate({
      path: "user",
      select: "nom"
    })
    .then(function (result) {
      res.send(result)

    }).catch(function (err) {
    res.send(err)
  })

})
root.delete('/delt/:id', function (req, res) {
  produitm.findByIdAndRemove(req.params.id,
    function (err) {
      if (err) {


        res.send({state: "no", msg: 'supp not succes'})

      }
      else {

        res.send({state: "yes", msg: 'supp succes'})

      }
    })
})

root.put('/updt', function (req, res) {

  console.log(req.query.produitId)
  console.log({
      nom: req.body.nom,
      stock: req.body.stock,
      indication: req.body.indication,
      presentation: req.body.presentation,
      conseilutilisation: req.body.conseilutilisation,
      contreindication: req.body.contreindication,
      prix: req.body.prix,
      souscategorie: req.body.souscategorie,

    }
  )
  produitm.findByIdAndUpdate(req.query.produitId, {
    nom: req.body.nom,
    stock: req.body.stock,
    indication: req.body.indication,
    presentation: req.body.presentation,
    conseilutilisation: req.body.conseilutilisation,
    contreindication: req.body.contreindication,
    prix: req.body.prix,
    souscategorie: req.body.souscategorie,


  }, function (err, rslt) {
    if (err) throw err
    res.send(rslt)

  })

})

root.put('/updtimage', function (req, res) {

  console.log(req.query.produitId)
  console.log({
      galerie: req.body.galerie,
      picture: req.body.picture
    }
  )
  produitm.findByIdAndUpdate(req.query.produitId, {
    galerie: req.body.galerie,
    picture: req.body.picture

  }, function (err, rslt) {
    if (err) throw err
    res.send(rslt)

  })

})

root.get('/byidgalerie', function (req, res) {

  console.log("okkkkk")
  produitm.findById({_id: req.query.produitId})
    .populate("galerie")
    .then(function (result) {
      res.send(result.galerie)
    }).catch(function (err) {

    res.send(err)


  })


})

module.exports = root

