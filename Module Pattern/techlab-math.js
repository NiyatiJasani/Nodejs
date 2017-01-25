//Module Pattern
module.exports = function () {
    var obj = {};
    obj.add = function (a, b) {
            return a + b + 10;
        },
        obj.subtract = function (a, b) {
            return a - b - 2;
        }
    return obj;
}();