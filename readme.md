# Server Sent Events

This is a barebones demo of server sent events. Checkout [server.js](/server.js) and [index.html](/index.html) for the implementation.

Check out the mdn docs on [Using server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) to get the specifics of server sent events.

From mdn: 

> The server-side script that sends events needs to respond using the MIME type `text/event-stream`. Each notification is sent as a block of text terminated by a pair of newlines. For details on the format of the event stream, see [Event stream](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) format.

## Improvements

You can do quite a bit more with the sent events than is demonstrated:

- pass a unique id for each event
- send named events
- send data in the form of json

The `setInterval` implementation for triggering events may not be what you are looking for. This library [sse-pubsub](https://www.npmjs.com/package/sse-pubsub) by triblondon seems more extensible. Or this server sent events tutorial by [Tom Kersten](https://tomkersten.com/articles/server-sent-events-with-node/). It uses a pubsub pattern backed by redis. I didn't even know redis had pubsub features.

