const Express =require("express")

const Bodyparser=require("body-parser")

const Cors=require("cors")

const Mongoose=require("mongoose")


var app=Express()

app.get("/",(req,res)=>{
res.send("welcome to employee site")
})

app.get("/add",(req,res)=>{
    res.send("welcome to employee details entry page")
    })

    app.get("/search",(req,res)=>{
        res.send("employee search page")
        })
    
        app.get("/delete",(req,res)=>{
            res.send("employee delete page")
            })

            app.get("/edit",(req,res)=>{
                res.send("employee edit page")
                })

app.listen(3000)
