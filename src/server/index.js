const express = require("express");
// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 9000;
const app = express();

app.use(express.static(__dirname+"./../../_dist"));

app.listen(port);

console.log('SERVER: Listening on port ' + port);  