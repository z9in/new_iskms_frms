let {Sequelize, DataTypes} = require('sequelize');
let sequelize1 = new Sequelize({
    dialect: 'sqlite',
    storage: 'boiler.sqlite'
});
// 보일러1호
const Boiler = sequelize1.define('Boiler', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    last_month_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 보일러2호
const Boiler2 = sequelize1.define('Boiler2', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    last_month_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 냉온수기
const Aircon = sequelize1.define('Aircon', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    last_month_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_time: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 수도
const Water = sequelize1.define('Water', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 수영장
const Pool = sequelize1.define('Pool', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    voltage: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    ampere: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temperature: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//수질검사 5시
const Water_check5 = sequelize1.define('water_check5', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cl_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    ph_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    blur_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_man_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_baby_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//수질검사 9시
const Water_check9 = sequelize1.define('water_check9', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cl_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    ph_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    blur_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_man_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_baby_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//수질검사 13시
const Water_check13 = sequelize1.define('water_check13', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cl_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    ph_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    blur_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_man_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_baby_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//수질검사 17시
const Water_check17 = sequelize1.define('water_check17', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cl_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    ph_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    blur_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_man_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_baby_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//수질검사 21시
const Water_check21 = sequelize1.define('water_check21', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cl_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    ph_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    blur_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_man_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_baby_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_pool: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//재고-소금
const Inven_salt = sequelize1.define('inven_salt', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    input: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    output: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    lefts: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    use_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//재고-응집제
const Inven_ueng = sequelize1.define('inven_ueng', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    input: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    output: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    lefts: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    use_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//재고-ph조절제
const Inven_ph = sequelize1.define('inven_ph', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    input: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    output: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    lefts: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    use_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//재고-아비타
const Inven_avita = sequelize1.define('inven_avita', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    input: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    output: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    lefts: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    use_value: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    etc: {
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: 0,
    }
})
//전기-변압기
const Transfer = sequelize1.define('transfer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    temp09: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp17: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp21: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 센터(200배_중간)
const Center200_middle = sequelize1.define('center200_middle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 센터(200배_최대)
const Center200_max = sequelize1.define('center200_msx', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 센터(200배_경부하)
const Center200_low = sequelize1.define('center200_low', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 센터정화조_중간
const Center_middle = sequelize1.define('center_middle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 센터정화조_최대
const Center_max = sequelize1.define('center_msx', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 센터정화조_경부하
const Center_low = sequelize1.define('center_low', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }
})
// 공기열히트펌프
const Pump = sequelize1.define('pump', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    yesterday_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    today_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    value_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    last_month_use: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_input: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp_output: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp1_input: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp1_output: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp2_input: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    temp2_output: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    press1_input: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    press1_output: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    press2_input: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    press2_output: {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    amp : {
        type:DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0, 
    }
})

module.exports = {sequelize1, Boiler, Boiler2, Aircon, Water, Pool, Water_check5, Water_check9, Water_check13, Water_check17, Water_check21, Inven_salt, Inven_ueng, Inven_ph, Inven_avita, Transfer, Center200_middle, Center200_max, Center200_low, Center_middle, Center_max, Center_low, Pump };