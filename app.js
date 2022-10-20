const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("html"));

mongoose.connect(
  "mongodb+srv://admin:admin123@cluster.nne4qxa.mongodb.net/CustomerR"
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/signup", function (req, res) {
  let firstname = req.body.fname;
  let lastname = req.body.lname;
  let email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstname,
          LNAME: lastname,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us10.api.mailchimp.com/3.0/lists/2f9e210ad3"; /////// err here ---------------
  const options = {
    method: "POST",
    auth: "Shreyansh Jain:219b4d66b13b7b1125a598bb3b44110b-us10",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.render("list", { status: "Success" });
    } else {
      res.render("list", {
        status: "Some Error Occurred, Please Signup Again"  });
    }
    response.on("data", function (data) {
      console.log("Got the data!");
    });
  });
  request.write(jsonData);
  request.end();
});

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    find: String,
    newsletter: Boolean,
  },
  { strict: false }
);

const Review_Form = new mongoose.model("customer_review", formSchema);

app.post("/", function (req, res) {
  if (req.body.newsletter === "on") {
    var check = 1;
  } else {
    check = 0;
  }
  if (req.body.message != "") {
    const review = new Review_Form({
      name: req.body.name,
      email: req.body.email,
      find: req.body.find_us,
      newsletter: check,
      review: req.body.message,
    });
    review.save();
  } else {
    const review = new Review_Form({
      name: req.body.name,
      email: req.body.email,
      find: req.body.find_us,
      newsletter: check,
    });
    review.save();
  } if (res.statusCode === 200)
    {  res.render("list", { status: "Success" }); }
   else
    { res.render("list", {status: "Some Error Occurred, Please Signup Again"}); }
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server Started at 3000");
});
