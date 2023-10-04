// pages/api/getData.js
import dbConnect from '../../db';
import YourModel from '../../models/yourModel'; // Replace 'yourModel' with your actual model name

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const data = await YourModel.find(); // Replace 'YourModel' with your actual model name
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch data from the database.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
