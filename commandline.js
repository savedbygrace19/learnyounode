var sum = function() {
    var theSum = 0;
    for (var i=2; i<process.argv.length; i++) {
        theSum += Number(process.argv[i]);
    }

    return theSum;
};

console.log(sum());
