const repeatString = function(str, num) {
    let temp = "";

    if(num < 0) {
        return "ERROR";
    }
    
    for(let i = 0; i < num; i++) {
        temp += str;
    }

    return temp;
};

// Do not edit below this line
module.exports = repeatString;
