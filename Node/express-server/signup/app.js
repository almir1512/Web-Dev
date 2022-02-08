const express= require("express");
const bodyParser=require("body-parser");

const https = require("https");

const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  const fName=req.body.fname;
  const lName=req.body.lname;
  const mailid=req.body.passw;

  const data = {
    members : [
      {
        email_address : mailid,
        status : "subscribed",
        merge_fields : {
          FNAME : fName,
          LNAME : lName
        }
      }
    ]
  };
  var jsonData= JSON.stringify(data);
  const url = "https://us20.api.mailchimp.com/3.0/lists/4dbfe2d7e0"
  const options = {
    method : "POST",
    auth : "almir1512:56be1fc06fabdf6fcd443956b82461c0-us20"

  }


const request =  https.request (url, options ,function(response){
    if(response.statusCode === 200){
      res.sendFile(__dirname + "/success.html");
    }else {
      res.sendFile(__dirname + "/failure.html");
    }



    response.on("data",function(data){
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData);
  request.end();

});

app.post("/failure",function(req,res){
  res.sendFile(__dirname+"/signup.html");

})

app.listen(process.env.PORT || 3000,function(){
  console.log("Ported success on 3000");
})
// api key - 56be1fc06fabdf6fcd443956b82461c0-us20
// list id -- 4dbfe2d7e0
