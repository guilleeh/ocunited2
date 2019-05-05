const express = require('express');
const path = require('path');
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny")); // logging framework

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    app.use(express.static("build"));
  
    // Express will serve up the front-end index.html file if it doesn't recognize the route
    app.get("*", (req, res) =>
      res.sendFile(path.resolve("build", "index.html"))
    );
  }
  
  // Choose the port and start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
