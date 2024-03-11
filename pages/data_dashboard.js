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


let user_name = document.querySelector('.userName');
let cookieArr = document.cookie.split('=')
user_name.innerHTML = cookieArr[1];

let menu_el = document.querySelector('.menu');
let menu1_el = document.querySelector('.menu1');
let nav = document.querySelector('nav');
menu_el.addEventListener('click', ()=>{
    console.log('asdf')
    nav.style.display = 'flex'
})
menu1_el.addEventListener('click', ()=>{
    nav.style.display = 'none'
})

let logout_el = document.querySelectorAll('.logout');
console.log(logout_el)
logout_el[0].addEventListener('click', () => {
    console.log('1번')
    // 서버로 로그아웃 요청을 보내는 코드
  fetch('/logout', {
    method: 'POST',
    // 필요한 경우 CSRF 토큰 등의 추가 정보를 포함
  }).then(response => {
    if (response.ok) {
      // 로그아웃 성공 시, 예를 들어 로그인 페이지로 리다이렉트
      window.location.href = '/';
    }
  })
})
logout_el[1].addEventListener('click', () => {
    console.log('1번')
    // 서버로 로그아웃 요청을 보내는 코드
   fetch('/logout', {
     method: 'POST',
     // 필요한 경우 CSRF 토큰 등의 추가 정보를 포함
   }).then(response => {
     if (response.ok) {
       // 로그아웃 성공 시, 예를 들어 로그인 페이지로 리다이렉트
       window.location.href = '/';
     }
   })
 })



(fetch('/data').then(res => res.json()).then(
    data => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const koreanDate = `${year}-${month}-${day}`;
        let total_el = document.querySelector('.total_num');
        let left_el = document.querySelector('.left_num')
        total_el.innerHTML = Object.values(data).length;

        let boiler1_data = data.boiler1[data.boiler1.length-1];
        let boiler1_check_el = boiler1_data.createdAt;
        const boiler1_utcDate = new Date(boiler1_check_el);
        const boiler1_krDate = new Date(boiler1_utcDate.getTime());
        
        const boiler1_year = boiler1_krDate.getFullYear();
        const boiler1_month = String(boiler1_krDate.getMonth() + 1).padStart(2, '0');
        const boiler1_day = String(boiler1_krDate.getDate()).padStart(2, '0');
        const boiler1_krDates = `${boiler1_year}-${boiler1_month}-${boiler1_day}`;
        
        let boiler2_data = data.boiler2[data.boiler2.length-1]
        let boiler2_check_el = boiler2_data.createdAt;
        const boiler2_utcDate = new Date(boiler2_check_el);
        const boiler2_krDate = new Date(boiler2_utcDate.getTime());
       
        const boiler2_year = boiler2_krDate.getFullYear();
        const boiler2_month = String(boiler2_krDate.getMonth() + 1).padStart(2, '0');
        const boiler2_day = String(boiler2_krDate.getDate()).padStart(2, '0');
        const boiler2_krDates = `${boiler2_year}-${boiler2_month}-${boiler2_day}`;
       

        let left_sum = 0
        if(boiler1_krDates == koreanDate) {
            
            left_sum = left_sum
        }else {
            left_sum = left_sum+1
        }
        if(boiler2_krDates == koreanDate) {
            left_sum = left_sum
        }else {
            left_sum = left_sum+1
        }
        left_el.innerHTML = `${left_sum}`
    }
).catch(error => console.error('에러발생',error)));

