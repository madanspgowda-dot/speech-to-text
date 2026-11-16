const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const output = document.getElementById("output");

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = true;

recognition.onstart = () => {
    console.log("Listening...");
};

recognition.onresult = (event) => {

    console.log("Speech received!");

    let text = "";

    for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript + " ";
    }

    output.value = text;
};

recognition.onerror = (event) => {
    console.log("Error:", event.error);
};

recognition.onend = () => {
    console.log("Recognition stopped");
};

startBtn.addEventListener("click", () => {
    recognition.start();
});

stopBtn.addEventListener("click", () => {
    recognition.stop();
});