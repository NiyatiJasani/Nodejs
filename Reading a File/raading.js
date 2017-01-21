var movies = read('movielist.txt').split("\n" + ',');

function createArr(file) {
    var arr = read(file).split("\n" + ',');
    for (var i = 0; i < arr.length;) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

// take the movies array and store its contents in a list.
var moviewatcherList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}



var Math2 = {

    calculate: function (values, operation) {
        if (values.length == 0) {
            return NaN;
        } else if (values.length == 1) {
            var val = values.pop();
            if (typeof val == "number") {
                return val;
            } else {
                return NaN;
            }
        } else {
            var val = values.pop();
            return operation(val, this.calculate(values, operation))
        }
    }
}

//        calculate: function (arr, operation) {
//            if (arr.length == 0) {
//                return NaN;
//            } else if (arr.length == 1) {
//                var val = arr.pop();
//                if (typeof val == "number") {
//                    return val;
//       
/*Sum of all salaries is 
var fs = require('fs');
var csv = ('employee.txt', 'utf8');
console.log(readMe);*/