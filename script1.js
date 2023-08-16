function runSpeechRecognition(){
    var out = document.getElementById("output");
    var action = document.getElementById("action");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition =  new SpeechRecognition();
    console.log(recognition);

    recognition.onstart = function () {
        action.innerHTML = "Listening, Please Speak....."
    }

    recognition.onspeechend = function () {
        action.innerHTML = "Stopped Listening, Hope you are completed...."
    }
    recognition.onresult = function (event){
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;

        console.log(transcript);
        console.log(confidence);
        output.innerHTML = transcript;
    }
    recognition.start();
}