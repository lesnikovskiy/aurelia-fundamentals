const express = require("express");
const app = module.exports = express();
const bodyParser = require("body-parser");
const router = express.Router();
const fs = require("fs");

app.use(express.static("./"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api", router);

router.get("/eventsData", function(req, res) {
    fs.readFile("./sampleData/eventsData.json", "utf8", function (err, content) {
        if (err)
            return res.send(500, err);

        return res.json(eval(content));
    });
});

router.get("/jobsData", function(req, res) {
    fs.readFile("./sampleData/jobsData.json", "utf8", function (err, content) {
        if (err)
            return res.send(500, err);

        return res.json(eval(content));
    });
});

router.get("/jobSkills", function(req, res) {
    fs.readFile("./sampleData/jobSkills.json", "utf8", function (err, content) {
        if (err)
            return res.send(500, err);

        return res.json(eval(content));
    });
});

router.get("/jobTypes", function(req, res) {
    fs.readFile("./sampleData/jobTypes.json", "utf8", function (err, content) {
        if (err)
            return res.send(500, err);

        return res.json(eval(content));
    });
});

router.get("/states", function(req, res) {
    fs.readFile("./sampleData/states.json", "utf8", function (err, content) {
        if (err)
            return res.send(500, err);

        return res.json(eval(content));
    });
});


let server = app.listen(8080, function() {
   let host = server.address().address;
   let port = server.address().port;
   
   console.log("Example app listene", host, port); 
});