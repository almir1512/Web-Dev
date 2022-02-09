const express= require("express");
const bodyParser= require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
var newitems = ["Namaz","Twitter","Read a tech blog"];
let workitems = [];


app.get("/",function(req,res){

  var day = date.getdate ();   // include getday for day of the week
  res.render("lists",{listTitle : day,newitem1 : newitems}); //ejs
});


app.post("/",function(req,res){
  let newitem = req.body.newlist;

  if(  req.body.list === "Work"){
   workitems.push(newitem);
   res.redirect("/work"); // on making request return the homepage(existing page)
 }else{
   newitems.push(newitem);
   res.redirect("/"); // on making request return the homepage(existing page)
 }

});
app.get("/work",function(req,res){
  res.render("lists",{listTitle: "Work List",newitem1 : workitems});
})

app.get("/about" , function(req,res){
  res.render("about");
})

app.listen(3000,function(){
  console.log("Ported Suxxessfully on 3000")
})
