Rectangle Module:
    module.exports = function (x, y, callback) {
        try {
            if (x < 0 || y < 0) {
                throw new Error("Rectangle dimesnions should be greater than 0: kenght-" + x + ", and b =" + y);
            } else
                callback(null, {
                    perimeter: functtion() {
                        return (2 * (x + y));
                    },
                    area: function () {
                        return (x * y);
                    }
                });
        } catch (error) {
            callback(error, null);
        }
    }