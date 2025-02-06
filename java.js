let button = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Function to make the AI speak
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
}

// Greeting function
function greet() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon");
    } else {
        speak("Good Evening");
    }
}

// Speech Recognition
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentindex = event.resultIndex;
    let transcript = event.results[currentindex][0].transcript.toLowerCase(); // Convert to lowercase for case-insensitive matching
    content.innerText = transcript; // Update the button's content
    takeCommand(transcript);
};

// Button click to start recognition
button.addEventListener("click", () => {
    recognition.start();
    button.style.display="none"
    voice.style.display="block"
    console.log("Speech recognition started...");
});

// Function to handle commands
function takeCommand(message) {
    button.style.display="flex"
    voice.style.display="none"
    if (message.includes("hello")) { // Corrected method name
        speak("Hello sir, what can I help you with?");
    } else if (message.includes("how are you")) {
        speak("I am your friend created by utkarsh, but thank you for asking. How can I assist you?");
    } else if(message.includes("open youtube")){
        speak("opening youtube....")
        window.open("https://www.youtube.com/","_blank")
    } 
    else if(message.includes("open google")){
        speak("opening google....")
        window.open("https://www.google.co.in/","_blank")
    } 
    else if(message.includes("open facebook")){
        speak("opening facebook....")
        window.open("https://www.facebook.com/","_blank")
    } 
    else if(message.includes("open instagram")){
        speak("opening instagram....")
        window.open("https://www.instagram.com/","_blank")
    } 
    else if(message.includes("open calculator")){
        speak("opening calculator....")
        window.open("calculator://")
    } 
    else if(message.includes("open camera")){
        speak("opening camera....")
        window.open("Camera://")
    } 
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp....")
        window.open("whatsapp://")
    } else if(message.includes("time")){
        let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    } 
    else if(message.includes("date")){
        let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else {
        speak(`this is what i found on internet regarding ${message.replace("chiku","")}`)
        window.open(`https://www.google.co.in/search?q=${message.replace("chiku","")}`)
    }

}
