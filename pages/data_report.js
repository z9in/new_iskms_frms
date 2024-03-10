
// let date = new Date()
// console.log(date.toUTCString())
(fetch('/data', {
    method: 'POST',
    // headers: {
    //     'Content-Types' : 'application/json',
    // },
    // body: JSON.stringify({date: date.toUTCString()} )
}).then(res => res.json()).then(
    data => {
        console.log(data)
        // 보일러1
        let month_use_boiler1_el = document.querySelector('#last_month_use_boiler1');
        let yesterday_use_boiler1_el = document.querySelector('#yesterday_use_boiler1');
        let today_use_boiler1_el = document.querySelector('#today_use_boiler1');
        let values_use_boiler1_el = document.querySelector('#value_use_boiler1');
        let stock_use_boiler1_el = document.querySelector('#value_month_use_boiler1');
        let month_time_boiler1_el = document.querySelector('#last_month_time_boiler1');
        let yesterday_time_boiler1_el = document.querySelector('#yesterday_time_boiler1');
        let today_time_boiler1_el = document.querySelector('#today_time_boiler1');
        let values_time_boiler1_el = document.querySelector('#value_time_boiler1');
        let stock_time_boiler1_el = document.querySelector('#value_month_time_boiler1');
        month_use_boiler1_el.innerHTML=`${data.boiler1[0].last_month_use}`;
        yesterday_use_boiler1_el.innerHTML=`${data.boiler1[0].yesterday_use}`;
        today_use_boiler1_el.innerHTML=`${data.boiler1[0].today_use}`;
        values_use_boiler1_el.innerHTML=`${data.boiler1[0].value_use}`;
        stock_use_boiler1_el.innerHTML=`${data.boiler1[0].value_month_use}`;
        month_time_boiler1_el.innerHTML=`${data.boiler1[0].last_month_time}`;
        yesterday_time_boiler1_el.innerHTML=`${data.boiler1[0].yesterday_time}`;
        today_time_boiler1_el.innerHTML=`${data.boiler1[0].today_time}`;
        values_time_boiler1_el.innerHTML=`${data.boiler1[0].value_time}`;
        stock_time_boiler1_el.innerHTML=`${data.boiler1[0].value_month_time}`;

        // 보일러2
        let month_use_boiler2_el = document.querySelector('#last_month_use_boiler2');
        let yesterday_use_boiler2_el = document.querySelector('#yesterday_use_boiler2');
        let today_use_boiler2_el = document.querySelector('#today_use_boiler2');
        let values_use_boiler2_el = document.querySelector('#value_use_boiler2');
        let stock_use_boiler2_el = document.querySelector('#value_month_use_boiler2');
        let month_time_boiler2_el = document.querySelector('#last_month_time_boiler2');
        let yesterday_time_boiler2_el = document.querySelector('#yesterday_time_boiler2');
        let today_time_boiler2_el = document.querySelector('#today_time_boiler2');
        let values_time_boiler2_el = document.querySelector('#value_time_boiler2');
        let stock_time_boiler2_el = document.querySelector('#value_month_time_boiler2');
        month_use_boiler2_el.innerHTML=`${data.boiler2[0][0].last_month_use}`;
        yesterday_use_boiler2_el.innerHTML=`${data.boiler2[0][0].yesterday_use}`;
        today_use_boiler2_el.innerHTML=`${data.boiler2[0][0].today_use}`;
        values_use_boiler2_el.innerHTML=`${data.boiler2[0][0].value_use}`;
        stock_use_boiler2_el.innerHTML=`${data.boiler2[0][0].value_month_use}`;
        month_time_boiler2_el.innerHTML=`${data.boiler2[0][0].last_month_time}`;
        yesterday_time_boiler2_el.innerHTML=`${data.boiler2[0][0].yesterday_time}`;
        today_time_boiler2_el.innerHTML=`${data.boiler2[0][0].today_time}`;
        values_time_boiler2_el.innerHTML=`${data.boiler2[0][0].value_time}`;
        stock_time_boiler2_el.innerHTML=`${data.boiler2[0][0].value_month_time}`;
       
        //냉온수기
        let month_use_aircon_el = document.querySelector('#last_month_use_aircon');
        let yesterday_use_aircon_el = document.querySelector('#yesterday_use_aircon');
        let today_use_aircon_el = document.querySelector('#today_use_aircon');
        let values_use_aircon_el = document.querySelector('#value_use_aircon');
        let stock_use_aircon_el = document.querySelector('#value_month_use_aircon');
        let month_time_aircon_el = document.querySelector('#last_month_time_aircon');
        let yesterday_time_aircon_el = document.querySelector('#yesterday_time_aircon');
        let today_time_aircon_el = document.querySelector('#today_time_aircon');
        let values_time_aircon_el = document.querySelector('#value_time_aircon');
        let stock_time_aircon_el = document.querySelector('#value_month_time_aircon');
        month_use_aircon_el.innerHTML=`${data.aircon[0][0].last_month_use}`;
        yesterday_use_aircon_el.innerHTML=`${data.aircon[0][0].yesterday_use}`;
        today_use_aircon_el.innerHTML=`${data.aircon[0][0].today_use}`;
        values_use_aircon_el.innerHTML=`${data.aircon[0][0].value_use}`;
        stock_use_aircon_el.innerHTML=`${data.aircon[0][0].value_month_use}`;
        month_time_aircon_el.innerHTML=`${data.aircon[0][0].last_month_time}`;
        yesterday_time_aircon_el.innerHTML=`${data.aircon[0][0].yesterday_time}`;
        today_time_aircon_el.innerHTML=`${data.aircon[0][0].today_time}`;
        values_time_aircon_el.innerHTML=`${data.aircon[0][0].value_time}`;
        stock_time_aircon_el.innerHTML=`${data.aircon[0][0].value_month_time}`;

        //수도
        let month_use_water_el = document.querySelector('#last_month_use_water');
        let yesterday_use_water_el = document.querySelector('#yesterday_use_water');
        let today_use_water_el = document.querySelector('#today_use_water');
        let values_use_water_el = document.querySelector('#value_use_water');
        let stock_use_water_el = document.querySelector('#value_month_use_water');
        month_use_water_el.innerHTML=`${data.water[0][0].last_month_use}`;
        yesterday_use_water_el.innerHTML=`${data.water[0][0].yesterday_use}`;
        today_use_water_el.innerHTML=`${data.water[0][0].today_use}`;
        values_use_water_el.innerHTML=`${data.water[0][0].value_use}`;
        stock_use_water_el.innerHTML=`${data.water[0][0].value_month_use}`;

         //공기열히트펌프
         let month_use_pump_el = document.querySelector('#last_month_use_pump');
         let yesterday_use_pump_el = document.querySelector('#yesterday_use_pump');
         let today_use_pump_el = document.querySelector('#today_use_pump');
         let values_use_pump_el = document.querySelector('#value_use_pump');
         let stock_use_pump_el = document.querySelector('#value_month_use_pump');
         let temp_input_pump_el = document.querySelector('#temp_input_pump');
         let temp_output_pump_el = document.querySelector('#temp_output_pump');
         let temp1_input_pump_el = document.querySelector('#temp1_input_pump');
         let temp1_output_pump_el = document.querySelector('#temp1_output_pump');
         let temp2_input_pump_el = document.querySelector('#temp2_input_pump');
         let temp2_output_pump_el = document.querySelector('#temp2_output_pump');
         let press1_input_pump_el = document.querySelector('#press1_input_pump');
         let press1_output_pump_el = document.querySelector('#press1_output_pump');
         let press2_input_pump_el = document.querySelector('#press2_input_pump');
         let press2_output_pump_el = document.querySelector('#press2_output_pump');
         let amp_pump_el = document.querySelector('#amp_pump')
         month_use_pump_el.innerHTML=`${data.pump[0][0].last_month_use}`;
         yesterday_use_pump_el.innerHTML=`${data.pump[0][0].yesterday_use}`;
         today_use_pump_el.innerHTML=`${data.pump[0][0].today_use}`;
         values_use_pump_el.innerHTML=`${data.pump[0][0].value_use}`;
         stock_use_pump_el.innerHTML=`${data.pump[0][0].value_month_use}`;
         temp_input_pump_el.innerHTML = `${data.pump[0][0].temp_input}`;
         temp_output_pump_el.innerHTML = `${data.pump[0][0].temp_output}`;
         temp1_input_pump_el.innerHTML = `${data.pump[0][0].temp1_input}`;
         temp1_output_pump_el.innerHTML = `${data.pump[0][0].temp1_output}`;
         temp2_input_pump_el.innerHTML = `${data.pump[0][0].temp2_input}`;
         temp2_output_pump_el.innerHTML = `${data.pump[0][0].temp2_output}`;
         press1_input_pump_el.innerHTML = `${data.pump[0][0].press1_input}`;
         press1_output_pump_el.innerHTML = `${data.pump[0][0].press1_output}`;
         press2_input_pump_el.innerHTML = `${data.pump[0][0].press2_input}`;
         press2_output_pump_el.innerHTML = `${data.pump[0][0].press2_output}`;
         amp_pump_el.innerHTML = `${data.pump[0][0].amp}`;

         //수영장
         let volt_pool_el = document.querySelector('#voltage_pool');
         let amp_pool_el = document.querySelector('#ampere_pool');
         let temp_pool_el = document.querySelector('#temper_pool');
         let etc_pool_el = document.querySelector('#etc_pool');
         volt_pool_el.innerHTML = data.pool[0][0].voltage;
         amp_pool_el.innerHTML = data.pool[0][0].ampere;
         temp_pool_el.innerHTML = data.pool[0][0].temperature;
         etc_pool_el.innerHTML = data.pool[0][0].etc

        //수질점검결과
        let cl_water05_el = document.querySelector('#cl_05');
        let ph_wqter05_el = document.querySelector('#ph_05');
        let blur_water05_el = document.querySelector('#blur_05');
        let temp_adult05_el = document.querySelector('#temp_adult_05');
        let temp_baby05_el = document.querySelector('#temp_baby_05');
        let temp_out_05_el = document.querySelector('#temp_out_05');
        let etc_water_05_el = document.querySelector('#etc_water_05');
        cl_water05_el.innerHTML = data.water_check5[0][0].cl_value; 
        ph_wqter05_el.innerHTML = data.water_check5[0][0].ph_value;
        blur_water05_el.innerHTML = data.water_check5[0][0].blur_value;
        temp_adult05_el.innerHTML = data.water_check5[0][0].temp_man_pool;
        temp_baby05_el.innerHTML = data.water_check5[0][0].temp_baby_pool;
        temp_out_05_el.innerHTML = data.water_check5[0][0].temp_pool; 
        etc_water_05_el.innerHTML = data.water_check5[0][0].etc;

        let cl_water09_el = document.querySelector('#cl_09');
        let ph_wqter09_el = document.querySelector('#ph_09');
        let blur_water09_el = document.querySelector('#blur_09');
        let temp_adult09_el = document.querySelector('#temp_adult_09');
        let temp_baby09_el = document.querySelector('#temp_baby_09');
        let temp_out_09_el = document.querySelector('#temp_out_09');
        let etc_water_09_el = document.querySelector('#etc_water_09');
        cl_water09_el.innerHTML = data.water_check9[0][0].cl_value; 
        ph_wqter09_el.innerHTML = data.water_check9[0][0].ph_value;
        blur_water09_el.innerHTML = data.water_check9[0][0].blur_value;
        temp_adult09_el.innerHTML = data.water_check9[0][0].temp_man_pool;
        temp_baby09_el.innerHTML = data.water_check9[0][0].temp_baby_pool;
        temp_out_09_el.innerHTML = data.water_check9[0][0].temp_pool; 
        etc_water_09_el.innerHTML = data.water_check9[0][0].etc;

        let cl_water13_el = document.querySelector('#cl_13');
        let ph_wqter13_el = document.querySelector('#ph_13');
        let blur_water13_el = document.querySelector('#blur_13');
        let temp_adult13_el = document.querySelector('#temp_adult_13');
        let temp_baby13_el = document.querySelector('#temp_baby_13');
        let temp_out_13_el = document.querySelector('#temp_out_13');
        let etc_water_13_el = document.querySelector('#etc_water_13');
        cl_water13_el.innerHTML = data.water_check13[0][0].cl_value; 
        ph_wqter13_el.innerHTML = data.water_check13[0][0].ph_value;
        blur_water13_el.innerHTML = data.water_check13[0][0].blur_value;
        temp_adult13_el.innerHTML = data.water_check13[0][0].temp_man_pool;
        temp_baby13_el.innerHTML = data.water_check13[0][0].temp_baby_pool;
        temp_out_13_el.innerHTML = data.water_check13[0][0].temp_pool; 
        etc_water_13_el.innerHTML = data.water_check13[0][0].etc;

        let cl_water17_el = document.querySelector('#cl_17');
        let ph_wqter17_el = document.querySelector('#ph_17');
        let blur_water17_el = document.querySelector('#blur_17');
        let temp_adult17_el = document.querySelector('#temp_adult_17');
        let temp_baby17_el = document.querySelector('#temp_baby_17');
        let temp_out_17_el = document.querySelector('#temp_out_17');
        let etc_water_17_el = document.querySelector('#etc_water_17');
        cl_water17_el.innerHTML = data.water_check17[0][0].cl_value; 
        ph_wqter17_el.innerHTML = data.water_check17[0][0].ph_value;
        blur_water17_el.innerHTML = data.water_check17[0][0].blur_value;
        temp_adult17_el.innerHTML = data.water_check17[0][0].temp_man_pool;
        temp_baby17_el.innerHTML = data.water_check17[0][0].temp_baby_pool;
        temp_out_17_el.innerHTML = data.water_check17[0][0].temp_pool; 
        etc_water_17_el.innerHTML = data.water_check17[0][0].etc;

        let cl_water21_el = document.querySelector('#cl_21');
        let ph_wqter21_el = document.querySelector('#ph_21');
        let blur_water21_el = document.querySelector('#blur_21');
        let temp_adult21_el = document.querySelector('#temp_adult_21');
        let temp_baby21_el = document.querySelector('#temp_baby_21');
        let temp_out_21_el = document.querySelector('#temp_out_21');
        let etc_water_21_el = document.querySelector('#etc_water_21');
        cl_water21_el.innerHTML = data.water_check21[0][0].cl_value; 
        ph_wqter21_el.innerHTML = data.water_check21[0][0].ph_value;
        blur_water21_el.innerHTML = data.water_check21[0][0].blur_value;
        temp_adult21_el.innerHTML = data.water_check21[0][0].temp_man_pool;
        temp_baby21_el.innerHTML = data.water_check21[0][0].temp_baby_pool;
        temp_out_21_el.innerHTML = data.water_check21[0][0].temp_pool; 
        etc_water_21_el.innerHTML = data.water_check21[0][0].etc;

        //재고현황
        let input_salt_el = document.querySelector('#input_salt');
        let output_salt_el = document.querySelector('#output_salt');
        let inven_salt_el = document.querySelector('#inven_salt');
        let stock_salt_el = document.querySelector('#stock_salt');
        let etc_salt_el = document.querySelector('#etc_salt');
        input_salt_el.innerHTML = data.inven_salt[0][0].input; 
        output_salt_el.innerHTML = data.inven_salt[0][0].output;
        inven_salt_el.innerHTML = data.inven_salt[0][0].lefts;
        stock_salt_el.innerHTML = data.inven_salt[0][0].use_value;
        etc_salt_el.innerHTML = data.inven_salt[0][0].etc;

        let input_ueng_el = document.querySelector('#input_ueng');
        let output_ueng_el = document.querySelector('#output_ueng');
        let inven_ueng_el = document.querySelector('#inven_ueng');
        let stock_ueng_el = document.querySelector('#stock_ueng');
        let etc_ueng_el = document.querySelector('#etc_ueng');
        input_ueng_el.innerHTML = data.inven_ueng[0][0].input; 
        output_ueng_el.innerHTML = data.inven_ueng[0][0].output;
        inven_ueng_el.innerHTML = data.inven_ueng[0][0].lefts;
        stock_ueng_el.innerHTML = data.inven_ueng[0][0].use_value;
        etc_ueng_el.innerHTML = data.inven_ueng[0][0].etc;

        let input_ph_el = document.querySelector('#input_ph');
        let output_ph_el = document.querySelector('#output_ph');
        let inven_ph_el = document.querySelector('#inven_ph');
        let stock_ph_el = document.querySelector('#stock_ph');
        let etc_ph_el = document.querySelector('#etc_ph');
        input_ph_el.innerHTML = data.inven_ph[0][0].input; 
        output_ph_el.innerHTML = data.inven_ph[0][0].output;
        inven_ph_el.innerHTML = data.inven_ph[0][0].lefts;
        stock_ph_el.innerHTML = data.inven_ph[0][0].use_value;
        etc_ph_el.innerHTML = data.inven_ph[0][0].etc;

        let input_avata_el = document.querySelector('#input_avata');
        let output_avata_el = document.querySelector('#output_avata');
        let inven_avata_el = document.querySelector('#inven_avata');
        let stock_avata_el = document.querySelector('#stock_avata');
        let etc_avata_el = document.querySelector('#etc_avata');
        input_avata_el.innerHTML = data.inven_avta[0][0].input; 
        output_avata_el.innerHTML = data.inven_avta[0][0].output;
        inven_avata_el.innerHTML = data.inven_avta[0][0].lefts;
        stock_avata_el.innerHTML = data.inven_avta[0][0].use_value;
        etc_avata_el.innerHTML = data.inven_avta[0][0].etc;

        let trans_09_el = document.querySelector('#trans_09');
        let trans_17_el = document.querySelector('#trans_17');
        let trans_21_el = document.querySelector('#trans_21');
        trans_09_el.innerHTML = data.transfer[0][0].temp09; 
        trans_17_el.innerHTML = data.transfer[0][0].temp17;
        trans_21_el.innerHTML = data.transfer[0][0].temp21;
        
        //센터x200
        let month_use_middle200_el = document.querySelector('#last_month_use_middle200');
        let yesterday_use_middle200_el = document.querySelector('#yesterday_use_middle200');
        let today_use_middle200_el = document.querySelector('#today_use_middle200');
        let values_use_middle200_el = document.querySelector('#value_use_middle200');
        let stock_use_middle200_el = document.querySelector('#value_month_use_middle200');
        month_use_middle200_el.innerHTML=`${data.center200_middle[0][0].last_month_use}`;
        yesterday_use_middle200_el.innerHTML=`${data.center200_middle[0][0].yesterday_use}`;
        today_use_middle200_el.innerHTML=`${data.center200_middle[0][0].today_use}`;
        values_use_middle200_el.innerHTML=`${data.center200_middle[0][0].value_use}`;
        stock_use_middle200_el.innerHTML=`${data.center200_middle[0][0].value_month_use}`;

        let month_use_max200_el = document.querySelector('#last_month_use_max200');
        let yesterday_use_max200_el = document.querySelector('#yesterday_use_max200');
        let today_use_max200_el = document.querySelector('#today_use_max200');
        let values_use_max200_el = document.querySelector('#value_use_max200');
        let stock_use_max200_el = document.querySelector('#value_month_use_max200');
        month_use_max200_el.innerHTML=`${data.center200_max[0][0].last_month_use}`;
        yesterday_use_max200_el.innerHTML=`${data.center200_max[0][0].yesterday_use}`;
        today_use_max200_el.innerHTML=`${data.center200_max[0][0].today_use}`;
        values_use_max200_el.innerHTML=`${data.center200_max[0][0].value_use}`;
        stock_use_max200_el.innerHTML=`${data.center200_max[0][0].value_month_use}`;

        let month_use_low200_el = document.querySelector('#last_month_use_low200');
        let yesterday_use_low200_el = document.querySelector('#yesterday_use_low200');
        let today_use_low200_el = document.querySelector('#today_use_low200');
        let values_use_low200_el = document.querySelector('#value_use_low200');
        let stock_use_low200_el = document.querySelector('#value_month_use_low200');
        month_use_low200_el.innerHTML=`${data.center200_low[0][0].last_month_use}`;
        yesterday_use_low200_el.innerHTML=`${data.center200_low[0][0].yesterday_use}`;
        today_use_low200_el.innerHTML=`${data.center200_low[0][0].today_use}`;
        values_use_low200_el.innerHTML=`${data.center200_low[0][0].value_use}`;
        stock_use_low200_el.innerHTML=`${data.center200_low[0][0].value_month_use}`;

        let value_sum200 = document.querySelector('#value_use_sum200');
        let value_month_sum200 = document.querySelector('#value_month_use_sum200');
        value_sum200.innerHTML = data.center200_low[0][0].value_use + data.center200_max[0][0].value_use+ data.center200_middle[0][0].value_use;
        value_month_sum200.innerHTML = data.center200_low[0][0].value_month_use + data.center200_max[0][0].value_month_use+ data.center200_middle[0][0].value_month_use;

        //센터
        let month_use_middle_el = document.querySelector('#last_month_use_middle');
        let yesterday_use_middle_el = document.querySelector('#yesterday_use_middle');
        let today_use_middle_el = document.querySelector('#today_use_middle');
        let values_use_middle_el = document.querySelector('#value_use_middle');
        let stock_use_middle_el = document.querySelector('#value_month_use_middle');
        month_use_middle_el.innerHTML=`${data.center_middle[0][0].last_month_use}`;
        yesterday_use_middle_el.innerHTML=`${data.center_middle[0][0].yesterday_use}`;
        today_use_middle_el.innerHTML=`${data.center_middle[0][0].today_use}`;
        values_use_middle_el.innerHTML=`${data.center_middle[0][0].value_use}`;
        stock_use_middle_el.innerHTML=`${data.center_middle[0][0].value_month_use}`;

        let month_use_max_el = document.querySelector('#last_month_use_max');
        let yesterday_use_max_el = document.querySelector('#yesterday_use_max');
        let today_use_max_el = document.querySelector('#today_use_max');
        let values_use_max_el = document.querySelector('#value_use_max');
        let stock_use_max_el = document.querySelector('#value_month_use_max');
        month_use_max_el.innerHTML=`${data.center_max[0][0].last_month_use}`;
        yesterday_use_max_el.innerHTML=`${data.center_max[0][0].yesterday_use}`;
        today_use_max_el.innerHTML=`${data.center_max[0][0].today_use}`;
        values_use_max_el.innerHTML=`${data.center_max[0][0].value_use}`;
        stock_use_max_el.innerHTML=`${data.center_max[0][0].value_month_use}`;

        let month_use_low_el = document.querySelector('#last_month_use_low');
        let yesterday_use_low_el = document.querySelector('#yesterday_use_low');
        let today_use_low_el = document.querySelector('#today_use_low');
        let values_use_low_el = document.querySelector('#value_use_low');
        let stock_use_low_el = document.querySelector('#value_month_use_low');
        month_use_low_el.innerHTML=`${data.center_low[0][0].last_month_use}`;
        yesterday_use_low_el.innerHTML=`${data.center_low[0][0].yesterday_use}`;
        today_use_low_el.innerHTML=`${data.center_low[0][0].today_use}`;
        values_use_low_el.innerHTML=`${data.center_low[0][0].value_use}`;
        stock_use_low_el.innerHTML=`${data.center_low[0][0].value_month_use}`;

        let value_sum = document.querySelector('#value_use_sum');
        let value_month_sum = document.querySelector('#value_month_use_sum');
        value_sum.innerHTML = data.center_low[0][0].value_use + data.center_max[0][0].value_use+ data.center_middle[0][0].value_use;
        value_month_sum.innerHTML = data.center_low[0][0].value_month_use + data.center_max[0][0].value_month_use+ data.center_middle[0][0].value_month_use;




    }
).catch(error => console.error('에러발생',error)));
