const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  commission: { type: Number, default: 0 },
  // Add other merchant-related fields if needed
});

const Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = Merchant;
