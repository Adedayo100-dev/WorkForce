import monthsData from '../models/months.js'
import weekDaysData from '../models/weekDays.js'

const constructDays = (n) => {
    const arrayOfObjects = [];
    
    for (let i = 1; i <= n.numOfDays; i++) {
        const newObj = { 
            dayNum: i,
            dayInfo: weekDaysData[new Date(`${n.monthName} ${i}, ${n.year}`).getDay()],
            dayMonth: {
                num: n.id,
                short_name: n.monthName,
                fullName: n.fullName
            }, 
            dayYear: n.year

        };
      arrayOfObjects.push(newObj);
    }
    
    return arrayOfObjects;
}
  
//   console.log(result);

export const createMonthDays = (a) => {

    const createPrevMonthDays = () => {
        var m = a.month - 1;
        // Check if prevMonth = December
        if (m === -1){
            var y = a.year - 1 ;
            var m = 12 + m;
            console.log(m);
        } else {
            var y = a.year;
            var m = m;
        }

        var prevMonthObj = monthsData.find((month) => month.id === m);
        prevMonthObj.year = y;

        // Check if february
        if (m === 1) {
        // Check if leap year
            if (y % 4 === 0) {
                prevMonthObj.numOfDays = 29 // 29 days in leap year's february
            } else {
                prevMonthObj.numOfDays = 28 // 28 days in normal year's february
            }
        }
        
        console.log('previous:', prevMonthObj);     

        var days = constructDays(prevMonthObj);

        console.log(days);
  
    }

    createPrevMonthDays();

    // const createCurrMonthDays

    // var m = a.month, y = a.year;

    // var prevMonthDays = monthsData.find((month) => month.id === (+m) - 1); 
    /*  add code for: if prev month was dec ,
        if prev month was february
    */
    // var currMonthDays = monthsData.find((month) => month.id === +m);

    // var nextMonthDays = monthsData.find((month) => month.id === (+m) + 1);

    // console.log('months:', prevMonthDays, currMonthDays, nextMonthDays);

    // var n = currMonthDays

    // n = no. of days in the month {1-28}/{1-30}/{1-31}
    // y = year {2023, 2024, 2025...}
    const arrayOfObjects = [];
    // FEBRUARY exception bcuz feb has either 28 or 29 days.
    
    return arrayOfObjects;
}