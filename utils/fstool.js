var fs = require('fs');
var path = require('path');
// dir path where cli command executed in.
var dir = process.cwd();

function scanDir(dirPath, result) {
    result = result ? result : [];
    var files = fs.readdirSync(dirPath);
    var dir = '';
    for (var i in files) {
        dir = path.resolve(dirPath, files[i]);
        var stat = fs.statSync(dir);

        if (stat.isDirectory()) {
            getAllFiles(dir, result);
        }
        result.push(dir);

        // result.push(files[i]);
    }
    return result;
}

module.exports = {
    scanDir: scanDir
}

