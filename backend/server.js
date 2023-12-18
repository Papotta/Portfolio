const express = require("express");
const cors = require("cors");
require('dotenv').config();
const nodemailer = require("nodemailer");


const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


const router = express.Router();
app.use("/", router);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  },
});


const rexInput = (input) => {
  const RexexInput = input.replace(/[^\w\s]/gi, '');
  return RexexInput;
};

router.post("/mail", (req, res) => {
  const name = rexInput(req.body.firstName + req.body.lastName);
  const email = rexInput(req.body.email);
  const message = rexInput(req.body.message);
  const phone = rexInput(req.body.phone);

  const mail = {
    from: name,
    to: "luc.mazzarino@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };


  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: 'Error sending email. Please try again later.' });
    } else {
      console.log("Email sent successfully");
      res.status(200).json({ success: true, message: 'Message Sent' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`)
});