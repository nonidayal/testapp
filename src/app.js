const sgMail = require("@sendgrid/mail");
const express = require("express");
const path = require("path");
const app = express();

const staticpath = path.join(__dirname, "../src/template");
const viewpath = path.join(__dirname, "../src/views");
console.log(viewpath);
app.set("views", viewpath);
app.set("view engine", "hbs");
app.use(express.static(staticpath));
app.get("/response", (req, res) => {
  // if (req.query.email) {
  res.render("response", {
    response: "Request sent successfully!",
  });
  // }

  if (req.query.email) {
    const API_Key =
      "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";
    sgMail.setApiKey(API_Key);
    const msg = {
      from: "knonidayal@gmail.com", // Change to your recipient
      to: req.query.email, // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
      .send(msg)
      .then(() => {
        // return res.send("Sent");
        // res.render("/response");
        // res.redirect("http://localhost:3000/response");
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
// app.get("/", (req, res) => {});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
