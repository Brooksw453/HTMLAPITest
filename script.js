const axios = require('axios');

const api_endpoint = 'https://chat.openai.com/';  // Chat GPT API endpoint
const API_CHATGPT_KEY = process.env.API_CHATGPT_KEY;  // Accessing GitHub secret

// Function for sending API request with prompt
function sendPrompt(prompt) {
  const data = {
    prompt,
    temperature: 0.7,
    max_tokens: 256,
  };

  const headers = {
    Authorization: `Bearer ${API_CHATGPT_KEY}`,
    'Content-Type': 'application/json',
  };

  axios.post(api_endpoint, data, { headers })
    .then(response => {
      console.log('ChatGPT response:', response.data.choices[0].text);
      // Handle the response and update UI with generated text
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Example usage
const prompt = 'Generate a poem about love';
sendPrompt(prompt);

