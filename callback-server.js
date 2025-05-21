const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.post('/callback', (req, res) => {
  console.log('✅ Callback received at /callback');
  console.log('📦 Payload:', JSON.stringify(req.body, null, 2));
  
  // You can add validation or further logic here
  
  res.status(200).send({ message: 'Callback received' });
});

app.listen(port, () => {
  console.log(`🚀 Callback server listening at http://localhost:${port}/callback`);
});
