const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;  // ES6 syntax for if-else.

app.listen(PORT, () => {
    console.log('listening on port 3000')
})