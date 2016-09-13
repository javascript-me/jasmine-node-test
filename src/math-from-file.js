var fs = require('fs');

var sumFromPropertyFile = function (file) {
    var data = JSON.parse(fs.readFileSync(file, 'utf8'));
    return data.a + data.b;
};

exports.sumFromPropertyFile = sumFromPropertyFile;
