//Basic required imports for NodeJS

var express = require('express');
var bodyParse = require ('body-parser');
var cors = require ('cors');

//Create an instance of express for our app and instatiate bodyParser 

var app = module.exports=express();
app.unsubscribe(bodyParse.json());
app.use(cors());

//GET call to return JSON
app.get('/dataValues/:dateVal', function(req,res,next){
var dateVal = req.params.dateVal;
var dateFormattingOptions = {
    year:'numeric',
    month:'long',
    day:'numeric'
};

if(isNaN(dateVal)){
    var naturalDate = new Date(dateVal);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    var unixDate = new Date(dateVal).getTime()/1000;
} else {
    var unixDate = dateVal;
    var naturalDate= new Date(dateVal * 1000);
    naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
}
res.json({unix: unixDate, natural: naturalDate});

});


app.listen(3000, function(){
    console.log("Working");
});