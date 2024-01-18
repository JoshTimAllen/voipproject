import { handler } from './.svelte/build/handler.js';
import express from "express"
import handlebars from "express-handlebars";
import { Server } from 'socket.io';
import { createServer } from 'http';
import { Database } from './services/database.js';
import path from "path";
import cookieParser from 'cookie-parser';
import { User } from './models/useraccess_models.js';
import cors from "cors";
import * as VoiceService from "./services/voiceservice.js";
import { v4 } from 'uuid';
const database = new Database();
await database.Start();

const app = express();
const http = createServer(app);

//To holding users information 

//config and set handlebars to express
const customHandlebars = handlebars.create({ layoutsDir: "./views" });


const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cookieParser());
app.use(cors(corsOptions));
// app.use(bodyParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", customHandlebars.engine);
app.set("view engine", "handlebars");

//enable user access to public folder 
app.use("/files", express.static("public"));


app.get("/rtc", (req, res, next) => {
    res.render("rtc.handlebars");
});
app.get("/usersearch/:search", async (req, res, next) => {
    console.log("searching  - " + req.params.search);
    if (!req.params.search) { res.send([]); return; }
    await User.createIndexes({ username: "text" });
    // let results = await User.find({ $text: { $search: req.params.search, $diacriticSensitive: true } }).limit(10)
    let results = await User.find({ username: { $regex: `^${req.params.search}.*`, $options: "i" } }).limit(10);
    let searchData = [];
    results.forEach(user => {
        searchData.push({ username: user.username });
    });
    res.send(searchData);
});
app.get("/usersearch", async (req, res, next) => {
    console.log("searching  - " + req.body.search);
    if (!req.body.search) { return; }
    await User.createIndexes({ username: "text" });
    // let results = await User.find({ $text: { $search: req.params.search, $diacriticSensitive: true } }).limit(10)
    let results = await User.find({ username: { $regex: `^${req.body.search}.*`, $options: "i" } }).limit(10);
    let searchData = [];
    results.forEach(user => {
        searchData.push({ username: user.username });
    });
    res.send(searchData);
});

app.post("/register", (req, res, next) => {
    var user = checkUser(req, res, async (user) => {
        if (user == null) {
            console.log(req.body.password);
            user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            user.save().then((response) => {
                res.cookie("username", user.username);
                res.send({});
            }).catch((reason) => {
                console.log(reason);
                res.send({ "status": JSON.stringify(reason) });
            });
        }
        else {
            console.log(user.username);
            res.cookie("username", user.username);
            res.redirect('/');
        }
    });
});

app.post("/login", (req, res) => {
    console.log(req.body.username);
    // res.cookie("usernameh", 'user.username');
    checkUser(req, res, async (user) => {
        if (user == null) {
            await User.findOne({ 'username': req.body.username, 'password': req.body.password }).then((result) => {
                // if (result.username != null) {
                user = result;
                console.log(result);
                res.cookie("username", req.body.username);
                res.send({ "yes": "yes" });
                // }
                // else {

                // }
            }).catch((reason) => {
                user = null;
                res.send({ "nor": "nor" });
                console.log(reason);
            });
        }
        else {
            res.cookie("username", user.username);
            res.send({ "no": "no" });
        }
    });
});


app.get("/access-view", (req, res, next) => {
    var username;
    try {
        username = req.cookies["username"];
    }
    catch {

    }
    if (username == undefined) {
        res.send({ "status": "failed" });
    }
    else {
        console.log(username);
        User.find({
            username: username
        }).then((result) => {
            res.send(result);
        }).catch((reason) => {
            res.send({ "status": "failed" });
        });
    }

}, handler);


app.get("/usercheck", (req, res) => {
    console.log("userCheck");
    checkUser(req, res, async (user) => {
        if (user == null) {
            res.send({ "username": "" });
        }
        else {
            res.send({ "username": user.username });
        }
    });
}, handler);
app.use(handler);

async function checkUser(req, res, callback = async (user = new User()) => { }) {
    var username = "";
    var user = new User();

    try {
        console.log(req.cookies);
        username = req.cookies["username"];
    }
    catch {
        // username = undefined;
    }
    if (username == undefined || username == null || username == "" || username === undefined) {
        user = null;
        console.log("is " + username);
    }
    else {
        await User.find({ username: username }).then((result) => {
            user = result[0];
            console.log("u " + user);
        }).catch((reason) => {
            console.log(reason);
            user = null;
        });
    }
    callback(user);
    return user;
}

process.on(
    'uncaughtException',
    function (err) {
        console.log(err)
        var stack = err.stack;
        //you can also notify the err/stack to support via email or other APIs
    }
);

http.listen(3000, () => {
    console.log("the app is run in port 3000!");
});

VoiceService.Run(http, app);





























