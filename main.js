function preload(){
    clown_nose = loadImage("https://i.postimg.cc/SQnmf6qj/clown-nose-by-andreah1705-dbhnkej-fullview.png");
    clown_wig = loadImage("https://i.postimg.cc/Kv0zSv5X/9218dd278ab2bad13b9f302858bb6844-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(700,300);
    video=createCapture(VIDEO);
   video.size(600,500);
   video.hide();
   poseNet=ml5.poseNet(video,modeloaded);
   poseNet.on("pose",gotResult)
}

function modeloaded(){
    console.log("Pose has been recognised")
}

function draw(){
    image(video,0,0,600,500)
   image(clown_nose,nosex,nosey,50,50)
   image(clown_wig,right_eye_x,right_eye_y,200,200)
}
nosex=""
right_eye_x=""
right_eye_y=""
nosey=""

function gotResult(results){
    if (results.length>0) {
        console.log(results)
        nosex=results[0].pose.nose.x-20;
        nosey=results[0].pose.nose.y-20;
        right_eye_x=results[0].pose.rightEye.x-70;
        right_eye_y=results[0].pose.rightEye.y-200;

    }
}