const express = require('express');
const { configureApp, configureWebSocket } = require('./config/appConfig');
const { connectToDB } = require('./config/dbConfig');
const { whitelistMiddleware } = require('./middleware/whitelistMiddleware');

// Import routes
const aiRoutes = require('./routes/aiRoutes');
const agentRoutes = require('./routes/agentRoutes');
const dbRoutes = require('./routes/dbRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure application
configureApp(app);

// Apply middleware
app.use(whitelistMiddleware);

// Mount routes
app.use('/api/ai', aiRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/db', dbRoutes);

// Connect to database
connectToDB();

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Configure WebSocket
const wss = configureWebSocket(server);

module.exports = { app, server, wss }; 