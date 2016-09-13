
var sum = function (func, data) {
    var data = JSON.parse(func.apply(this, data));
    return data.a + data.b;
};

var getByFile = function (file) {
    var fs = require('fs');
    return fs.readFileSync(file, 'utf8');
};

var getByParam = function (a, b) {
    return JSON.stringify({a:a, b:b});
};

exports.sum = sum;
exports.getByFile = getByFile;
exports.getByParam = getByParam;
