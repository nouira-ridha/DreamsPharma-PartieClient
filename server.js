var express = require('express')
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads'});
var user = require("./routers/user")
var admin = require("./routers/admin")
var secteur = require("./routers/secteur")
var categorie = require("./routers/categorie")
var souscategorie = require("./routers/souscategorie")
var produit = require("./routers/produit")
var galerie = require("./routers/galerie")
var connect = require('./connection')
var body = require("body-parser")
var app = express()
app.use(cors())
app.use(body.json())
app.use("/admin", admin)
app.use("/user", user)
app.use('/produit', produit)
app.use('/galerie', galerie)
app.use('/secteur', secteur)
app.use('/categorie', categorie)
app.use('/souscategorie', souscategorie)
app.post('/upload', upload.single("file"), function (req, res) {

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
        response = {
          message: 'File uploaded successfully',
          filename: req.file.originalname
        };
      }
      res.end(JSON.stringify(response));
    });
  });
})

app.get("/images/:img", function (req, res) {
  res.sendFile(__dirname + '/uploads/'+ req.params.img)
})





// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
//app.use(forceSSL());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/template'));
var publicDir = require('path').join(__dirname, '/uploads');
app.use(express.static(publicDir));
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/template/index.html'));

});


// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

function bufferFile(relPath) {
  return fs.readFileSync(path.join(__dirname, relPath)); // zzzz....
}
