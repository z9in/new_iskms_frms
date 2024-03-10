const express = require('express');
let {User, sequelize} = require('./database/userList.js');
let {sequelize1, Boiler, Boiler2, Aircon, Water, Pool, Water_check5, Water_check9, Water_check13, Water_check17, Water_check21, Inven_salt, Inven_ueng, Inven_ph, Inven_avita, Transfer, Center200_middle, Center200_max, Center200_low, Center_middle, Center_max, Center_low, Pump} = require('./database/boiler.js');
let cookieParser = require('cookie-parser');
let session = require('express-session')
const {where} = require('sequelize')
const bodyParser = require('body-parser');
// const { FORCE } = require('sequelize/types/index-hints.js');
const app = express();
const port = 3000;

app.use('/pages',express.static('pages'));
app.use(express.static('pages'));
// app.use(cookieParser)
app.use(session({
  secret: '비밀 키',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

sequelize.sync( {force: true} ).then(async () => {
  console.log('유저데이터연결완료');

  // 사용자 데이터 찾기 또는 생성
  const [user, created] = await User.findOrCreate({
    where: { userIds: 'admin' },
    defaults: {
      userPwds: '1234',
      userName: 'Admin',
      userRole: 'Admin'
    }
  });

  if (created) {
    // console.log('새로운 사용자 생성: ', user);
  } else {
    // console.log('기존 사용자 찾음: ', user);
  }
}).catch((error) => {
  console.error('데이터베이스 연결 또는 동기화 에러: ', error);
});

sequelize1.sync( {force: true} ).then(async () => {
  console.log('유저데이터연결완료');

  // Boiler 데이터 찾기 또는 생성
  const [boiler, createdBoiler] = await Boiler.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use: 100,
      yesterday_use: 100,
      today_use: 100,
      value_use: 100,
      value_month_use: 100,
      last_month_time: 100,
      yesterday_time: 100,
      today_time: 100,
      value_time: 100,
      value_month_time: 100
    }
  });
  
  const [boiler2, createdBoiler2] = await Boiler2.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use: 100,
      yesterday_use: 100,
      today_use: 100,
      value_use: 100,
      value_month_use: 100,
      last_month_time: 100,
      yesterday_time: 100,
      today_time: 100,
      value_time: 100,
      value_month_time: 100
    }
  });
  const [aircon, createdAircon] = await Aircon.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use: 100,
      yesterday_use: 100,
      today_use: 100,
      value_use: 100,
      value_month_use: 100,
      last_month_time: 100,
      yesterday_time: 100,
      today_time: 100,
      value_time: 100,
      value_month_time: 100
    }
  });
  const [water, createdWater] = await Water.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use: 100,
      yesterday_use: 100,
      today_use: 100,
      value_use: 100,
      value_month_use: 100
    }
  });
  const [pool, createdPool] = await Pool.findOrCreate({
    where: { id: 1 },
    defaults: {
      voltage :100,
      ampere : 100,
      temperature : 30,
      etc : '특이사항없음'
    }
  });
  const [water_check5, createdWater_check5] = await Water_check5.findOrCreate({
    where: { id: 1 },
    defaults: {
      cl_value :100,
      ph_value : 100,
      blur_value : 30,
      temp_man_pool : 20,
      temp_baby_pool : 20,
      temp_pool : 20,
      etc : '특이사항없음'
    }
  });
  const [water_check9, createdWater_check9] = await Water_check9.findOrCreate({
    where: { id: 1 },
    defaults: {
      cl_value :100,
      ph_value : 100,
      blur_value : 30,
      temp_man_pool : 20,
      temp_baby_pool : 20,
      temp_pool : 20,
      etc : '특이사항없음'
    }
  });
  const [water_check13, createdWater_check13] = await Water_check13.findOrCreate({
    where: { id: 1 },
    defaults: {
      cl_value :100,
      ph_value : 100,
      blur_value : 30,
      temp_man_pool : 20,
      temp_baby_pool : 20,
      temp_pool : 20,
      etc : '특이사항없음'
    }
  });
  const [water_check17, createdWater_check17] = await Water_check17.findOrCreate({
    where: { id: 1 },
    defaults: {
      cl_value :100,
      ph_value : 100,
      blur_value : 30,
      temp_man_pool : 20,
      temp_baby_pool : 20,
      temp_pool : 20,
      etc : '특이사항없음'
    }
  });
  const [water_check21, createdWater_check21] = await Water_check21.findOrCreate({
    where: { id: 1 },
    defaults: {
      cl_value :100,
      ph_value : 100,
      blur_value : 30,
      temp_man_pool : 20,
      temp_baby_pool : 20,
      temp_pool : 20,
      etc : '특이사항없음'
    }
  });
  const [inven_salt, createdInven_salt] = await Inven_salt.findOrCreate({
    where: { id: 1 },
    defaults: {
      input :100,
      output : 100,
      lefts : 30,
      use_value : 20,      
      etc : '특이사항없음'
    }
  });
  const [inven_ueng, createdInven_ueng] = await Inven_ueng.findOrCreate({
    where: { id: 1 },
    defaults: {
      input :100,
      output : 100,
      lefts : 30,
      use_value : 20,      
      etc : '특이사항없음'
    }
  });
  const [inven_ph, createdInven_ph] = await Inven_ph.findOrCreate({
    where: { id: 1 },
    defaults: {
      input :100,
      output : 100,
      lefts : 30,
      use_value : 20,      
      etc : '특이사항없음'
    }
  });
  const [inven_avita, createdInven_avita] = await Inven_avita.findOrCreate({
    where: { id: 1 },
    defaults: {
      input :100,
      output : 100,
      lefts : 30,
      use_value : 20,      
      etc : '특이사항없음'
    }
  });
  const [transfer, createdTransfer] = await Transfer.findOrCreate({
    where: { id: 1 },
    defaults: {
      temp09 :100,
      temp17 : 100,
      temp21 : 30
    }
  });
  const [center200_middle, createdCenter200_middle] = await Center200_middle.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use :100,
      yesterday_use : 100,
      today_use : 30,
      value_use : 20,      
      value_month_use : 100
    }
  });
  const [center200_max, createdCenter200_max] = await Center200_max.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use :100,
      yesterday_use : 100,
      today_use : 30,
      value_use : 20,      
      value_month_use : 100
    }
  });
  const [center200_low, createdCenter200_low] = await Center200_low.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use :100,
      yesterday_use : 100,
      today_use : 30,
      value_use : 20,      
      value_month_use : 100
    }
  });
  const [center_middle, createdCenter_middle] = await Center_middle.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use :100,
      yesterday_use : 100,
      today_use : 30,
      value_use : 20,      
      value_month_use : 100
    }
  });
  const [center_max, createdCenter_max] = await Center_max.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use :100,
      yesterday_use : 100,
      today_use : 30,
      value_use : 20,      
      value_month_use : 100
    }
  });
  const [center_low, createdCenter_low] = await Center_low.findOrCreate({
    where: { id: 1 },
    defaults: {
      last_month_use :100,
      yesterday_use : 100,
      today_use : 30,
      value_use : 20,      
      value_month_use : 100
    }
  });
  const [pump, createdPump] = await Pump.findOrCreate({
    where: { id: 1 },
    defaults: {
      yesterday_use : 100,
      today_use : 30,
      value_use : 20,   
      value_month_use : 100,
      last_month_use : 100,
      temp_input : 20,
      temp_output : 20,
      temp1_input : 20,
      temp1_output : 20,
      temp2_input : 20,
      temp2_output : 20,
      press1_inpt : 20,
      press1_output : 10,
      press2_inpt : 20,
      press2_output : 10,
      amp : 20
    }
  });
});

// 로그인API
app.post('/members', async function(req, res) {
 
  const postData = req.body; // 요청의 body에서 데이터 추출
  let userId = postData.userId;  
  let checkId = await User.findAll( {where : {userIds : userId}})
  let reviewId = Boolean(checkId[0])
  if(reviewId==false){
    res.send(`<script>alert('존재하지 않는 아이디입니다.'); window.location.replace('/');</script>`)
  }else {
    // console.log(checkId.userPwds, postData.password)
    if(checkId[0].userPwds == postData.password){
      // console.log(checkId[0].userName)
      req.session.userId = userId
      res.cookie('name',checkId[0].userName)
      res.send(`<script> alert('로그인되었습니다.'); window.location.replace('/dashboard'); </script>`);
    }else {
      res.send(`<script>alert('비밀번호가 맞지 않습니다.'); window.location.replace('/');</script>`)
    }
  }
});

//대시보드 접속
app.get('/dashboard', (req,res)=> {
  if(req.session.userId) {
    res.sendFile(__dirname+'/pages/dashboard.html')
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
  
})

//데이터 발송
app.post('/data', async (req, res) => {
  const date = req.body.date
  let boiler1_data = await Boiler.findOne({
    order: [['updatedAt', 'DESC']]
  });
  let boiler2_data = await Boiler2.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let aircon_date = await Aircon.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let water_date = await Water.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let pool_date = await Pool.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let water_check5 = await Water_check5.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let water_check9 = await Water_check5.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let water_check13 = await Water_check5.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let water_check17 = await Water_check5.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let water_check21 = await Water_check5.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let inven_salt = await Inven_salt.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let inven_ph = await Inven_ph.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let inven_ueng = await Inven_ueng.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let inven_avita = await Inven_avita.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let transfer = await Transfer.findAll();
  let center200_middle = await Center200_middle.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let center200_max = await Center200_max.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let center200_low = await Center200_low.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let center_middle = await Center_middle.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let center_max = await Center_max.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let center_low = await Center_low.findAll({
    order: [['updatedAt', 'DESC']]
  });
  let pump_data = await Pump.findAll({
    order: [['updatedAt', 'DESC']]
  })
  let data = {
    'boiler1' : [boiler1_data],
    'boiler2' : [boiler2_data],
    'aircon' : [aircon_date],
    'water' : [water_date],
    'pool' : [pool_date],
    'water_check5' : [water_check5],
    'water_check9' : [water_check9],
    'water_check13' : [water_check13],
    'water_check17' : [water_check17],
    'water_check21' : [water_check21],
    'inven_salt' : [inven_salt],
    'inven_ueng' : [inven_ueng],
    'inven_ph' : [inven_ph],
    'inven_avta' : [inven_avita],
    'transfer' : [transfer],
    'center200_middle' : [center200_middle],
    'center200_max' : [center200_max],
    'center200_low' : [center200_low],
    'center_middle' : [center_middle],
    'center_max' : [center_max],
    'center_low' : [center_low],
    'pump' : [pump_data]
  }
  res.json(data);
});

//boiler1 업데이트
app.post('/boiler1', async (req,res)=>{
  let values = req.body.today;
  let datas = await Boiler.findOne({
    order: [['updatedAt', 'DESC']]
  })
  let data = JSON.parse(JSON.stringify(datas));
  console.log("로그", values, data)
  let last_month = data.last_month;
  let yesterday = data.yesterday;
  let user = await Boiler.create({
    last_month: last_month,
    yesterday: yesterday,
    today: values,
    value: values - yesterday,
    value_month: values - last_month,
    state: '양호'
  })
  res.redirect('/checklist');
})

//boiler2 업데이트
app.post('/boiler2', async (req,res)=>{
  let values = req.body.today;
  let datas = await Boiler2.findOne({
    order: [['updatedAt', 'DESC']]
  })
  let data = JSON.parse(JSON.stringify(datas));
  console.log("로그", values, data)
  let last_month = data.last_month;
  let yesterday = data.yesterday;
  let user = await Boiler2.create({
    last_month: last_month,
    yesterday: yesterday + values,
    today: values,
    value: values - yesterday,
    value_month: values - last_month,
    state: '양호'
  })
  res.redirect('/checklist');
})

//업무보고페이지접속
app.get('/report', (req,res)=>{
  if(req.session.userId) {
    res.sendFile(__dirname+"/pages/total_report.html")
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
})

//최초 페이지 접속
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/pages/index.html')
});

//점검 페이지 접속
app.get('/check', (req, res) => {
  if(req.session.userId) {
    res.sendFile(__dirname+"/pages/check.html")
  } else {
    res.send(`<script>alert('로그인이 필요합니다.'); window.location.replace('/');</script>`);
  }
});

// 로그아웃 요청 처리
app.post('/logout', (req, res) => {
  // 세션 파괴
  req.session.destroy((err) => {
    if (err) {
      // 세션 파괴에 실패한 경우
      console.error(err);
      res.status(500).send('로그아웃에 실패했습니다.');
    } else {
      // 세션 파괴에 성공한 경우, 클라이언트 측에 성공 응답을 보냄
      res.send('로그아웃 되었습니다.');
    }
  });
});


// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});