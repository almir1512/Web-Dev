const express= require ("express");

const app= express();

app.get("/",function(req,res){
  res.send("<h1>NOORI</h1>");
});
app.get("/contact",function(req,res){
  res.send("You can contact me at :almirtps@gmail.com");
});
app.get("/about",function(req,res){
  res.send("This is wholly owned by ALMIR NOORI");
})

app.get("/hobby",function(req,res){
  res.send("Coincollecting")
})
app.listen(3000,function(){
  console.log("Server is set on port 3000");
});
