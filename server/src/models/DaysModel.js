const mongoose = require("mongoose");

const DaysSchema = new mongoose.Schema(
  {
    section: String,
    days: String,
    meals: { type: mongoose.Schema.Types.ObjectId, ref: "Meal" },
  },
  {
    timestamps: true,
  }
);

const DaysModel = mongoose.model("Days", DaysSchema);

module.exports = DaysModel;
