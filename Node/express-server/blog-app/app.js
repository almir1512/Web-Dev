const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
var favicon = require('serve-favicon');


const ejs = require("ejs");
const homecontent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const aboutcontent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ ";

var posts = [];

const app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("home",{homeC : homecontent, posts : posts});
});
router.get("/", function(req, res, next) {
    res.render("contact", {link:"www.linkedin.com/in/almir-noori-35a607207"});
});
app.get("/about",function(req,res){
  res.render("about",{aboutC: aboutcontent });
});
app.get("/contact",function(req,res){
  res.render("contact",{link : "www.linkedin.com/in/almir-noori-35a607207"});
});
app.get("/compose",function(req,res){
  res.render("compose");
})
app.get("/posts/:anotherpost",function(req,res){
var reqTitle = _.lowerCase(req.params.anotherpost);

 posts.forEach(function(post){
   var storedTitle = _.lowerCase(post.title);
  if(storedTitle === reqTitle){
    res.render("post",{
      title : post.title,
      text : post.text
    });
  }
 });
});

app.post("/compose",function(req,res){
let post = {
  title: req.body.title,
  text: req.body.text
}
posts.push(post);
res.redirect("/");
});

app.listen(3000,function(req,res){
  console.log("Ported Successfully on 3000.");
});
