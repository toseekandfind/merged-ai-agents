const { OpenAI } = require('openai');
const { OPENAI_API_KEY } = require('../../config/environment');

if (!OPENAI_API_KEY) {
    console.error('❌ OpenAI API Key not found in environment variables');
    process.exit(1);
}

const openaiClient = new OpenAI({
    apiKey: OPENAI_API_KEY
});

console.log('🔑 OpenAI client initialized successfully');

module.exports = {
    openaiClient,
    apiKey: OPENAI_API_KEY
}; 