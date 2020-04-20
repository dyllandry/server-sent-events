# Server Sent Events

This is a barebones demo of server sent events. Checkout [server.js]('/server.js') and [index.html]('/index.html') for the implementation.

## Improvements

You can do quite a bit more with the sent events than is demonstrated:

- pass a unique id for each event
- send named events
- send data in the form of json

The `setInterval` implementation for triggering events may not be what you are looking for. This library [sse-pubsub](https://www.npmjs.com/package/sse-pubsub) by triblondon seems more extensible. Or this server sent events tutorial by [Tom Kersten](https://tomkersten.com/articles/server-sent-events-with-node/). It uses a pubsub pattern backed by redis. I didn't even know redis had pubsub features.

