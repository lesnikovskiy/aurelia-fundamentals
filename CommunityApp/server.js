const express = require("express");
const app = module.exports = express();
const bodyParser = require("body-parser");
const router = express.Router();
const fs = require("fs");
const uuid = require("node-uuid");

app.use(express.static("./"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);

var jobsData = [];
fs.readFile("./sampleData/jobsData.json", "utf8", function (err, content) {
    if (err)
        return res.send(500, err);

    jobsData = JSON.parse(content);
});

router.get("/jobs", function (req, res) {
    res.json(jobsData);
});

router.route("/jobs").post(function(req, res) {
    var job = req.body;
    job.id = uuid.v4();
    console.log(job);
    jobsData.push(job);
	
	res.send(201);
});

router.route("/jobs/:id").put(function(req, res) {
	jobsData.forEach(job => {
		if (job.id === req.params.id) {
			job.title = req.body.title;
			job.location = req.body.location;
			job.skills = req.body.skills;
			job.jobType = req.body.jobType;
			job.needDate = req.body.needDate;
			job.description = req.body.description;			
		}
	});
	
	res.sendStatus(200);
});

router.route("/jobs/:id").delete(function(req, res) {
	console.log(req.params);
	jobsData.splice(jobsData.findIndex(function(element) {
		return element.id === req.params.id;
	}), 1);

	res.sendStatus(200);	
});

router.get("/events", function (req, res) {
    fs.readFile("./sampleData/eventsData.json", "utf8", function (err, content) {
        if (err)
            return res.send(500, err);

        return res.json(eval(content));
    });
});

router.get("/jobSkills", function (req, res) {
    fs.readFile("./sampleData/jobSkills.json", "utf8", function (err, content) {
        if (err)
            return res.send(500, err);

        return res.json(eval(content));
    });
});

router.get("/jobTypes", function (req, res) {
    fs.readFile("./sampleData/jobTypes.json", "utf8", function (err, content) {
        if (err)
            return res.send(500, err);

        return res.json(eval(content));
    });
});

router.get("/states", function (req, res) {
    fs.readFile("./sampleData/states.json", "utf8", function (err, content) {
        if (err)
            return res.send(500, err);

        return res.json(eval(content));
    });
});


let server = app.listen(8080, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening", host, port);
});