function preload(){

}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}

function modelloaded(){
    console.log("modelloaded");
}

function gotposes(results){
if(results.length > 0){
    console.log(results);
    console.log("Nose X = "+results[0].pose.nose.x);
    console.log("Nose Y = "+results[0].pose.nose.y);
}

}

function draw(){
image(video, 0, 0, 300, 300);
}
function take_snaphot(){
    save("realtimefilter.png")
}
