
// document.getElementById('scan-btn').addEventListener('click', function() {
//   // 카메라 접근 및 QR 코드 스캔 로직
//   navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
//       .then(function(stream) {
//           // 비디오 스트림을 사용하여 QR 코드 스캔
//           // 여기서는 구현의 간소화를 위해 상세 구현을 생략합니다.
//           // jsQR 라이브러리를 사용한 QR 코드 스캔 로직을 추가해야 합니다.
//       })
//       .catch(function(error) {
//           console.error("카메라 접근에 실패했습니다.", error);
//       });
// });

// // QR 코드 스캔 결과 처리 예시 (상세 구현은 생략)
// // 스캔된 QR 코드 데이터를 기반으로 조건을 확인하고, 조건에 맞으면 실행
// if (scannedData === "특정 조건") {
//   document.getElementById('hidden-content').style.display = 'block';
// }

const scan_btn_el = document.querySelector('#scan-btn');
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(function(stream) {
    document.getElementById('camera').srcObject = stream;
  });

function scanQRCode() {
  const video = document.querySelector('#camera');
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
    alert(`Found QR code: ${code.data}`);
    // QR 코드 인식 성공 시, 여기에서 추가 작업을 수행합니다.
  } else {
    // QR 코드를 찾지 못했을 때의 처리
    requestAnimationFrame(scanQRCode); // 다시 스캔 시도
  }
}
scanQRCode()

// scan_btn_el.addEventListener('click', () => {
//   const videoElement = document.getElementById('camera');

//   if (navigator.mediaDevices.getUserMedia) {
//     const constraints = {
//       video: {
//         facingMode: "environment" // 후면 카메라에 접근
//       }
//     };

//     navigator.mediaDevices.getUserMedia(constraints)
//       .then(function(stream) {
//         videoElement.srcObject = stream;
//       })
//       .catch(function(error) {
//         console.log("카메라에 접근할 수 없습니다: ", error);
//       });
      
//   } else {
//     alert('getUserMedia를 지원하지 않는 브라우저입니다.');
//   }
// });

