import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  question: String,
});

const DataModel = mongoose.model("Data", dataSchema);

export default DataModel;
