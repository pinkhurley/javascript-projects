document.querySelector('.dark-mode-switch').onclick = () => {
    document.querySelector('body').classList.toggle('dark');
    document.querySelector('body').classList.toggle('light');
};

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400
        !==0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29: 28
}

let calendar = document.querySelector('calendar');

const month_names = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];

let month_picker = document.querySelector('#month-picker');

generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = ''
    let calendar_header_year = document.querySelector('#year');

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30 ,31, 30, 31];

    let currDate = new Date();
    month_picker.innerHTML = month_names[month];
    calendar_header_year.innerHTML = year;
    
    // 获取本月的第一天
    var first_day = new Date(year, month, 1);
    console.log(first_day.getDate())

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() -1; i++) {
        let day = document.createElement('div');
        
        // 获取星期几 周日0 到周六6
        // 如果当前日期 等于或者大于 本月第一天的星期，则写入天数
        if (i >= first_day.getDay()) {
            day.innerHTML = i - first_day.getDay() + 1;
            if (i - first_day.getDay() +1 === currDate.getDate() && year ===
            currDate.getFullYear() && month === currDate.getMonth()){
                day.classList.add('curr-date');
            }
        }
        if (i === 1) {
            day.classList.add('active');
        }

        calendar_days.appendChild(day);
        
    }

}




let currDate = new Date()

let curr_month = {value: currDate.getMonth()};
let curr_year = {value: currDate.getFullYear()};


generateCalendar(curr_month.value, curr_year.value);

let month_list = document.querySelector('.month-list');

month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
    month.onclick = () => {
        month_list.classList.remove('show');
        curr_month.value = index;
        generateCalendar(curr_month.value, curr_year.value)
    };
    month_list.appendChild(month);
})

month_picker.onclick = () => {
    month_list.classList.add('show');
}

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value;
    generateCalendar(curr_month.value, curr_year.value);
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value;
    generateCalendar(curr_month.value, curr_year.value);
}

