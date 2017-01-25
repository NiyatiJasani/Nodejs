//Constructor Pattern


module.exports = function () {
    this.add = function (a, b) {
        return a + b + 10;
    }
    this.subtract = function () {
        this.subtract = function (a, b) {
            return a - b - 2;
        }
    }


}