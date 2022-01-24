const express=  require ("express");
const app = express();
const https=require("https");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})
app.post("/",function(req,res){
      const city= req.body.cityName;
      const appKey="c75fd364694c3e64a314a5257fcd6aab";

      const url= "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ appKey +"&units=metric";
      https.get(url,function(response){
        console.log(response.statusCode); // send status

        response.on("data",function(data){
          const weatherData= JSON.parse(data);
          // console.log(weatherData);
          const temp = weatherData.main.temp;
          const desc= weatherData.weather[0].description;
          const icon = weatherData.weather[0].icon;
          const iconURL= "http://openweathermap.org/img/wn/"+ icon +"@2x.png";

          res.write("<h1>The temperature in "+ city +" is "+ temp +" and the weather is currently "+desc+".</h1>");
          res.write("<img src= " + iconURL + "></img>");
          res.send();
});
});
});
app.listen (3000,function (){
  console.log("Port 3000 connected");
})
