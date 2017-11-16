const express = require('express');
const router = express.Router();

router.get('/api/shout/:word', function(req, res, next){
  var word = req.params.word;
  res.setHeader("Content-Type", `text/plain`);
  res.status(200).send(`response: ${req.params.word.toUpperCase()}`+`!!!`);
});


router.post('/api/array/merge', function(req, res){
  res.setHeader("Content-Type", "text/plain");
  var a = req.body.a;
  console.log(typeof a);
  console.log(req.body);
  var b = req.body.b;
  console.log(typeof b);
  if(Array.isArray(a) && Array.isArray(b)){
    for(var i = 0; i < b.length; i++){
      a.push(b[i]);
      a.sort(function(a,b){
        return a - b;
      });
    }
    console.log(a);
    res.status(200).json(`response: ${a}`);
  }else{
    res.status(400).json(`response: {"error": "Both keys in request body must be of type Array."}`);
  }
});

module.exports = router;
