import mongoose from "mongoose";
import Configs from "./Configs.js";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  companyName: { type: String },
  website: { type: String, required: true },
  clientKey: { type: String, required: true },
  config: { type: mongoose.Schema.Types.ObjectId, ref: "Configs" },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Middleware function to create a default config when a new user is saved
userSchema.pre("save", async function (next) {
  try {
    // Check if the user already has a config
    if (!this.config) {
      // Create a default config
      const defaultConfig = await Configs.create({
        widStatus: "active",
        btn_color: "#018e86",
        primary_color: "#018e86",
        secondary_color: "#d0eeed",
        headings_color: "#fff",
        text_color: "#000",
        wid_size: "medium",
        wid_location: "bottomRight",
      });

      // Assign the new config to the user's config property
      this.config = defaultConfig._id;
    }

    // Continue with the save operation
    next();
  } catch (error) {
    next(error);
  }
});

export default mongoose.model("Users", userSchema);