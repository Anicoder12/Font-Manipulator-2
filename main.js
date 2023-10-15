leftwristx = 0
leftwristy = 0
rightwristx = 0
rightwristy = 0
function setup()
{
    video = createCapture(VIDEO);
    video.size(450,450);    

    canvas = createCanvas(400,400);
    canvas.position(500,200);

    p = ml5.poseNet(video, modelloaded);
    p.on("pose", gotposes);
}

function draw() 
{
    background(0);
    fill(0);
    textSize("Ananya", 50, 50);

    n = Number(leftwristx - rightwristx);
    n1 = floor(n);
    n2 = Number(leftwristy - rightwristy); 
    n3 = floor(n2);
    textSize("Ananya", n1, n3);
}

function modelloaded() 
{
console.log("Model has successfully been loaded.")
}

function gotposes(results) 
{
if(results.length > 0) 
{
console.log(results);
leftwristx = results[0].pose.leftWrist.x;
leftwristy = results[0].pose.leftWrist.y;
rightwristx = results[0].pose.rightWrist.x;
rightwristy = results[0].pose.rightWrist.y;
}
}
