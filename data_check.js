let year_el = document.querySelectorAll('.year');
let mon_el = document.querySelectorAll('.monthy');
let day_el = document.querySelectorAll('.day');
let hour_el = document.querySelectorAll('.hour');
let minit_el = document.querySelectorAll('.minit');
console.log(year_el)






setInterval(()=>{
    let dates = new Date()
    year_el[0].innerHTML = dates.getFullYear()+"년 ";
    // year_el[1].innerHTML = dates.getFullYear()+"년 ";
    mon_el[0].innerHTML = dates.getMonth()+1+"월 ";
    // mon_el[1].innerHTML = dates.getMonth()+1+"월 ";
    day_el[0].innerHTML = dates.getDate()+"일 ";
    // day_el[1].innerHTML = dates.getDate()+"일 ";
    hour_el[0].innerHTML = dates.getHours()+"시 ";
    if(dates.getMinutes()<10) {
        minit_el[0].innerHTML = "0"+dates.getMinutes()+"분";
    }else {
        minit_el[0].innerHTML = dates.getMinutes()+"분";
    }
    // hour_el[1].innerHTML = dates.getHours()+"시 ";
    // if(dates.getMinutes()<10) {
    //     minit_el[1].innerHTML = "0"+dates.getMinutes()+"분";
    // }else {
    //     minit_el[1].innerHTML = dates.getMinutes()+"분";
    // }
},1000);


var video = document.createElement("video");
var canvasElement = document.getElementById("canvas");
var canvas = canvasElement.getContext("2d");
let check_btn = document.getElementById('check_btn');
let result_el = document.getElementById('result');
let boiler1 = document.querySelectorAll('.check_form');

function drawLine(begin, end, color) {
  canvas.beginPath();
  canvas.moveTo(begin.x, begin.y);
  canvas.lineTo(end.x, end.y);
  canvas.lineWidth = 4;
  canvas.strokeStyle = color;
  canvas.stroke();
}

// Use facingMode: environment to attemt to get the front camera on phones
check_btn.addEventListener('click', ()=>{
  navigator.mediaDevices.getUserMedia({ video: { 
    facingMode: "environment",
    width: {ideal: 300},
    height: {ideal:300}
  } }).then(function(stream) {
    video.srcObject = stream;
    video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
    video.play();
    requestAnimationFrame(tick);
  });
})

function tick() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvasElement.hidden = false;

    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    var code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });
    if (code) {
      drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
      drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
      drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
      drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
      
      boiler1[code.data].style.display = 'flex';
      

   } else {
      requestAnimationFrame(tick);
    }
  }
  
}