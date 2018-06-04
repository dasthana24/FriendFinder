var path =require("path");

module.exports= function(app){

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
      app.get("/css",function(req, res) {
        res.sendFile(path.join(__dirname, "../css/style.css"));
      });

      app.get("/css/backgroundImage",function(req, res) {
        res.sendFile(path.join(__dirname, "../images/Friends.jpg"));
      });
      app.get("/css/backgroundPicture",function(req, res) {
        res.sendFile(path.join(__dirname, "../images/hh.jpeg"));
      });
      app.get("/survey-css",function(req, res) {
        res.sendFile(path.join(__dirname, "../css/surveyStyle.css"));
      });
     
      app.get("/css/backgroundIMG",function(req, res) {
        res.sendFile(path.join(__dirname, "../images/hh.jpeg"));
      });
     
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

      

     

}