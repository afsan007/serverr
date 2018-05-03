const express = require("express")
const chalk   = require("chalk")
const hbs     = require("hbs")
const fs      = require("fs")
var   app     = express()

hbs.registerPartials(__dirname+'/views/partials')
app.set("view engine","hbs")

app.use((req,res,next)=>{
  var date = new Date().toString()
  var log = `${date}=>${req.method} || ${req.url}`
  console.log(log)

  fs.appendFile('server.log', log+'\n',(e)=>{
    if(e){console.log("unable to connect to server.")}
  })
  next()
})

app.use((req,res,next)=>{
    res.render('commingsoon.hbs')
})

app.use(express.static(__dirname+'/public'))
S
app.get("/",(req,res)=>{
  res.send("<h1>Hello world</h1>")
})
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pagename:'About-Page'
    ,currentYear:new Date().getFullYear()
  })
})
app.listen(3000,()=>{
  console.log(chalk.green("server is running on port 3000."))
})
