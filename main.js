var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =  new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;

    speak();
}

function speak(){

    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
width:360 , 
height:250 ,
image_format : 'png',
png_quality:100
});
camera = document.getElementById("camera");