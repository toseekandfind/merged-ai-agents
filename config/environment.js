require('dotenv').config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3001,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/ai_agents',
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    API_VERSION: 'v1',
    LOG_LEVEL: process.env.LOG_LEVEL || 'info'
}; 