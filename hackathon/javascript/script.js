function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation
    if (username === "cyber-knight" && password === "hello") {
        errorMessage.innerHTML = ""; // Clear any previous error messages
        alert("Login successful!");
        window.location.replace("index2.html");
    } else {
        errorMessage.innerHTML = "Invalid username or password. Please try again.";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const videoInput = document.getElementById('videoInput');
    const videoPlayer = document.getElementById('videoPlayer');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let videoStream;

    videoInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            const objectURL = URL.createObjectURL(file);
            videoPlayer.src = objectURL;
            startVideoAnalysis(objectURL);
        }
    });

    function startVideoAnalysis(videoURL) {
        videoPlayer.addEventListener('loadedmetadata', function () {
            canvas.width = videoPlayer.videoWidth;
            canvas.height = videoPlayer.videoHeight;
            videoStream = new ImageCapture(videoPlayer.srcObject.getVideoTracks()[0]);

            // Start video analysis
            analyzeVideoFrames();
        });
    }

    function analyzeVideoFrames() {
        function processFrame() {
            ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

            // Example: Apply Canny edge detection
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = new Uint8Array(imageData.data.buffer);
            const src = cv.matFromArray(canvas.height, canvas.width, cv.CV_8UC4, data);
            const dst = new cv.Mat();
            cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);
            cv.Canny(src, dst, 50, 150);
            cv.imshow(canvas, dst);

            // Release memory
            src.delete();
            dst.delete();

            // Continue processing frames
            requestAnimationFrame(processFrame);
        }

        // Start processing frames
        processFrame();
    }

    // Handle video player cleanup when the page is closed
    window.addEventListener('beforeunload', function () {
        if (videoStream) {
            videoStream.stop();
        }
    });
});
// script.js
function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}






