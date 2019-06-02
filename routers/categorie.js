var express=require('express')
var root=express.Router()
var categoriem=require('../models/categoriem')
var secteurm=require('../models/secteurm')
var bcrypt=require("bcryptjs")
var jwt=require('jsonwebtoken')
var config=require('../config')
var vf=require('../verify')

root.post('/add',function (req,res) {
  categoriem.create({
    nom:req.body.nom,
    secteur:req.body.secteur


  },function (err,result) {
    if (err) throw err
    secteurm.findByIdAndUpdate(req.body.secteur, {$push:{ categorie: result}


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
    categoriem.find({})
      .populate("secteur")
      .populate("souscategorie")
      .then(function (result) {
        res.send(result)

      }).catch(function(err){
      res.send(err)
    })

})
root.get('/byidcategorie',function (req,res) {

  console.log("okkkkk")
  categoriem.findById({_id:req.query.produitId})
    .populate("secteur")
    .then(function (result) {
      res.send(result)
    }).catch(function (err){

    res.send(err)


  })


})


root.post('/byid/:idcat',function (req,res) {

    categoriem.findById(req.params.idcat,function (err,rslt) {
        if (err) throw err
         rslt['sect'].push(req.body.sect)

        rslt.save(function (err,result) {
            if (err) throw err
            res.send(result)

        })


    })


})
root.put('/updt',function (req,res) {
  categoriem.findByIdAndUpdate(req.categorieId,{
    nom:req.body.nom,
    secteur:[req.body.secteur]


  },function (err,rslt) {
    if (err) throw err
    res.send(rslt)

  })

})

root.put('/updt2', function (req, res) {

  categoriem.findByIdAndUpdate(req.body._id, {
    nom: req.body.nom,
    souscategorie: req.body.souscategorie,

  }, function (err, rslt) {

    if (err) {

      res.send(err)
    }
    res.send(rslt)

  })

})
root.delete('/delt/:id',function (req,res) {
    categoriem.findByIdAndRemove(req.params.id,
        function (err) {
            if (err) throw err
            res.send('supp succes')

        }
    )
})
root.get('/allcategorie/:id',function (req,res) {

  console.log("okkkkk")
  categoriem.find({secteur: req.params.id})
    .then(function (result) {
      res.send(result)
    }).catch(function (err){

    res.send(err)


  })


})
root.get('/allcategorie2/:id', function (req, res) {

  console.log("okkkkk")
  categoriem.find({secteur: req.params.id}).populate('secteur')
    .then(function (result) {
      res.send(result)
    }).catch(function (err) {

    res.send(err)


  })


})

root.get('/byidtopbar', function (req, res) {

  console.log("okkkkk")
  categoriem.findById({_id: req.query.categorieId})
    .populate("secteur")
    .populate("souscategorie")
    .populate("produit")
    .then(function (result) {
      res.send(result)
    }).catch(function (err) {

    res.send(err)


  })


})



module.exports=root
