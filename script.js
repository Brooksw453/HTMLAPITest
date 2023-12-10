async function callAPI() {
    const apiKey = "4bd7e7e90d2b4a05b9720e4d52a01bdc";
    const apiUrl = "https://winchellai.openai.azure.com/";

    const promptInput = document.getElementById("promptInput").value;

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: promptInput,
            max_tokens: 100
        })
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
        document.getElementById("completionWindow").innerText = data.choices[0].text;
    } else {
        document.getElementById("completionWindow").innerText = "No response received from the API.";
    }
}
