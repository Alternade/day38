function checkLeapYear(year) {


    if ((0 == year % 4) && (0 != year % 100)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

checkLeapYear(1998);