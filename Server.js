// server.js
const express = require('express');
const app = express();

// Set your OpenAI API key as an environment variable
process.env.OPENAI_API_KEY = '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';

// Other server setup code goes here

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
