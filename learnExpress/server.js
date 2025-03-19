const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send("Welcome to Loren's test express app!")
})

// Serve static files from a folder (looks for index.html by defualt but you can use the file name in the URL)
app.use('/helloworld', express.static("public"))

// We can pass in the logger for just this path.
// You can pass as much middleware in as you want.
app.get('/loggerTest', logger, (req, res) => {
    res.send("Welcome to Loren's test express app!")
})

// Setup Logger
// This wont trigger for the '/' route because it's defined later in the file
app.use(logger)

app.get('/exampleFileDownload', (req, res) => {
    res.download("testFile.txt")
})

// Import and init example router
const exampleRouter = require('./routes/example.js')
app.use('/example', exampleRouter)

// Set port and listen.  Should be last
app.listen(port, () => {
    console.log(`App listineing on port ${port}`)
})

// Middleware logger example
// Where you put this does not matter.  The app.use(logger) location matters
function logger(req, res, next) {
    console.log(`Full URL: ${req.url}`)
    next()
}

// Other stuff you can do:
//  You can serve dynamic content with tools like EJS.  I would personally prefer a React or Angualr fontend with
//  with express used exclusivly as a traditional backend.  A cool example might be to serve a shared login component with 
//  EJS and have the react app render that component and use the express backend for requests after authentication.  That 
//  could make your auth view app agnostic.