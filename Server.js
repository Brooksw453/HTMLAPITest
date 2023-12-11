const express = require('express');
const axios = require('axios');

const app = express();

// Replace with your actual API key and endpoint
const apiKey = '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';
const apiEndpoint = 'https://api.llm.com/predict';

app.post('/api/prompt', (req, res) => {
  const prompt = req.body.prompt;

  // Validate API key
  if (req.headers.authorization !== `Bearer ${apiKey}`) {
    return res.status(401).send('Unauthorized');
  }

  // Call LLM API with prompt
  axios.post(apiEndpoint, { prompt })
    .then(response => {
      res.json({ response: response.data });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal server error');
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
