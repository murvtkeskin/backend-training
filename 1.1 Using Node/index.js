const { isUtf8 } = require("buffer");
const fs = require("fs");




fs.readFile("./message.txt", "Utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});