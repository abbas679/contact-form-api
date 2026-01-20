const express = require("express");
const contactRoutes = require("./routes/contact.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(express.json());

app.use("/api/v1/contacts", contactRoutes);

app.get("/", (req, res) => {
  res.json({ success: true, message: "Contact Form API is running" });
});

app.use(errorHandler);

module.exports = app;
