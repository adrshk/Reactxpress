const express = require('express');
const path = require('path');

//port
const port = process.env.PORT || 2522;

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
// Set static folder
app.use(express.static(path.join(__dirname, '/build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
// } else {
//   app.get("/", (req, res) => {
//   res.send("Node server is running on Local Enviroment.");
// });
//}



app.listen(port, () => console.log(`Server started on port ${port}`));