var x;
var wordsCt = 0;
let count = 60;
var inc = 0;
var str = "Aditya Pratap Singh Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae natus dolorem";
var res = str.split("");
const textInput = document.querySelector("#inpt");
function myfunction(){
    if(wordsCt === str.length) textInput.disabled = true;

    //getting last entered value and updating text field
    x = textInput.value;
    if(x[x.length-1] ===' ') textInput.value = '';

    //changing span color
    let SpanId = document.querySelector("#a"+wordsCt);
    if(x[x.length-1] === res[wordsCt]){
        SpanId.style.background = "linear-gradient(to right, #BDE7BD 100%,#eeecec 0%)"
        SpanId.style.color ="green"
    } else {
        inc++;
        SpanId.style.background = "linear-gradient(to right, #fab400 100%, #eeecec 0%)"
        // SpanId.style.color ="red"
    }
    wordsCt++;
    console.log(wordsCt, inc, x, res[wordsCt-1], str.length)
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