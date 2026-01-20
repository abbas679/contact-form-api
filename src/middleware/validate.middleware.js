const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;
  const errors = {};

  if (!name || name.trim().length < 2)
    errors.name = "Name must be at least 2 characters";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) errors.email = "Invalid email format";

  if (!message || message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  next();
};

module.exports = validateContact;
