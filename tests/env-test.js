const { OPENAI_API_KEY, NODE_ENV, PORT } = require('../config/environment');

console.log('\nTesting environment variables:\n');

const tests = [
    {
        name: 'OpenAI API Key',
        value: OPENAI_API_KEY,
        test: (val) => val && val.startsWith('sk-'),
    },
    {
        name: 'Node Environment',
        value: NODE_ENV,
        test: (val) => ['development', 'production', 'test'].includes(val),
    },
    {
        name: 'Port',
        value: PORT,
        test: (val) => !isNaN(val) && val > 0,
    }
];

tests.forEach(({ name, value, test }) => {
    const status = test(value) ? '✅' : '❌';
    console.log(`${status} ${name}: ${value}`);
}); 