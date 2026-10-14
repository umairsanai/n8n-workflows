import express from "express";

const wait = (sec) => new Promise((res, rej) => setTimeout(res, sec * 1000));

const app = express();
const PORT = 3000;

let i = 0;

app.get("/", (req, res, next) => {

    if (req.query.message) {
        console.log(req.query.message.split("-").map(str => str[0].toUpperCase() + str.slice(1).toLowerCase()).join(" ") + ".");
    } else if (req.query.emails) {
        console.log(req.query.emails.split("-").join(" "));        
    } else {
        console.log(++i);
    }

    console.log("\n");
    res.status(200).send("Hello There!");
});

app.get("/success", async (req, res, next) => {

    console.log("YAY");

    try {
        console.log("Sending request....");
    
        let response = await fetch("http://localhost:5678/webhook/c00bd7f6-311b-40a8-a3b8-6b0641beffab");
        let st = response.status;
        response = await response.json();        

        console.log(st, response);

        res.status(200).json({
            message: "success"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "fail"
        });
    }
});


app.listen(PORT, "0.0.0.0", () => {
    console.clear();
    console.log("Server Started...");
});