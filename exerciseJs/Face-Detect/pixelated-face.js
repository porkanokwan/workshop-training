const webcam = document.querySelector(".webcam");
const videoCanvas = document.querySelector(".video");
const faceCanvas = document.querySelector(".face");

const videoCtx = videoCanvas.getContext("2d");
const faceCtx = videoCanvas.getContext("2d");

const faceDetector = new FaceDetector();
console.log(webcam, videoCanvas, faceCanvas, faceDetector);


async function populateVideo() {
    // ขออนุญาตเข้าถึงกล้องวิดีโอ (take time)
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
    });
    console.log(stream);
    webcam.srcObject = stream;
    // Sometimes take time
    await webcam.play();
    // size the canvases to be the same size as the video
    videoCanvas.width = webcam.videoWidth;
    videoCanvas.height = webcam.videoHeight;
    faceCanvas.width = webcam.videoWidth;
    faceCanvas.height = webcam.videoHeight;
};

async function detect() {
    const faces = await faceDetector.detect(webcam);
    console.log(faces);
    // ask the browser when the next animation frame is and tell it to run detect for us
    // requestAnimationFrame(detect);
};

populateVideo().then(detect)

// console.log(populateVideo()); // Promise หมายความว่า getUserMedia() เป็น asynchronus function เลย return Promise ออกมา
// ถ้ากดปุ่มไม่อนุญาตมันจะ Error: Permission Denied แต่ถ้าอนุญาตมันจะ return MediaStream เอามาใช้ในการ put stream 