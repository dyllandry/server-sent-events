const express = require('express')
const path = require('path')
const app = express()

// The page served by this endpoint uses the server-send-events endpoint.
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

// This endpoint sets up server sent events.
app.get('/server-sent-event', function(req, res) {

    // Step 1/3: Setup an interval to continuously send events to the browser.
    const intervalId = setInterval(function() {
        res.write('data: Message from the server!\n\n')
    }, 3000)

    // Step 2/3: When the browser is closed, stop the event interval.
    req.on('close', function() {
        clearInterval(intervalId)
    })

    // Step 3/3: Send first response.
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    })
})

app.listen('3000', function(req, res) {
    console.log('listening on http://localhost:3000')
})

