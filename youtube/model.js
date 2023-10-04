// models/yourModel.js
import mongoose from 'mongoose';
import { stringifyCookie } from 'next/dist/compiled/@edge-runtime/cookies';

const videoSchema= new mongoose.Schema({
  url : {
    type:string
  }
});

const videos = mongoose.models.videos || mongoose.model('videos', videoSchema);

export default videos;
