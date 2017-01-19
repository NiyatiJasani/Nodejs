module.exports = function () {
    var obj = {};
    var _id;
    var _name;
    var _orders = [];

    obj.setCustomer = function (id, name, order) {
        _id = id;
        _name = name;
        _orders.push(order);
    }
    obj.getOrder = function () {
        return _orders;
    }

    obj.getCustomer = function () {
        return {
            id: _id,
            name: _name,
            order: _orders
        };
    }
    obj.addOrder = function (order) {
        _orders.push(order);

    }
    return obj;
}();


//var array = require('array');
//var orders = array([1, 2, 3]);
//
//console.log(orders.length);