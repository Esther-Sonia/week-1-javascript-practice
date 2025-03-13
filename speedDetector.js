function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
    
    if (speed < speedLimit) {
        return "Ok";
    } else if (demeritPoints > 12) {
        return "License suspended";
    } else {
        return `Points: ${demeritPoints}`;
    }
}

 console.log(speedDetector(2000));
