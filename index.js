var x;
var wordsCt = 0;
let count = 60;
var inc = 0;
var str = "The first thing that pops into my mind when I look at this paper is my consideration of the kind of audience I had. I was assuming they were very or somewhat knowledgeable about the topic I chose. I realize this is not true now. This is the process that goes on in my mind when I first meet people. I think, for the audience I had, the main idea needed to be more concrete. As I went on in this class the kind of topics I chose got more & more concrete & audience consideration grew stronger in forming my papers.";
var res = str.split("");
const textInput = document.querySelector("#inpt");



function myfunction(){
    if(wordsCt === str.length) textInput.disabled = true;

// test; for backspace
    var contn = true;
     textInput.addEventListener('keydown', function(event){
        if(event.key === "Backspace" || event.code === "Backspace"){
            textInput.value = '';
            contn = false;
            console.log("Baackspace");
        }
    });
    if(!contn) return;
//end test
   
    //getting last entered value and updating text field
    x = textInput.value;
    if(x[x.length-1] ===' ') textInput.value = '';

    //changing span color
    let SpanId = document.querySelector("#a"+wordsCt);
    if(count <= 1) return;
    else if(x[x.length-1] === res[wordsCt]){
        SpanId.style.background = "linear-gradient(to right, #BDE7BD 100%,#eeecec 0%)"
        SpanId.style.color ="green"
    } else {
        inc++;
        SpanId.style.background = "linear-gradient(to right, #fab400 100%, #eeecec 0%)"
        // SpanId.style.color ="resd"
    }
    wordsCt++;
    console.log(wordsCt, inc, x, res[wordsCt-1], str.length)
    if(x[x.length-1] === "BackSpace") console.log("key", x[x.length-1]);
}

// Timer
let inter=setInterval(timel,600);

function timel(){
    count--;
    //Timer
    document.querySelector("#timerl").innerHTML="Time: "+count;
    //Speed
    document.querySelector("#spd").innerHTML="Speed: "+(wordsCt*60/((60-count)*2))+"wpm";
    //Accuracy
    document.querySelector("#acc").innerHTML="Accuracy: "+((wordsCt-inc)*100/wordsCt)+"%";

    if(count===0 || wordsCt===str.length) clearInterval(inter);
}
