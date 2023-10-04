// models/yourModel.js
import mongoose from 'mongoose';

const YourSchema = new mongoose.Schema({
  // Define your schema here
});

const YourModel = mongoose.models.YourModel || mongoose.model('YourModel', YourSchema);

export default YourModel;
