const express = require("express");
const {
  createContact,
  getContacts,
} = require("../controllers/contact.controller");
const validateContact = require("../middleware/validate.middleware");

const router = express.Router();

router.post("/", validateContact, createContact);
router.get("/", getContacts);

module.exports = router;
