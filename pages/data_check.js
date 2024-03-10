
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
document.addEventListener('DOMContentLoaded', (event) => {
  const videoElement = document.getElementById('camera');

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        videoElement.srcObject = stream;
      })
      .catch(function(error) {
        console.log("카메라에 접근할 수 없습니다: ", error);
      });
  } else {
    alert('getUserMedia를 지원하지 않는 브라우저입니다.');
  }
});