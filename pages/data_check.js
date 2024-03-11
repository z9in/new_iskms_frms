    var video = document.getElementById('qr-video');
    // var canvasElement = document.getElementById("canvas");
    // var canvas = canvasElement.getContext("2d");
    // var loadingMessage = document.getElementById("loadingMessage");
    // var outputContainer = document.getElementById("output");
    // var outputMessage = document.getElementById("outputMessage");
    // var outputData = document.getElementById("outputData");
    let check_btn = document.getElementById('check_btn');
    let results = document.getElementById('result')

    // function drawLine(begin, end, color) {
    //   canvas.beginPath();
    //   canvas.moveTo(begin.x, begin.y);
    //   canvas.lineTo(end.x, end.y);
    //   canvas.lineWidth = 4;
    //   canvas.strokeStyle = color;
    //   canvas.stroke();
    // }

    // Use facingMode: environment to attemt to get the front camera on phones
    check_btn.addEventListener('click',()=>{
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
        video.play();
        // requestAnimationFrame(tick);
        scanQRCode();
      });
    })
    
    function scanQRCode() {
      const video = document.getElementById('qr-video');
      const canvasElement = document.createElement('canvas');
      const context = canvasElement.getContext('2d');
    
      canvasElement.width = video.videoWidth;
      canvasElement.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      
      const imageData = context.getImageData(0, 0, canvasElement.width, canvasElement.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "attemptBoth",
      });
    
      if (code) {
       results.innerHTML= `Found QR code: ${code.data}`
        // QR 코드 인식 성공 시, 여기에서 추가 작업을 수행합니다.
      } else {
        // QR 코드를 찾지 못했을 때의 처리
        requestAnimationFrame(scanQRCode); // 다시 스캔 시도
      }
    }
    


    // function tick() {
    //   // loadingMessage.innerText = "⌛ Loading video..."
    //   if (video.readyState === video.HAVE_ENOUGH_DATA) {
    //     loadingMessage.hidden = true;
    //     canvasElement.hidden = false;
    //     outputContainer.hidden = false;

    //     canvasElement.height = video.videoHeight;
    //     canvasElement.width = video.videoWidth;
    //     canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    //     var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    //     var code = jsQR(imageData.data, imageData.width, imageData.height, {
    //       inversionAttempts: "dontInvert",
    //     });
    //     if (code) {
    //       drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
    //       drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
    //       drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
    //       drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
    //       // outputMessage.hidden = true;
    //       // outputData.parentElement.hidden = false;
    //       outputMessage.innerText = code.data;
    //       video.srcObject.getTracks().stop();
    //       video.srcObject = null;          
    //     } else {
    //       // outputMessage.hidden = false;
    //       // outputData.parentElement.hidden = true;
    //     }
    //   }
    //   requestAnimationFrame(tick);
    // }

