const btn = document.getElementById("generate");
const promptInput = document.getElementById("prompt");
const container = document.getElementById("image-container");

btn.addEventListener("click", async () => {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    alert("Enter a prompt");
    return;
  }

  container.innerHTML = "⏳ Generating image...";

  try {
    const res = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    if (data.error) {
      container.innerHTML = `❌ ${data.error}`;
      return;
    }

    container.innerHTML = `
      <img src="${data.image}"
           style="max-width:100%; border-radius:10px;">
    `;
  } catch (err) {
    container.innerHTML = "❌ Backend not reachable";
    console.error(err);
  }
});
