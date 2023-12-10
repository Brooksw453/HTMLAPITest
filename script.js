async function callAPI() {
    const apiKey = "dff52d8af4904315ae4c944eaa2a7d1d";
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

    document.getElementById("completionWindow").innerText = data.choices[0].text;
}
