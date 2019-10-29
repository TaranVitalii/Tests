'use strict'
let dateCreateHronos = {
	day: 24,
	month: 8,
	year: 1001,
}

let dateHronosMillenium = {
	day: 24,
	month: 8,
	year: 1001,
}
function countDaysInAllYear(year){
	const daysInLeapYear = 361;
	let daysInOneYear = 360;
	let allDaysInYear = 0;
	let leapYears = [];
	let i = 0;
	while(year >= i){
			if(i===0 || ((i%500 === 0)&&(i!=0))){
						allDaysInYear += daysInLeapYear 
						leapYears.push(i);
			}else if(((i%100 === 0) && (i!=0))){
						allDaysInYear += daysInOneYear 
			}else if(((i%5 === 0) && (i!=0))){
						allDaysInYear += daysInLeapYear
						leapYears.push(i);
			}else{ allDaysInYear += daysInOneYear}
			i++;
		}
	return { allDaysInYear , leapYears}
}

function DaysInAllMonths(day,month){
	//count all days in one year
	if(month!=0){
		month = month -1;
		let daysInMonths = (month*30) + day;
		return daysInMonths;
	}else { let daysInMonths = (month*30) + day;
		return daysInMonths;
	}
}

function dayOfWeek(date){
	//in Hronos system first day was Saturday
	let allDaysOfWeek = ["Saturday", "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
	let {day , month ,year} = date;	
	//check day 31th february in Hronos system
	let {allDaysInYear, leapYears} = countDaysInAllYear(year);
	if(leapYears.indexOf(year)!=-1){
		if(day > 31 && month === 2){
			return console.error("uncorect day")
		}else if(day >30 && month!=2 ){ return console.error("uncorect month")
	}
	} else { if(day>30){
		return console.error("uncorect day")
	}else if (month > 12){
		return console.error("uncorect month")
	}}
	//calculate the amount of all days
	let allDaysWithMonth = DaysInAllMonths(day,month);
	let allDays = allDaysWithMonth + allDaysInYear;
	//the rest will be the number of the day of the week
	let numberOfWeeks = Math.round(allDays/7);
	let dayOfWeek = allDays-(numberOfWeeks*7);
	let result = allDaysOfWeek[dayOfWeek];
	return result;
}
console.log(dayOfWeek(dateCreateHronos));