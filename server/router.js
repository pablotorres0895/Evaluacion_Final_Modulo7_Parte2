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
    Events.find({userId: id}, {title: 1, start: 1, end: 1}).exec(function(err, doc){
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
    let event;
    if (req.body.end === ''){
        event = new Events({
            eventId: Math.floor(Math.random() * 50),
            userId: id,
            title: req.body.title,
            start: req.body.start
        })
    }else{
        event = new Events({
            eventId: Math.floor(Math.random() * 50),
            userId: id,
            title: req.body.title,
            start: req.body.start,
            end: req.body.end
        })
    }
    event.save(function(error) {
        if (error) {
            res.status(500)
            res.json(`Error: ${error}`)
        }
        res.send("Registro guardado")
    })
})
Router.post('/events/update',(req, res)=>{
    let uid = req.body.id
    Events.update(
        {
            _id: uid
        },
        {
            $set: {
                start: req.body.start, 
                end: req.body.end}
        }, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro actualizado")
    })
})
Router.post('/events/delete/:id',(req, res)=>{
    let uid = req.params.id
    Events.remove({_id: uid}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro eliminado")
    })
})
module.exports = Router

