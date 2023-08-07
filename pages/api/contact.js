import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim === '') {
      res.status(422).json({ message: 'Invalid inputs' });
      return;
    }

    let client;

    try {
      client = await MongoClient.connect('mongodb+srv://probro12356:1V7TVMYJ5U2NCVKn@cluster0.nr2r0ws.mongodb.net/?retryWrites=true&w=majority');
    } catch {
      res.status(500).json({ message: 'Failed to send a message' });
      return;
    }

    const db = client.db('my-blog');

    try {
      await db.collection('messages').insertOne({
        email: email,
        name: name,
        message: message
      });
    } catch {
      res.status(500).json({ message: 'Failed to send a message' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Successfully send a message' })
  }
}

export default handler;