import getMonthData from './getMonth.js'
import weekDaysData from '../models/weekDays.js'

const constructDays = (n, s, e) => {
    if (s == undefined){
        s = 1;
    } else {
        s = s;
    }

    if (e == undefined){

        // FEBRUARY exception bcuz feb has either 28 or 29 days.
        if (n.id === 1) {
            // Check if leap year
            if (n.year % 4 === 0) {
                n.numOfDays = 29 // 29 days in leap year's february
            } else {
                n.numOfDays = 28 // 28 days in normal year's february
            }
        }

        e = n.numOfDays;

    } else {
        e = e;
    }

    const arrayOfObjects = [];
    
    for (let i = s; i <= e; i++) {
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

    const createCurrMonthDays = () => {
        var m = a.month;
        var y = a.year;

        var currMonthObj = getMonthData(m, y);
        // console.log('currMonth:', currMonthObj)

        // Construct Days
        var currMonthDays = constructDays(currMonthObj, undefined, undefined);

        // console.log('currentMonthDays:', currMonthDays);
        return currMonthDays;
    }

    const createPrevMonthDays = () => {

        var m = a.month - 1;
        // Check if prevMonth is December of last year
        if (m === -1){
            var y = a.year - 1 ;
            var m = 12 + m;
            console.log(m);
        } else {
            var y = a.year;
            var m = m;
        }

        var prevMonthObj = getMonthData(m, y);

        var prevMonthLastDay = prevMonthObj.numOfDays;
        var currMonthFirstDay = createCurrMonthDays()[0].dayInfo.dayIndex;
        // console.log('prevMonthLastDay:', prevMonthLastDay);

        var start = prevMonthLastDay - currMonthFirstDay + 1;
        
        // console.log('start:', start);   
        
        // console.log('previousMonth:', prevMonthObj);     

        var prevMonthDays = constructDays(prevMonthObj, start);

        // console.log('prevMonthDays:', prevMonthDays);
        return prevMonthDays;
  
    }

    const createNextMonthDays = () => {

        var m = a.month + 1;

        // Check if nextMonth is January of next year.
        if (m === 12){
            var y = a.year + 1 ;
            var m = 12 - m;
            console.log(m);
        } else {
            var y = a.year;
            var m = m;
        }

        var nextMonthObj = getMonthData(m, y);
        // console.log('nextMonthObj:', nextMonthObj);

        var currMonthLastDay = createCurrMonthDays().pop().dayInfo.dayIndex;
        // console.log('currMonthLastDay:', currMonthLastDay);

        var end = 6 - currMonthLastDay;
        // console.log('end:', currMonthLastDay, end);

        // var start = prevMonthLastDay - currMonthFirstDay + 1;

        var nextMonthDays = constructDays(nextMonthObj, undefined, end);
        // console.log('nextMonthDays:', nextMonthdays);
        return nextMonthDays;

    }

    var concatMonthsDays = [...createPrevMonthDays(), ...createCurrMonthDays(), ...createNextMonthDays()];
    // console.log(concatMonthsDays);
    
    return  concatMonthsDays;
}