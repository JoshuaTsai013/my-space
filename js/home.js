let x;
let y;
let xspeed;
let yspeed;
let DVD;
let stopImg;
let r, g, b;

let pauseBtn;
let playBtn;
let nextBtn;
let prevBtn;
let stopBtn;
function preload() {
    DVD = loadImage("/img/runningIcon1.png");
    stopImg = loadImage("/img/stop.jpg");
}

function setup() {
    frameRate(60);
    let canvas = createCanvas(800, 600);
    canvas.parent('playground');
    x = random(width);
    y = random(height);
    xspeed = 3;
    yspeed = 3;
    setColor();

    stopBtn = select('#stop-btn');
    stopBtn.mousePressed(stopCustom);

    pauseBtn = select('#pause-btn');
    playBtn = select('#play-btn');
    pauseBtn.mousePressed(pauseCustom);
    playBtn.mousePressed(playCustom);

    nextBtn = select('#next-btn');
    prevBtn = select('#prev-btn');
    nextBtn.mousePressed(nextCustom);
    prevBtn.mousePressed(prevCustom);
}

function draw() {
    background(12, 12, 12);
    //noCursor();
    tint(r, g, b);
    image(DVD, x, y);
    x += xspeed;
    y += yspeed;

    if (x + DVD.width >= width) {
        xspeed = -xspeed;
        x = width - DVD.width;
        setColor();
    }
    else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
        setColor();
    }
    if (y + DVD.height >= height) {
        yspeed = -yspeed;
        y = height - DVD.height;
        setColor();
    }
    else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
        setColor();
    }
}

async function setColor(){
    await wait(250)
    r = random(100, 256);
    g = random(100, 256);
    b = random(100, 256);
    console.log('done')
}

async function wait(ms) {
    console.log('called')
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
}

function playCustom() {
    loop();
}

function pauseCustom() {
    noLoop();
}

function nextCustom(){

}

function prevCustom(){

}

function stopCustom(){
    
    tint(255, 255, 255);
    image(stopImg, 0, 0, 800, 600);
    noLoop();
}

