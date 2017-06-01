const express = require("express");
const route = express.Router();


module.exports = function() {

  route.post("/login", loginFun);

  function loginFun(req,res,next){
    const data = req.body
    console.log(data.text);
    res.json({'awesomeText': data.text})
  }

  function dummyData(req,res,next){
    res.json({"data":'hello'})
  }
  return route;
};
