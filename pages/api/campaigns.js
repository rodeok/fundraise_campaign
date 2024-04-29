
import axios from 'axios';


export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const response = await axios.get("http://localhost:5000/api/campaigns");
        res.status(200).json(response.data);
      } catch (error) {
        res.status(error.response.status).json({ error: error.response.data });
      }
      break;

    case 'POST':
      try {
        const response = await axios.post("http://localhost:5000/api/campaigns", req.body);
        res.status(201).json(response.data);
      } catch (error) {
        res.status(error.response.status).json({ error: error.response.data });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}