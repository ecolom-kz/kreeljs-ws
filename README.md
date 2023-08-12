# KREEL websocket interface (kreeljs-ws)

Pure JavaScript KREEL websocket library for node.js and browsers. Can be used to easily connect to and obtain data from the KREEL blockchain via public apis or local nodes.

Credit for the original implementation goes to [jcalfeee](https://github.com/jcalfee).

[![npm version](https://img.shields.io/npm/v/kreeljs-ws.svg?style=flat-square)](https://www.npmjs.com/package/kreeljs-ws)
[![npm downloads](https://img.shields.io/npm/dm/kreeljs-ws.svg?style=flat-square)](https://www.npmjs.com/package/kreeljs-ws)


## Setup

This library can be obtained through npm:
```
npm install kreeljs-ws
```

## Usage

Several examples are available in the /examples folder, and the tests in /test also show how to use the library.

Browser bundles are provided in /build/, for testing purposes you can access this from rawgit:

```
<script type="text/javascript" src="https://cdn.rawgit.com/ecolom-kz/kreeljs-ws/build/kreeljs-ws.js" />
```

A variable kreel_ws will be available in window.

For use in a webpack/browserify context, see the example below for how to open a websocket connection to the Openledger API and subscribe to any object updates:

```
var {Apis} = require("kreeljs-ws");
Apis.instance("wss://ecolom-kz.openledger.info/ws", true).init_promise.then((res) => {
    console.log("connected to:", res[0].network);
    Apis.db.set_subscribe_callback( updateListener, true )
});

function updateListener(object) {
    console.log("set_subscribe_callback:\n", object);
}
```
The `set_subscribe_callback` callback (updateListener) will be called whenever an object on the blockchain changes or is removed. This is very powerful and can be used to listen to updates for specific accounts, assets or most anything else, as all state changes happen through object updates. Be aware though that you will receive quite a lot of data this way.

# Witness node endpoints
This is a non-exhaustive list of endpoints available from the witness_node executable, which provides the API server of KREEL.

## Public API

### Database API

To access the Database API, you can use the `Apis.db` object.

__Usage example__
`Apis.db.get_objects(["1.3.0", "2.0.0", "2.1.0"])`

### History API

To access the Account History API, you can use the `Apis.history` object.

__Usage example__
`Apis.history.get_account_history("1.2.849826", "1.11.0", 10, "1.11.0")`

## Tests

The tests show several use cases, to run, simply type `npm run test`. The tests require a local witness node to be running, as well as an active internet connection.
