const express = require("express");
const bodyParser = require('body-parser');

const app =express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
res.sendFile(__dirname+"/index.html");
})
app.post('/',function(req,res) {

    //addition
    var n1=Number(req.body.name1) 
    var n2=Number(req.body.name2)

    var resultA = n1 + n2 

  

    console.log(req.body)

    res.send("the result is  "+ resultA)


} )

app.listen(3000,function(){
    console.log("working on http://localhost:3000");
})