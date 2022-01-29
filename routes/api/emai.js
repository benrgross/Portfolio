const router = require("express").Router();
const axios = require("axios");

router.post("/email", async (rec, res) => {
  try {
    axios.post(
      "https://api.emailjs.com/api/v1.0/email/send-form/service_id",
      req.body.form
    );
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
