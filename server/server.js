const express = require('express');
const http = require('http'); // <-- New
const { Server } = require('socket.io'); // <-- New
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const server = http.createServer(app); // <-- server instead of app.listen
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins, adjust in production!
    methods: ['GET', 'POST', 'PATCH']
  }
});

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5030;

const url = 'mongodb+srv://admin:Arjun123@cluster0.gmdus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url);
const dbName = 'Lord_vishnu';

async function getDb() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });


// --- Routes ---

// Get all temples
app.get('/getTemples', async (req, res) => {
  try {
    const db = await getDb();
    const temples = await db.collection('Divyadesangal').find({}, { projection: { name: 1, location: 1, image_source: 1 } }).toArray();
    res.json(temples);
  } catch (err) {
    console.error('Error fetching temples:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Get temple details by name
app.get('/templedetails/:name', async (req, res) => {
  try {
    const db = await getDb();
    const temple = await db.collection('Divyadesangal').findOne({ name: req.params.name }, { projection: { temple_details: 1 } });
    res.json(temple ? [temple] : []);
  } catch (err) {
    console.error('Error fetching temple details:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Get glossary titles
app.get('/:title/getGlosary', async (req, res) => {
  try {
    const db = await getDb();
    const glossary = await db.collection(req.params.title).find({}, { projection: { title: 1 } }).sort({ position: 1 }).toArray();
    res.json(glossary);
  } catch (err) {
    console.error('Error fetching glossary:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Get content by title
app.get('/:page/getnewcontent/:title', async (req, res) => {
  try {
    const db = await getDb();
    const content = await db.collection(req.params.page).findOne({ title: req.params.title }, { projection: { content: 1 } });
    res.json(content ? [content] : []);
  } catch (err) {
    console.error('Error fetching content:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Get songs
app.get('/getSongs', async (req, res) => {
  try {
    const db = await getDb();
    const songs = await db.collection('Songs').find({}).toArray();
    res.json(songs);
  } catch (err) {
    console.error('Error fetching songs:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Get all chats
app.get('/getchatsA', async (req, res) => {
  try {
    const db = await getDb();
    const chats = await db.collection('Chat').find({}).toArray();
    res.json(chats);
  } catch (err) {
    console.error('Error fetching chats:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all chats
app.get('/getchatsU/:userId', async (req, res) => {
  try {
    const db = await getDb();
    const chats = await db.collection('Chat').findOne({ id: req.params.userId });
    res.json(chats);
  } catch (err) {
    console.error('Error fetching chats:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Send a new message (POST) - with Socket.IO update
app.post('/sendmessage/:id', async (req, res) => {
  const { id } = req.params;
  const message = req.body; // the message object

  if (!message) {
    return res.status(400).json({ message: 'Message is required' });
  }

  try {
    const db = await getDb();
    const result = await db.collection('Chat').updateOne(
      { id }, // <-- use the ID from the URL
      { $push: { messages: message } } // <-- push the message object
    );

    if (result.modifiedCount === 1) {
      io.emit('newMessage', { id, message }); // <-- emit correct message
      res.json({ success: true });
    } else {
      res.status(404).json({ message: 'Chat not found' });
    }
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Update chat status (PATCH)
app.patch('/updatestatus/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const db = await getDb();
    const result = await db.collection('Chat').updateOne(
      { id: id },
      { $set: { status } }
    );

    if (result.modifiedCount === 1) {
      io.emit('statusUpdated', { id, status }); // <-- Emit status update
      res.json({ success: true });
    } else {
      res.status(404).json({ message: 'Chat not found' });
    }
  } catch (err) {
    console.error('Error updating status:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// --- Socket.IO Handling ---
io.on('connection', (socket) => {
  console.log('A client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('A client disconnected:', socket.id);
  });
});

// Send user message
app.post('/sendmessagefromuser/:userId', async (req, res) => {
  console.log("Received message:", req.body); // Check what message is being sent
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const db = await getDb();
    let chat = await db.collection('Chat').findOne({ id: req.params.userId });

    if (!chat) {
      const newChat = {
        id: "user1",
        userName: "Guest User",
        status: "active",
        issueType: "General",
        startTime: new Date(),
        messages: []
      };
      const insertResult = await db.collection('Chat').insertOne(newChat);
      chat = await db.collection('Chat').findOne({ _id: insertResult.insertedId });
    }

    const newMessage = {
      id: `msg-${Date.now()}`,
      text: message,
      timestamp: new Date().toISOString(),
      sender: 'user'
    };

    await db.collection('Chat').updateOne(
      { _id: chat._id },
      { $push: { messages: newMessage } }
    );

    io.emit('newMessage', { id: chat.id.toString(), message: newMessage });

    res.json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).json({ message: 'Server error' });
  }
});



// --- Start the server ---
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
