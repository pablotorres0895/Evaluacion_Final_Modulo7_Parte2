const Router = require('express').Router()
const Users = require('./model/user.js')
const Events = require('./model/event.js')
let id = ""
Router.post("/login",function(req,res){
    let user=req.body.user || '';
    let pass=req.body.pass || '';
    Users.findOne({userId:user}).exec(function(err,docs){
      if(docs!=null){
        if(pass.search(docs.password)!=-1){
            id=user;
        res.end("Validado");
        }else{
            res.end("Usuario o contraseña incorrecta");
        }
      }else{
        res.end("Usuario o contraseña incorrecta");
      }
    })
  })
Router.get('/events/all',(req, res)=>{
    Events.find({userId: id}).exec(function(err, doc){
        if (err) {
            console.log(err)
            res.status(500)
            res.json(err)
        }else{
            res.json(doc)
        }
    })
})
Router.post('/events/new',(req, res)=>{
    res.json("OK")
})
Router.post('/events/delete/',(req, res)=>{
    res.json("OK")
})
module.exports = Router

