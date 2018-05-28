function creatingTime(givenTime) {

    var minutes = (givenTime / 60).toFixed(0);
    var seconds = (givenTime % 60).toFixed(0);
    var hours = (minutes / 60).toFixed(0);
    var restOfHours = (minutes % 60).toFixed(0);

    if (givenTime !== null) {
        if (givenTime < 60) {
            return (givenTime + ' seconds ');
        } else if (givenTime >= 60 && givenTime < 3600) {
            return (minutes + ' minutes ' + seconds + ' seconds ');
        } else if (givenTime >= 3600) {
            return (hours + ' hours ' + restOfHours + ' minutes ' + seconds + ' seconds ');
        }
    }
}


exports.print1 = creatingTime;