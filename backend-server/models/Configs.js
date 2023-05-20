import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  widStatus: { type: String, default: 'active' },
  btn_color: { type: String, default: '#018e86' },
  primary_color: { type: String, default: '#018e86' },
  secondary_color: { type: String, default: '#d0eeed' },
  headings_color: { type: String, default: '#fff' },
  text_color: { type: String, default: '#000' },
  wid_size: {type: String, default: 'medium'},
  wid_location: {type: String, default: 'bottomRight'},
  modifiedAt: {
    type: Date,
    default: new Date()
  }
});

export default mongoose.model("Configs", userSchema);