x = 0;
y = 0;
screen_width = 0;
screen_heigth = 0;
var apple = "apple.png"
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
    loadImage(apple.png);
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
  to_number = Number(content);
  if(Number.isInteger(to_number)){
    (Number.isInteger(to_number) =true)
  {
    draw_apple = set;
  }
    {
      document.getElementById("status").innerHTML = "The speech has not recognized a number.";

    }
  }

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width = window.innerWidth;
  screen_heigth = window.innerHeight;
  canvas = createCanvas(screen_heigth-150,screen_width);
  canvas.position(0,150)
  

}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i = 1; i<= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
