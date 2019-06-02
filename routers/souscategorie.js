var express=require('express')
var root=express.Router()
var souscategoriem=require('../models/souscategoriem')
var categoriem=require('../models/categoriem')
var bcrypt=require("bcryptjs")
var jwt=require('jsonwebtoken')
var config=require('../config')
var vf=require('../verify')

root.post('/add',function (req,res) {
  console.log(req.body)
  souscategoriem.create({
    nom:req.body.nom,
    categorie:req.body.categorie


  },function (err,result) {
    if (err) throw err
    categoriem.findByIdAndUpdate(req.body.categorie, {$push:{ souscategorie: result}


    }, function (err, rslt) {

      if (err) {

        //  res.send(err)
      }
      // res.send(rslt)

    })
    res.send(result)

  })

})
root.get('/all',function (req,res) {
  souscategoriem.find({})
    .populate("categorie")
    .then(function (result) {
      res.send(result)

    }).catch(function(err){
    res.send(err)
  })

})

root.get('/byidsouscategorie',function (req,res) {

  console.log("okkkkk")
  souscategoriem.findById({_id:req.query.produitId})
    .populate("categorie")
    .then(function (result) {
      res.send(result)
    }).catch(function (err){

    res.send(err)


  })


})

root.get('/allsouscategorie/:id',function (req,res) {

  console.log("okkkkk")
  souscategoriem.find({categorie: req.params.id})
    .then(function (result) {
      res.send(result)
    }).catch(function (err){

    res.send(err)


  })


})

root.post('/byid/:idscat',function (req,res) {

  souscategoriem.findById(req.params.idscat,function (err,rslt) {
    if (err) throw err
    rslt['cat'].push(req.body.cat)

    rslt.save(function (err,result) {
      if (err) throw err
      res.send(result)

    })


  })


})
root.put('/updt',function (req,res) {
  souscategoriem.findByIdAndUpdate(req.souscategorieId,{
    nom:req.body.nom,
    categorie:[req.body.categorie]


  },function (err,rslt) {
    if (err) throw err
    res.send(rslt)

  })

})
root.put('/updt2', function (req, res) {

  console.log(req.body._id, {
    nom: req.body.nom,
    produit: req.body.produit,

  })
  souscategoriem.findByIdAndUpdate(req.body._id, {
    nom: req.body.nom,
    produit: req.body.produit,

  }, function (err, rslt) {

    if (err) {

      res.send(err)
    }
    res.send(rslt)

  })

})
root.delete('/delt/:id',function (req,res) {
  souscategoriem.findByIdAndRemove(req.params.id,
    function (err) {
      if (err) throw err
      res.send('supp succes')

    }
  )
})

root.get('/byidsous', function (req, res) {

  console.log("okkkkk")
  souscategoriem.findById({_id: req.query.souscategorieId})
    .populate("souscategorie")
    .populate("produit")
    .then(function (result) {
      res.send(result)
    }).catch(function (err) {

    res.send(err)


  })


})



module.exports=root
