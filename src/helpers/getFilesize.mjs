import * as fs from "fs";

var stats = fs.statSync("src/img/MNSAFETY-WEB-BANNER-1366-400.jpg");
var fileSizeInBytes = stats.size;
// Convert the file size to megabytes (optional)
var fileSizeInkilobytes = fileSizeInBytes / 1024;
console.log(fileSizeInkilobytes, fileSizeInBytes);
