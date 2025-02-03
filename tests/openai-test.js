const { openaiClient } = require('../server/config/aiConfig');

async function testOpenAIConnection() {
    console.log('\nTesting OpenAI API Connection:\n');
    
    try {
        // Try to create a simple completion
        const completion = await openaiClient.chat.completions.create({
            model: "gpt-4-turbo-preview",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant."
                },
                {
                    role: "user",
                    content: "Say hello and confirm you're connected!"
                }
            ]
        });

        console.log('✅ API Connection Successful!');
        console.log('\nResponse:', completion.choices[0].message.content);
        
    } catch (error) {
        console.error('❌ API Connection Failed:', error.message);
    }
}

testOpenAIConnection(); 