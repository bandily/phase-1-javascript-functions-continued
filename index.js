function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symbol = "*", msg = 'You are '){
    return function(noun = 'a hard worker'){
        return `${msg}${symbol}${noun}${symbol}!`;
    };
}