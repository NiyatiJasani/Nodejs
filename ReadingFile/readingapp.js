var fs = require("fs");
console.log("start");
fs.readFile("employee.csv", function (error, data) {
    if (error) {
        throw error;
    }
    data.toString().split("\n").forEach(function (line, index, arr) {
        if (index === arr.length - 1 && line === "") {
            return;
        }
        console.log(index + " " + line);
    });
    console.log("end");
});

var max = require('compute-max');
var mathSum = require('math-sum');
fs.readFile("employee.csv", function (error, data) {
    if (error) {
        throw error;
    }
    var data = [100, 200, 300, 900];
    var val = max(data);
    console.log("Sum of all salaries is: " +
        mathSum(data));
    console.log("Highest Salary is " + val);

});


//var dt = require('node-datetime');
//var sorter = {
//d1 = new Date(2016, 1, 20),
//    d3 = new Date 2015 2, 2
//};
//var res = datetime.dtdelta.reorder.apply(null, a);
//console.log(res);