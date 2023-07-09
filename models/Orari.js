const mongoose = require("mongoose");

const OrariSchema = new mongoose.Schema(
  {
    orarioInizio: {
      type: String,
    },
    orarioFine: {
      type: String,
    },
    categoria: {
      type: String,
    },
    anni: {
      type: String,
    },
    eccezione: {
      type: String,
    },
    giorni: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Orari || mongoose.model("Orari", OrariSchema);
