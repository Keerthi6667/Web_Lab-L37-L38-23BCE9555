// Import events module
const EventEmitter = require('events');

// Create an event emitter object
const eventEmitter = new EventEmitter();

// Register Event Listener 1
eventEmitter.on('greet', (name) => {
    console.log(`Hello ${name}, welcome!`);
});

// Register Event Listener 2 (multiple listeners for same event)
eventEmitter.on('greet', (name) => {
    console.log(`How are you, ${name}?`);
});

// Register another event
eventEmitter.on('bye', (name) => {
    console.log(`Goodbye ${name}!`);
});

// Trigger (emit) events with data
console.log("Event execution started...");

eventEmitter.emit('greet', 'Keerthi');

// Asynchronous behavior using setTimeout
setTimeout(() => {
    eventEmitter.emit('bye', 'Keerthi');
}, 2000);

console.log("Event execution ended...");