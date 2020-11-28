var busyStudent = function(startTime, endTime, queryTime) {
    let counter = 0;
    for(let i = 0; i < startTime.length; i++){
        if(startTime[i] <= queryTime && endTime[i] >= queryTime){
            counter++;
        }
    }
    
    return counter;
};
