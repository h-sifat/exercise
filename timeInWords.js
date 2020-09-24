// Complete the timeInWords function below.
function timeInWords(h, m) {

    let units = ["", "one", "two", "three", "four", "five", "six", "seven", 
                 "eight", "nine", "ten", "eleven", "twelve", "thirteen", 
                 "fourteen", "quarter", "sixteen", "seventeen", "eighteen", 
                 "nineteen"];

    let tens = ["", "twenty", "thirty", "forty", "fifty"];

    let hour = getWord(h, units, tens);
    let min = getWord(m, units, tens);
    let time;
    
    if (m === 0)
        time = `${hour} o' clock`;
    else if (m === 1)
        time = `${min} minute past ${hour}`;
    else if (m === 15)
        time = `${min} past ${hour}`;
    else if (m < 30)
        time = `${min} minutes past ${hour}`;
    else if (m === 30)
        time = `half past ${hour}`;
    
    else {
        hour = getWord(h + 1, units, tens);
        min = getWord(60 - m, units, tens);

        if (m === 45)
            time = `quarter to ${hour}`;
        else
            time = `${min} minutes to ${hour}`;
    }
    return time;
}

function getWord(n, units, tens) {
    return (n < 20) ? units[n] : (tens[Math.floor(n / 10) - 1] + ' ' + units[n % 10]);
}