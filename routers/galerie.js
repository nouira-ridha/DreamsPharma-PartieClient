var express = require('express')
var root = express.Router()
var galeriem = require('../models/galeriem')
var bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken')
var config = require('../config')
var vf = require('../verify')
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads'});


root.post('/add', upload.single("file"), function (req, res) {

  var file = __dirname + '/uploads/' + req.file.originalname;

  fs.readFile(req.file.path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.error(err);
        response = {
          message: 'Sorry, file couldn\'t be uploaded.',
          filename: req.file.originalname
        };
      } else {


        galeriem.create({
          nom: req.body.nom,
          produit: req.body.produit


        }, function (err, result) {
          if (err) throw err
          res.send(result)

        })
      }
    //  res.end(JSON.stringify(response));
    });
  });


})



root.get("/images/:img", function (req, res) {
  res.sendFile(__dirname + '/uploads/'+ req.params.img)
})





root.get('/all', function (req, res) {
  galeriem.find({})
    .populate("produit")
    .then(function (result) {
      res.send(result)

    }).catch(function (err) {
    res.send(err)
  })

})
root.get('/byidgalerie', function (req, res) {

  console.log("okkkkk")
  galeriem.findById({_id: req.query.produitId})
    .populate("produit")
    .then(function (result) {
      res.send(result)
    }).catch(function (err) {

    res.send(err)


  })


})


root.delete('/delt/:id', function (req, res) {
  galeriem.findByIdAndRemove(req.params.id,
    function (err) {
      if (err) throw err
      res.send('supp succes')

    }
  )
})


module.exports = root
