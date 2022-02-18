var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript.toLowerCase();
    document.getElementById("textbox").innerHTML = content;
    if (content == "selfie"){
        speak();
    }
}
function speak(){
    synth = window.speechSynthesis;
    Webcam.attach(camera);
    speech_data = "Taking your selfie in 5 seconds";
    utterThis = new SpeechSynthesisUtterance(speech_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id = "pic1";
        take_snapshot();
    },5000);

    setTimeout(function(){
        img_id = "pic2";
        speech_data = "Taking your selfie now";
        utterThis = new SpeechSynthesisUtterance(speech_data);
        synth.speak(utterThis);
        take_snapshot();
    },10,000);
    
    setTimeout(function(){
        img_id = "pic3";
        speech_data = "One more pic now";
        utterThis = new SpeechSynthesisUtterance(speech_data);
        synth.speak(utterThis);
        take_snapshot();
    },15,000);
}

camera = document.getElementById("camera");
Webcam.set({
    width :360,
    height :250,
    image_format :"png",
    jpeg_quality :90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
       if(img_id == "pic1"){
        document.getElementById("result1").innerHTML='<img id="pic1" src="'+data_uri+'"/>';
       }
       if(img_id == "pic2"){
        document.getElementById("result2").innerHTML='<img id="pic2" src="'+data_uri+'"/>';
       }
       if(img_id == "pic3"){
        document.getElementById("result3").innerHTML='<img id="pic3" src="'+data_uri+'"/>';
       }
    });
}