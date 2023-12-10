// script.js

async function callAPI() {
    const promptInput = document.getElementById("promptInput").value;
    const completionWindow = document.getElementById("completionWindow");

    // Retrieve your API secret key from the .env file
    const apiKey = process.env.OPENAI_API_KEY;

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: promptInput,
                max_tokens: 50, // Adjust this as needed
            }),
        });

        const data = await response.json();
        completionWindow.innerText = data.choices[0].text;
    } catch (error) {
        console.error(error);
        completionWindow.innerText = "Error occurred while fetching data from OpenAI API.";
    }
}

