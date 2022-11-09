const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    daysOfWeek: { type: mongoose.Schema.Types.ObjectId, ref: "Days" },

    breakfast: {
      type: Array,
      default: [],
    },
    lunch: {
      type: Array,
      default: [],
    },
    dinner: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const MealModel = mongoose.model("Meal", MealSchema);

module.exports = MealModel;
