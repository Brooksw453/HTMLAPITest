async function callAPI() {
    const apiKey = "dff52d8af4904315ae4c944eaa2a7d1d";
    const apiUrl = "https://winchellai.azurewebsites.net/";

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
