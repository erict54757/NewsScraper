var db = require("../models");
var passport = require('passport');
var path = require("path");
module.exports = function(app){

    app.get("/", function(req,res){
        console.log("%%%%%%%%% is logged in", req.isAuthenticated());
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            } 
            console.log("youre in")
            res.render("home");
           
        }
        else{
            console.log("youre out")
            res.render("home");
        }
        
    })
    
  



    app.get("/post/sign/in", function(req,res){
        console.log("%%%%%%%%% is logged in", req.isAuthenticated());
        if(req.isAuthenticated()){
            var user = {
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
            } 
            console.log("youre in")
            res.sendFile(path.join(__dirname, "../public/postSignIn.html"));
           
        }
        else{
            console.log("youre out")
            res.sendFile(path.join(__dirname, "../public/index.html"));
        }
        
    })

    app.get("/list-items", function(req,res){
        res.render("search");
    });

    app.get("/signup", function(req,res){
        if(req.isAuthenticated()){
            res.redirect("/accounts/view");
        }else{
           res.render("accounts"); 
        }
        
    });

    app.get("/add-items", function(req, res){
        console.log("%%%%%%%%% is logged in add items", req.isAuthenticated());
        if(req.isAuthenticated()){
            var user ={
                id: req.session.passport.user,
                isloggedin: req.isAuthenticated()
             }
            db.Accounts.findOne({
                where:{
                  uuid: req.session.passport.user
                }
              }).then(function(dbUser){
                var user = {
                  isAdmin: dbUser.dataValues.isAdmin,
                  }
                  console.log(user);
                  if(user.isAdmin===true){
                      
               
        res.render("add-items");
            }  })
            
        }else {
            res.redirect()
        }

        
    })


};