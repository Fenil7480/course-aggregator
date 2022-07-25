import mongoose from "mongoose";

const url =
  "mongodb+srv://admin:admin@saniyacluster.xrzit.mongodb.net/?retryWrites=true&w=majority";
const connectDb = () =>
  mongoose.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Connected to MongoDB!");
    db.close();
  });

export default connectDb;
